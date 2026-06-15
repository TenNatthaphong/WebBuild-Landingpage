'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const SITES = [
  {
    url:   'https://freshbox.hostinglotus.cloud/',
    host:  'freshbox.hostinglotus.cloud',
    title: 'FreshBox Delivery',
    tag:   'ร้านอาหาร',
    img:   '/examples/freshbox-delivery.png',
  },
  {
    url:   'https://vivid-creative-studio.hostinglotus.cloud/',
    host:  'vivid-creative-studio.hostinglotus.cloud',
    title: 'Vivid Creative Studio',
    tag:   'สตูดิโอ',
    img:   '/examples/vivid-creative-studio.png',
  },
  {
    url:   'https://thepavilion.hostinglotus.cloud/',
    host:  'thepavilion.hostinglotus.cloud',
    title: 'The Pavilion',
    tag:   'อสังหาริมทรัพย์',
    img:   '/examples/thepavilion.png',
  },
  {
    url:   'https://stillplant-modern.hostinglotus.cloud/',
    host:  'stillplant-modern.hostinglotus.cloud',
    title: 'Still Plant',
    tag:   'ร้านต้นไม้',
    img:   '/examples/stillplant.png',
  },
]

const CARD_W  = 380
const CARD_GAP = 20
const SINGLE_W = SITES.length * (CARD_W + CARD_GAP) // seamless jump distance
const SPEED    = 0.55 // px per animation frame (~33px/s at 60fps)

// Duplicate for seamless loop
const TRACK = [...SITES, ...SITES]

function SiteCard({ site, dragging }: { site: typeof SITES[0]; dragging: boolean }) {
  const [hovered, setHovered] = useState(false)
  const show = hovered && !dragging

  return (
    <motion.div
      className="relative flex-shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
      style={{ width: CARD_W }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: show ? 1.03 : 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>

      <div className="relative overflow-hidden" style={{ width: CARD_W, aspectRatio: '16/9' }}>
        <Image
          src={site.img}
          alt={site.title}
          fill
          sizes={`${CARD_W}px`}
          draggable={false}
          style={{ objectFit: 'cover', objectPosition: '0% 0%', userSelect: 'none' }}
        />
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        animate={{ background: show ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0)' }}
        transition={{ duration: 0.22 }}>
        <motion.a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-bold text-sm shadow-xl hover:bg-gray-100 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          onClick={e => { if (dragging) e.preventDefault(); e.stopPropagation() }}>
          ดูเว็บจริง
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </motion.div>

      {/* Tag pill */}
      <div className="absolute bottom-3 left-3">
        <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 shadow-sm">
          {site.tag}
        </span>
      </div>
    </motion.div>
  )
}

export default function Examples() {
  const trackRef    = useRef<HTMLDivElement>(null)
  const rafRef      = useRef<number>()
  const dragging    = useRef(false)
  const hasMoved    = useRef(false)
  const startX      = useRef(0)
  const scrollStart = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  // Auto-scroll RAF loop
  useEffect(() => {
    const tick = () => {
      if (!dragging.current && trackRef.current) {
        trackRef.current.scrollLeft += SPEED
        // Seamless loop: jump back one set when we've scrolled through it
        if (trackRef.current.scrollLeft >= SINGLE_W) {
          trackRef.current.scrollLeft -= SINGLE_W
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    if (!trackRef.current) return
    dragging.current  = true
    hasMoved.current  = false
    startX.current    = e.pageX
    scrollStart.current = trackRef.current.scrollLeft
    trackRef.current.setPointerCapture(e.pointerId)
    setIsDragging(true)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !trackRef.current) return
    const walk = (e.pageX - startX.current) * 1.3
    if (Math.abs(walk) > 3) hasMoved.current = true
    let next = scrollStart.current - walk
    // Keep within bounds for seamless loop
    if (next < 0) next += SINGLE_W
    if (next >= SINGLE_W) next -= SINGLE_W
    trackRef.current.scrollLeft = next
  }

  const onPointerUp = () => {
    dragging.current = false
    setIsDragging(false)
  }

  return (
    <section id="examples" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,#86efac 0%,transparent 70%)' }} />

      {/* Heading */}
      <motion.div className="text-center mb-14 px-6"
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}>
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold border border-brand-200">
          ตัวอย่างเว็บ
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
          เว็บที่สร้างด้วย{' '}
          <span className="text-gradient-green">HostingLotus AI</span>
        </h2>
        <p className="mt-3 text-gray-500 text-lg">ตัวอย่างจริงจากธุรกิจไทยที่ใช้ AI สร้างเว็บกับเรา</p>
      </motion.div>

      {/* Left / right fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right,#ffffff,transparent)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left,#ffffff,transparent)' }} />

      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex gap-5 px-8 overflow-x-auto select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: isDragging ? 'grabbing' : 'grab',
          WebkitOverflowScrolling: 'touch',
        } as React.CSSProperties}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}>
        {TRACK.map((site, i) => (
          <SiteCard key={i} site={site} dragging={isDragging && hasMoved.current} />
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}
