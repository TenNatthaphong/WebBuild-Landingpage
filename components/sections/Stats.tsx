'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'

const STATS = [
  { value: 10000, suffix: '+',       label: 'เว็บที่สร้างแล้ว',        accent: '#43a047', bg: '#f0fdf4', border: '#bbf7d0' },
  { value: 3,     suffix: ' นาที',   label: 'เวลาเฉลี่ย',              accent: '#e91e63', bg: '#fff0f6', border: '#f8bbd0', prefix: '< ' },
  { value: 50,    suffix: ' เครดิต', label: 'ฟรีสำหรับผู้ใช้ใหม่',    accent: '#43a047', bg: '#f0fdf4', border: '#bbf7d0' },
  { value: 99.9,  suffix: '%',       label: 'Uptime SLA',               accent: '#e91e63', bg: '#fff0f6', border: '#f8bbd0' },
]

function Counter({ value, suffix, prefix = '', accent }: { value: number; suffix: string; prefix?: string; accent: string }) {
  const ref    = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const mv     = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 20 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const ctrl  = animate(mv, value, { duration: 1.8, ease: 'easeOut' })
    const unsub = spring.on('change', (v) => {
      setDisplay(value < 100 ? v.toFixed(1) : Math.floor(v).toLocaleString())
    })
    return () => { ctrl.stop(); unsub() }
  }, [inView, value])

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-extrabold tabular-nums" style={{ color: accent }}>
      {prefix}{display}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div key={i}
              className="relative bg-white rounded-3xl p-8 border shadow-sm hover:shadow-md transition-all text-center overflow-hidden group"
              style={{ borderColor: s.border }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -4 }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: `linear-gradient(135deg, ${s.bg} 0%, transparent 60%)` }} />
              <div className="relative">
                <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} accent={s.accent} />
                <p className="mt-2 text-sm text-gray-500 font-medium">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
