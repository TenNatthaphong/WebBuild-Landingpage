'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const COLS = 58
const ROWS = 34
const COUNT = COLS * ROWS

export default function ThreeHeroBg() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth
    const H = mount.clientHeight

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()

    // Linear fog fades far rows into the page background
    scene.fog = new THREE.Fog(0xf8fdf8, 10, 28)

    const camera = new THREE.PerspectiveCamera(52, W / H, 0.1, 100)
    camera.position.set(0, 5.5, 10)
    camera.lookAt(0, 0, -1)

    // ── Build grid ──────────────────────────────────────────────
    const positions = new Float32Array(COUNT * 3)
    const colors    = new Float32Array(COUNT * 3)

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const i = row * COLS + col
        positions[i * 3]     = (col / (COLS - 1) - 0.5) * 30   // x
        positions[i * 3 + 1] = 0                                  // y (animated)
        positions[i * 3 + 2] = (row / (ROWS - 1) - 0.5) * 18   // z
      }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.075,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    })

    scene.add(new THREE.Points(geo, mat))

    // ── Mouse parallax ──────────────────────────────────────────
    let mx = 0, my = 0
    const onMouseMove = (e: MouseEvent) => {
      mx =  (e.clientX / window.innerWidth  - 0.5) * 2
      my = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // ── Color palette ───────────────────────────────────────────
    // trough → peak: deep teal #0d9488 → bright mint #a7f3d0
    //   r: 0.051 → 0.655   Δ = +0.604
    //   g: 0.580 → 0.953   Δ = +0.373
    //   b: 0.533 → 0.816   Δ = +0.283
    const R0 = 0.051, RΔ = 0.604
    const G0 = 0.580, GΔ = 0.373
    const B0 = 0.533, BΔ = 0.283

    const clock = new THREE.Clock()
    let rafId: number

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      for (let i = 0; i < COUNT; i++) {
        const x = positions[i * 3]
        const z = positions[i * 3 + 2]

        // Three overlapping sinusoidal waves
        const wave =
          Math.sin(x * 0.36 + t * 0.72) * Math.cos(z * 0.42 + t * 0.58) * 1.15 +
          Math.sin(x * 0.19 + z * 0.24 + t * 0.44) * 0.60 +
          Math.cos(x * 0.52 - z * 0.31 + t * 0.88) * 0.38

        positions[i * 3 + 1] = wave

        // Map wave [-2.13, +2.13] → [0, 1]
        const n = Math.max(0, Math.min(1, (wave + 2.13) / 4.26))
        colors[i * 3]     = R0 + n * RΔ
        colors[i * 3 + 1] = G0 + n * GΔ
        colors[i * 3 + 2] = B0 + n * BΔ
      }

      geo.attributes.position.needsUpdate = true
      geo.attributes.color.needsUpdate    = true

      // Gentle autonomous sway + mouse tilt
      const swayX = Math.sin(t * 0.17) * 0.9
      const swayZ = Math.cos(t * 0.11) * 0.5
      camera.position.x += (mx * 1.4 + swayX - camera.position.x) * 0.018
      camera.position.y += (my * 0.6 + 5.5   - camera.position.y) * 0.018
      camera.position.z += (swayZ + 10        - camera.position.z) * 0.018
      camera.lookAt(0, 0, -1)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
