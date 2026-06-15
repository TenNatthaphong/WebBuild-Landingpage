'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PARTICLE_COUNT = 90
const CONNECTION_DIST = 2.8
const MAX_LINES = 300

export default function ThreeHeroBg() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth
    const H = mount.clientHeight

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Scene + camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100)
    camera.position.z = 6

    // Particles
    const pPositions = new Float32Array(PARTICLE_COUNT * 3)
    const velocities: [number, number][] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pPositions[i * 3]     = (Math.random() - 0.5) * 14
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 9
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 3
      velocities.push([(Math.random() - 0.5) * 0.006, (Math.random() - 0.5) * 0.006])
    }

    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3))
    const pMat = new THREE.PointsMaterial({ size: 0.055, color: 0x43a047, transparent: true, opacity: 0.65 })
    const points = new THREE.Points(pGeo, pMat)
    scene.add(points)

    // Pre-allocated line segments
    const lPositions = new Float32Array(MAX_LINES * 2 * 3)
    const lGeo = new THREE.BufferGeometry()
    lGeo.setAttribute('position', new THREE.BufferAttribute(lPositions, 3))
    lGeo.setDrawRange(0, 0)
    const lMat = new THREE.LineBasicMaterial({ color: 0x43a047, transparent: true, opacity: 0.12 })
    const lineSegs = new THREE.LineSegments(lGeo, lMat)
    scene.add(lineSegs)

    // Mouse parallax
    let mx = 0, my = 0
    const onMouseMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2
      my = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // Resize
    const onResize = () => {
      if (!mount) return
      const w = mount.clientWidth, h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // Animate
    let rafId: number
    const animate = () => {
      rafId = requestAnimationFrame(animate)

      // Move particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pPositions[i * 3]     += velocities[i][0]
        pPositions[i * 3 + 1] += velocities[i][1]
        if (Math.abs(pPositions[i * 3]) > 7)     velocities[i][0] *= -1
        if (Math.abs(pPositions[i * 3 + 1]) > 4.5) velocities[i][1] *= -1
      }
      pGeo.attributes.position.needsUpdate = true

      // Build line segments
      let drawCount = 0
      for (let i = 0; i < PARTICLE_COUNT && drawCount < MAX_LINES; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT && drawCount < MAX_LINES; j++) {
          const dx = pPositions[i*3] - pPositions[j*3]
          const dy = pPositions[i*3+1] - pPositions[j*3+1]
          const dz = pPositions[i*3+2] - pPositions[j*3+2]
          const d2 = dx*dx + dy*dy + dz*dz
          if (d2 < CONNECTION_DIST * CONNECTION_DIST) {
            const base = drawCount * 6
            lPositions[base]   = pPositions[i*3];   lPositions[base+1] = pPositions[i*3+1]; lPositions[base+2] = pPositions[i*3+2]
            lPositions[base+3] = pPositions[j*3];   lPositions[base+4] = pPositions[j*3+1]; lPositions[base+5] = pPositions[j*3+2]
            drawCount++
          }
        }
      }
      lGeo.setDrawRange(0, drawCount * 2)
      lGeo.attributes.position.needsUpdate = true

      // Parallax
      camera.position.x += (mx * 0.35 - camera.position.x) * 0.025
      camera.position.y += (my * 0.22 - camera.position.y) * 0.025

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      pGeo.dispose(); pMat.dispose()
      lGeo.dispose(); lMat.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}
