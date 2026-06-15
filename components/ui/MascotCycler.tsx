'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const MASCOTS = [
  { src: '/mascot-1.png', alt: 'น้องใบบัว โบกมือ' },
  { src: '/mascot-2.png', alt: 'น้องใบบัว ใช้แล็ปท็อป' },
  { src: '/mascot-3.png', alt: 'น้องใบบัว อุ้มหัวใจ' },
  { src: '/mascot-4.png', alt: 'น้องใบบัว อ่านหนังสือ' },
  { src: '/mascot-5.png', alt: 'น้องใบบัว รดน้ำ' },
  { src: '/mascot-6.png', alt: 'น้องใบบัว ดีใจ' },
]

const INTERVAL = 3500

export default function MascotCycler({ size = 180 }: { size?: number }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % MASCOTS.length), INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ width: size, height: size }} className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          className="absolute inset-0 flex items-end justify-center"
          initial={{ opacity: 0, y: 18, scale: 0.88 }}
          animate={{ opacity: 1, y: 0,  scale: 1 }}
          exit={{   opacity: 0, y: -14, scale: 0.92 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
          <Image
            src={MASCOTS[idx].src}
            alt={MASCOTS[idx].alt}
            width={size}
            height={size}
            style={{ objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(46,125,50,0.18))' }}
            priority={idx === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* dot indicators */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
        {MASCOTS.map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full cursor-pointer"
            style={{ background: i === idx ? '#2e7d32' : '#bbf7d0' }}
            animate={{ width: i === idx ? 16 : 6, height: 6 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </div>
  )
}
