'use client'
import { useState } from 'react'
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

// Duplicate 3× for seamless infinite loop
const TRACK = [...SITES, ...SITES, ...SITES]

function SiteCard({ site }: { site: typeof SITES[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
      style={{ width: 380 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: hovered ? 1.04 : 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>

      {/* Screenshot */}
      <div className="relative overflow-hidden" style={{ width: 380, aspectRatio: '16/9' }}>
        <Image
          src={site.img}
          alt={site.title}
          fill
          sizes="380px"
          style={{ objectFit: 'cover', objectPosition: '0% 0%' }}
        />
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        style={{ background: 'rgba(0,0,0,0)' }}
        animate={{ background: hovered ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0)' }}
        transition={{ duration: 0.25 }}>
        <motion.a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-bold text-sm shadow-2xl hover:bg-gray-100 transition-colors"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
          transition={{ duration: 0.25, delay: hovered ? 0.05 : 0 }}
          onClick={e => e.stopPropagation()}>
          ดูเว็บจริง
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default function Examples() {
  const [paused, setPaused] = useState(false)

  return (
    <section id="examples" className="py-24 bg-white overflow-hidden relative">
      {/* Subtle green glow */}
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: 'linear-gradient(to right,#ffffff,transparent)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: 'linear-gradient(to left,#ffffff,transparent)' }} />

      {/* Scrolling track */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
        <div
          className="flex gap-5 w-max"
          style={{
            animation: `marquee-left 38s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
          }}>
          {TRACK.map((site, i) => (
            <SiteCard key={i} site={site} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-380px * ${SITES.length} - 20px * ${SITES.length})); }
        }
      `}</style>
    </section>
  )
}
