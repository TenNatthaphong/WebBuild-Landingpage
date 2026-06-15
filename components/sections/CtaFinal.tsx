'use client'
import { motion } from 'framer-motion'
import { Zap, ArrowRight, Check } from 'lucide-react'

const STATS = [
  { value: '50', unit: 'เครดิต', label: 'ฟรีสำหรับผู้ใช้ใหม่' },
  { value: '< 7', unit: 'นาที', label: 'สร้างเว็บเสร็จ' },
  { value: '฿0', unit: '', label: 'ค่าใช้จ่ายเริ่มต้น' },
]

const SPARKLES = [
  { top: '14%',  left: '7%',   size: 5, delay: 0 },
  { top: '22%',  right: '10%', size: 4, delay: 1.2 },
  { top: '60%',  left: '4%',   size: 6, delay: 0.7 },
  { bottom: '18%', right: '7%', size: 5, delay: 2.0 },
  { top: '40%',  right: '4%',  size: 4, delay: 0.4 },
  { bottom: '28%', left: '10%', size: 7, delay: 1.6 },
  { top: '75%',  left: '22%',  size: 3, delay: 0.9 },
  { top: '10%',  right: '25%', size: 3, delay: 1.8 },
]

export default function CtaFinal() {
  return (
    <section
      className="relative overflow-hidden py-32 px-6 text-center"
      style={{ background: 'linear-gradient(160deg, #f0fdf4 0%, #dcfce7 45%, #f0fdf4 100%)' }}>

      {/* Center radial spotlight */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 35%, rgba(74,222,128,0.2) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.22,
          backgroundImage: 'radial-gradient(circle, #86efac 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />

      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Glow orbs */}
      <div className="absolute -top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none animate-blob"
        style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.35) 0%, transparent 60%)' }} />
      <div className="absolute -bottom-1/3 -right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none animate-blob delay-4000"
        style={{ background: 'radial-gradient(circle, rgba(187,247,208,0.4) 0%, transparent 60%)' }} />

      {/* Sparkle particles */}
      {SPARKLES.map((s, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: s.size, height: s.size,
            top: (s as any).top, left: (s as any).left,
            right: (s as any).right, bottom: (s as any).bottom,
            background: '#22c55e',
          }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.8 + i * 0.25, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.22,1,0.36,1] }}>

        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-brand-300 bg-white/70 backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-brand-700 text-sm font-semibold">เริ่มต้นได้วันนี้ ฟรี ไม่มีเงื่อนไข</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-gray-950 leading-[1.08] mb-5"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
          เปลี่ยนไอเดีย<br />
          ให้เป็น<span className="text-gradient-green"> เว็บจริง</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.26 }}>
          บอก AI ว่าต้องการเว็บแบบไหน — สร้างเว็บสวยพร้อม Hosting ให้ทุกอย่างใน&nbsp;3&nbsp;นาที
        </motion.p>

        {/* Stats strip */}
        <motion.div
          className="inline-flex items-center divide-x divide-brand-200 rounded-2xl mb-10 overflow-hidden bg-white/60 backdrop-blur-sm border border-brand-100"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.32 }}>
          {STATS.map((s, i) => (
            <div key={i} className="px-7 py-4 text-center">
              <div className="font-extrabold text-gray-900 text-xl leading-tight">
                {s.value}<span className="text-brand-600">{s.unit && ` ${s.unit}`}</span>
              </div>
              <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-brand-500"
              animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.a href="#"
              className="relative inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-lg transition-colors shadow-lg shadow-brand-600/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}>
              <Zap size={18} strokeWidth={2.5} /> เริ่มสร้างด้วย AI ฟรี
            </motion.a>
          </div>
          <motion.a href="#examples"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold text-lg hover:border-brand-300 hover:text-brand-700 transition-all shadow-sm"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}>
            ดูตัวอย่างเว็บ <ArrowRight size={18} strokeWidth={2} />
          </motion.a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          {['ไม่ต้องบัตรเครดิต', 'สร้างเว็บได้ทันที', 'รองรับภาษาไทย 100%', 'Support ทีมไทย'].map(t => (
            <span key={t} className="flex items-center gap-1.5 text-sm text-gray-400">
              <Check size={13} strokeWidth={2.5} className="text-brand-500 flex-shrink-0" /> {t}
            </span>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}
