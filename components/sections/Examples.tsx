'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Plus, Minus, Settings } from 'lucide-react'

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

// 4x duplicates — enough content for seamless loop on any viewport width
const TRACK = [...SITES, ...SITES, ...SITES, ...SITES]

const CARD_GAP = 20
const SPEED = 0.55
const cardWidths = [380, 253]

function getSingleW(cardWidth: number) {
  return SITES.length * cardWidth + (SITES.length - 1) * CARD_GAP
}

function SiteCard({ site, dragging, cardWidth }: { site: typeof SITES[0]; dragging: boolean; cardWidth: number }) {
  const [hovered, setHovered] = useState(false)
  const show = hovered && !dragging

  return (
    <motion.div
      className="relative flex-shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
      style={{ width: cardWidth }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: show ? 1.03 : 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>

      <div className="relative overflow-hidden" style={{ width: cardWidth, aspectRatio: '16/9' }}>
        <Image
          src={site.img}
          alt={site.title}
          fill
          sizes={`${cardWidth}px`}
          draggable={false}
          style={{ objectFit: 'cover', objectPosition: '0% 0%', userSelect: 'none' }}
        />
      </div>

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

      <div className="absolute bottom-3 left-3">
        <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 shadow-sm">
          {site.tag}
        </span>
      </div>
    </motion.div>
  )
}

export default function Examples() {
  const [rowCount, setRowCount] = useState(3)
  const [rowSizes, setRowSizes] = useState<number[]>([0, 0, 0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const tracksRef    = useRef<(HTMLDivElement | null)[]>([])
  const rafsRef      = useRef<number[]>([])
  const posRef       = useRef<number[]>([0])        // translateX value per row (always ≤ 0)
  const draggingRef  = useRef<boolean[]>([false])
  const hasMovedRef  = useRef<boolean[]>([false])
  const startXRef    = useRef<number[]>([0])
  const startPosRef  = useRef<number[]>([0])
  const [isDragging, setIsDragging] = useState<boolean[]>([])

  const sizeLabels = ['3840px', '2560px']

  const adjustRowCount = (delta: number) => {
    setRowCount((prev) => {
      const next = Math.max(1, Math.min(3, prev + delta))
      if (next > prev) setRowSizes(s => [...s, 0])
      else             setRowSizes(s => s.slice(0, -1))
      return next
    })
  }

  const adjustCardSize = (rowIdx: number, delta: number) => {
    const s = [...rowSizes]
    s[rowIdx] = Math.max(0, Math.min(1, s[rowIdx] + delta))
    setRowSizes(s)
  }

  useEffect(() => {
    rafsRef.current.forEach(id => cancelAnimationFrame(id))
    rafsRef.current = []

    draggingRef.current = Array(rowCount).fill(false)
    hasMovedRef.current = Array(rowCount).fill(false)
    startXRef.current   = Array(rowCount).fill(0)
    startPosRef.current = Array(rowCount).fill(0)
    setIsDragging(Array(rowCount).fill(false))

    // Reset positions — even rows start at 0 (move left), odd rows start at -SINGLE_W (move right)
    posRef.current = Array.from({ length: rowCount }, (_, i) => {
      const SINGLE_W = getSingleW(cardWidths[rowSizes[i]])
      return i % 2 === 0 ? 0 : -SINGLE_W
    })

    Array.from({ length: rowCount }).forEach((_, rowIdx) => {
      const direction = rowIdx % 2 === 0 ? -1 : 1 // -1 = left, +1 = right
      const SINGLE_W  = getSingleW(cardWidths[rowSizes[rowIdx]])

      const tick = () => {
        const track = tracksRef.current[rowIdx]
        if (!track) { rafsRef.current[rowIdx] = requestAnimationFrame(tick); return }

        if (!draggingRef.current[rowIdx]) {
          posRef.current[rowIdx] += SPEED * direction

          // Wrap: keep pos in range [-SINGLE_W, 0)
          if (posRef.current[rowIdx] > 0)          posRef.current[rowIdx] -= SINGLE_W
          if (posRef.current[rowIdx] <= -SINGLE_W)  posRef.current[rowIdx] += SINGLE_W

          track.style.transform = `translateX(${posRef.current[rowIdx]}px)`
        }

        rafsRef.current[rowIdx] = requestAnimationFrame(tick)
      }

      rafsRef.current[rowIdx] = requestAnimationFrame(tick)
    })

    return () => { rafsRef.current.forEach(id => cancelAnimationFrame(id)) }
  }, [rowCount, rowSizes])

  const createPointerHandlers = (rowIdx: number) => ({
    onPointerDown: (e: React.PointerEvent) => {
      draggingRef.current[rowIdx] = true
      hasMovedRef.current[rowIdx] = false
      startXRef.current[rowIdx]   = e.pageX
      startPosRef.current[rowIdx] = posRef.current[rowIdx]
      ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
      setIsDragging(prev => { const n = [...prev]; n[rowIdx] = true; return n })
    },
    onPointerMove: (e: React.PointerEvent) => {
      if (!draggingRef.current[rowIdx]) return
      const walk = (e.pageX - startXRef.current[rowIdx]) * 1.3
      if (Math.abs(walk) > 3) hasMovedRef.current[rowIdx] = true

      const SINGLE_W = getSingleW(cardWidths[rowSizes[rowIdx]])
      let next = startPosRef.current[rowIdx] + walk
      // Keep in range
      while (next > 0)          next -= SINGLE_W
      while (next <= -SINGLE_W) next += SINGLE_W

      posRef.current[rowIdx] = next
      const track = tracksRef.current[rowIdx]
      if (track) track.style.transform = `translateX(${next}px)`
    },
    onPointerUp: () => {
      draggingRef.current[rowIdx] = false
      setIsDragging(prev => { const n = [...prev]; n[rowIdx] = false; return n })
    },
    onPointerLeave: () => {
      draggingRef.current[rowIdx] = false
      setIsDragging(prev => { const n = [...prev]; n[rowIdx] = false; return n })
    },
  })

  return (
    <section id="examples" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,#86efac 0%,transparent 70%)' }} />

      <motion.div className="text-center mb-14 px-6"
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}>
        <div className="flex items-center justify-center gap-4 mb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
            เว็บที่สร้างด้วย{' '}
            <span className="text-gradient-vivid">HostingLotus AI</span>
          </h2>

          <div className="relative hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all"
            >
              <Settings size={20} className="text-gray-700" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl border border-gray-200 shadow-lg p-4 z-50">
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">จำนวนแถว</p>
                  <div className="flex items-center justify-between gap-2">
                    <button onClick={() => adjustRowCount(-1)} disabled={rowCount === 1}
                      className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                      <Minus size={16} className="text-gray-700" />
                    </button>
                    <span className="text-lg font-semibold text-gray-700 flex-1 text-center">{rowCount}</span>
                    <button onClick={() => adjustRowCount(1)} disabled={rowCount === 3}
                      className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                      <Plus size={16} className="text-gray-700" />
                    </button>
                  </div>
                </div>

                {Array.from({ length: rowCount }).map((_, idx) => (
                  <div key={idx} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                    <p className="text-sm font-semibold text-gray-700 mb-3">แถวที่ {idx + 1}</p>
                    <div className="flex items-center justify-between gap-2 text-xs text-gray-600">
                      <button onClick={() => adjustCardSize(idx, 1)} disabled={rowSizes[idx] === 1}
                        className="flex items-center justify-center w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                        −
                      </button>
                      <span className="flex-1 text-center font-semibold">{sizeLabels[rowSizes[idx]]}</span>
                      <button onClick={() => adjustCardSize(idx, -1)} disabled={rowSizes[idx] === 0}
                        className="flex items-center justify-center w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold border"
          style={{ background: 'rgba(255,240,246,0.9)', borderColor: 'rgba(233,30,99,0.22)', color: '#ad1457' }}>
          ตัวอย่างเว็บ
        </span>

        <p className="mt-3 text-gray-500 text-lg">ตัวอย่างจริงจากธุรกิจไทยที่ใช้ AI สร้างเว็บกับเรา</p>
      </motion.div>

      {Array.from({ length: rowCount }).map((_, rowIdx) => (
        <div key={rowIdx} className="mb-8 overflow-hidden relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
            style={{ background: 'linear-gradient(to right,#ffffff,transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
            style={{ background: 'linear-gradient(to left,#ffffff,transparent)' }} />

          {/* Outer clip, inner track uses translateX — no scrollLeft, no reflow */}
          <div
            className="overflow-hidden px-8"
            style={{ cursor: isDragging[rowIdx] ? 'grabbing' : 'grab' }}
            {...createPointerHandlers(rowIdx)}>
            <div
              ref={el => { if (el) tracksRef.current[rowIdx] = el }}
              className="flex gap-5 select-none will-change-transform"
              style={{ transform: 'translateX(0px)' }}>
              {TRACK.map((site, i) => (
                <SiteCard
                  key={i}
                  site={site}
                  dragging={isDragging[rowIdx] && hasMovedRef.current[rowIdx]}
                  cardWidth={cardWidths[rowSizes[rowIdx]]}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
