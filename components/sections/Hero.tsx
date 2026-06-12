'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
}
const item = {
  hidden: { y: 44, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const heroRef  = useRef<HTMLElement>(null)
  const b1 = useRef<HTMLDivElement>(null)
  const b2 = useRef<HTMLDivElement>(null)
  const b3 = useRef<HTMLDivElement>(null)
  const b4 = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: heroRef })
  const textY   = useTransform(scrollYProgress, [0,1], [0,-60])
  const mockupY = useTransform(scrollYProgress, [0,1], [0,-30])
  const bgScale = useTransform(scrollYProgress, [0,1], [1, 1.12])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(b1.current, { y: -130, scrollTrigger: { trigger: heroRef.current, start:'top top', end:'bottom top', scrub: 1.8 } })
      gsap.to(b2.current, { y: -70, x: 40, scrollTrigger: { trigger: heroRef.current, start:'top top', end:'bottom top', scrub: 2.5 } })
      gsap.to(b3.current, { y: -100, scrollTrigger: { trigger: heroRef.current, start:'top top', end:'bottom top', scrub: 1.2 } })
      gsap.to(b4.current, { y: -50, x: -30, scrollTrigger: { trigger: heroRef.current, start:'top top', end:'bottom top', scrub: 3 } })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-hero">
      {/* ── Parallax blobs ── */}
      <motion.div ref={b1}
        style={{ scale: bgScale, background: 'radial-gradient(circle, rgba(187,247,208,0.6) 0%, rgba(134,239,172,0.3) 40%, transparent 70%)' }}
        className="absolute -top-[15%] -left-[10%] w-[750px] h-[750px] rounded-full animate-blob pointer-events-none" />
      <div ref={b2}
        className="absolute top-[0%] right-[-12%] w-[650px] h-[650px] rounded-full animate-blob delay-4000 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(253,230,138,0.5) 0%, rgba(251,191,36,0.2) 35%, transparent 70%)' }} />
      <div ref={b3}
        className="absolute bottom-[-25%] left-[35%] w-[500px] h-[500px] rounded-full animate-blob-slow delay-2000 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(187,247,208,0.4) 0%, transparent 65%)' }} />
      <div ref={b4}
        className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full animate-blob delay-6000 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(252,211,77,0.3) 0%, transparent 65%)' }} />

      {/* ── Grid lines ── */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Copy ── */}
        <motion.div variants={stagger} initial="hidden" animate="show" style={{ y: textY }} className="space-y-7">
          <motion.div variants={item}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-100/80 border border-brand-200 text-brand-700 text-sm font-semibold backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-green" />
            BAIBUA — AI Web Builder สัญชาติไทย
          </motion.div>

          <motion.div variants={item} className="space-y-1">
            <h1 className="text-[5.5rem] leading-[1.0] font-extrabold tracking-tight text-gray-950">สร้างเว็บไซต์</h1>
            <h1 className="text-[5.5rem] leading-[1.0] font-extrabold tracking-tight text-gradient-green">
              ด้วย AI
              <span className="inline-block w-[3px] h-[0.9em] bg-brand-500 ml-2 align-middle animate-pulse" />
            </h1>
            <h1 className="text-[5.5rem] leading-[1.0] font-extrabold tracking-tight text-gray-950">ในไม่กี่นาที</h1>
          </motion.div>

          <motion.p variants={item} className="text-xl text-gray-600 max-w-[480px] leading-relaxed">
            บอก <strong className="text-brand-600 font-bold">AI</strong> ว่าต้องการเว็บแบบไหน — สร้างเว็บสวยพร้อม Hosting ให้ทันที
            ไม่ต้องรู้โค้ด ไม่ต้องง้อนักพัฒนา
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <motion.a href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold text-lg shadow-lg shadow-brand-600/30 transition-shadow hover:shadow-brand-600/50"
              whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              ⚡ เริ่มสร้างด้วย AI ฟรี
            </motion.a>
            <motion.a href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-gray-200 text-gray-800 font-bold text-lg hover:border-brand-300 hover:text-brand-700 transition-all shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              ▶ ดูวิดีโอสาธิต
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-gray-500 pt-1">
            {['ไม่ต้องบัตรเครดิต','เครดิตฟรี 50 ครั้งแรก','เริ่มใช้งานได้ทันที','Support ภาษาไทย'].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="text-brand-500 font-bold">✓</span> {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Browser mockup ── */}
        <motion.div style={{ y: mockupY }}
          initial={{ opacity: 0, x: 70, scale: 0.93 }}
          animate={{ opacity: 1, x: 0,  scale: 1 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block">

          {/* Browser chrome */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-brand-900/15 bg-white">
            {/* Top bar */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-lg px-3 py-1.5 text-xs text-gray-400 border border-gray-200 font-mono">
                my-coffee-shop.hostinglotus.cloud
              </div>
              <motion.div
                className="px-3 py-1.5 bg-brand-600 text-white text-xs font-bold rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                ⚡ Publish
              </motion.div>
            </div>

            {/* Website skeleton */}
            <div className="bg-gradient-to-br from-brand-50 to-white p-5 h-72">
              <div className="h-8 bg-brand-900 rounded-lg mb-4 w-full" />
              <div className="h-10 bg-brand-100 rounded-xl mb-2 w-3/4" />
              <div className="h-3 bg-gray-100 rounded mb-1.5 w-full" />
              <div className="h-3 bg-gray-100 rounded mb-4 w-2/3" />
              <div className="flex gap-3 mb-4">
                <div className="h-9 bg-brand-600 rounded-xl flex-1" />
                <div className="h-9 bg-gray-200 rounded-xl flex-[0.7]" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_,i) => (
                  <div key={i} className="h-14 bg-white rounded-xl border border-gray-100 shadow-sm" />
                ))}
              </div>
            </div>

            {/* AI Chat strip */}
            <div className="border-t border-gray-100 bg-brand-50 px-4 py-3 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AI</div>
              <div className="text-sm text-gray-600">ต้องการแก้ไขส่วนไหน? พิมพ์คำสั่งได้เลยค่ะ...</div>
              <div className="ml-auto w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white text-xs">→</div>
            </div>
          </div>

          {/* Floating card 1 — published */}
          <motion.div
            className="absolute -top-5 -right-10 glass rounded-2xl px-4 py-3 shadow-xl"
            animate={{ y: [0,-10,0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-brand-500 flex items-center justify-center text-white text-base animate-pulse-green">✓</div>
              <div>
                <div className="text-xs font-bold text-gray-800">🚀 Publish สำเร็จ!</div>
                <div className="text-xs text-gray-400">my-shop.hostinglotus.cloud</div>
              </div>
            </div>
          </motion.div>

          {/* Floating card 2 — stats */}
          <motion.div
            className="absolute -bottom-5 -left-10 glass rounded-2xl px-4 py-3 shadow-xl"
            animate={{ y: [0,10,0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
            <div className="text-xs text-gray-400 mb-2">เว็บที่สร้างวันนี้</div>
            <div className="flex items-end gap-1">
              {[45,65,35,80,55,72,88].map((h,i) => (
                <div key={i} className="w-3 rounded-t-sm transition-all"
                  style={{ height: `${h*0.38}px`, background: `rgba(46,125,50,${0.25+i*0.1})` }} />
              ))}
            </div>
          </motion.div>

          {/* Badge — 10k+ */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -left-14 glass rounded-2xl px-4 py-3 shadow-xl text-center"
            animate={{ x: [0,6,0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="text-2xl font-extrabold text-brand-600">10K+</div>
            <div className="text-xs text-gray-400">เว็บที่สร้างแล้ว</div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">เลื่อนลง</span>
        <div className="w-5 h-9 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
          <motion.div className="w-1.5 h-2 bg-brand-500 rounded-full"
            animate={{ y: [0,14,0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
      </motion.div>
    </section>
  )
}
