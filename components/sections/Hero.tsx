'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Zap, Play, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ThreeHeroBg = dynamic(() => import('@/components/ui/ThreeHeroBg'), { ssr: false })

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
      {/* ── Three.js particle network ── */}
      <ThreeHeroBg />

      {/* ── Parallax blobs ── */}
      <motion.div ref={b1}
        style={{ scale: bgScale, background: 'radial-gradient(circle, rgba(255,179,198,0.70) 0%, rgba(255,172,190,0.35) 45%, transparent 70%)' }}
        className="absolute -top-[10%] -left-[8%] w-[720px] h-[720px] rounded-full animate-blob pointer-events-none" />
      <div ref={b2}
        className="absolute top-[0%] right-[-10%] w-[620px] h-[620px] rounded-full animate-blob delay-4000 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,236,153,0.65) 0%, rgba(255,220,80,0.30) 40%, transparent 70%)' }} />
      <div ref={b3}
        className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] rounded-full animate-blob-slow delay-2000 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,240,200,0.45) 0%, transparent 65%)' }} />
      <div ref={b4}
        className="absolute top-[45%] left-[55%] w-[380px] h-[380px] rounded-full animate-blob delay-6000 pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(233,30,99,0.18) 0%, transparent 65%)' }} />

      {/* ── Grid lines ── */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Copy ── */}
        <motion.div variants={stagger} initial="hidden" animate="show" style={{ y: textY }} className="space-y-7">
          <motion.div variants={item} className="space-y-1">
            <h1 className="text-[5.5rem] leading-[1.0] font-extrabold tracking-tight text-gray-950">สร้างเว็บไซต์</h1>
            <h1 className="text-[5.5rem] leading-[1.0] font-extrabold tracking-tight text-gradient-vivid">
              ด้วย AI
            </h1>
            <h1 className="text-[5.5rem] leading-[1.0] font-extrabold tracking-tight text-gray-950">ใน 5 นาที</h1>
          </motion.div>

          <motion.p variants={item} className="text-xl text-gray-600 max-w-[480px] leading-relaxed">
            สร้างเว็บสวยพร้อมออนไลน์ ใช้งานได้ทันที ไม่ต้องมีความรู้เรื่องโค้ด แค่เล่าให้น้องใบบัวฟัง
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <motion.a href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg shadow-lg shadow-brand-600/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Zap size={18} strokeWidth={2.5} /> เริ่มสร้างด้วย AI ฟรี
            </motion.a>
            <motion.a href="#demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-gray-200 text-gray-800 font-bold text-lg hover:border-brand-300 hover:text-brand-700 transition-all shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Play size={16} strokeWidth={2} fill="currentColor" /> ดูวิดีโอสาธิต
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-gray-500 pt-1">
            {['ไม่ต้องบัตรเครดิต','เครดิตฟรี 50 ครั้งแรก','เริ่มใช้งานได้ทันที','Support ภาษาไทย'].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <Check size={13} strokeWidth={2.5} className="text-brand-500 flex-shrink-0" /> {t}
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

          {/* Hero mockup image */}
          <div className="relative" style={{ overflow: 'visible' }}>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/hero-mockup.png"
                alt="BAIBUA AI Web Builder"
                width={900}
                height={600}
                className="w-full h-auto"
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* mascot-1 โบกมือ วางทับฝั่งซ้ายของรูป */}
            <motion.div
              className="absolute -bottom-8 -left-16 pointer-events-none select-none hidden md:block z-20"
              animate={{ y: [0,-10,0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}>
              <Image src="/mascot-1.png" alt="น้องใบบัว" width={200} height={200} style={{ objectFit: 'contain' }} />
            </motion.div>
          </div>

          {/* Floating card 1 — published */}
          <motion.div
            className="absolute -top-5 -right-10 glass rounded-2xl px-4 py-3 shadow-xl"
            animate={{ y: [0,-10,0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-brand-500 flex items-center justify-center text-white text-base animate-pulse-green">✓</div>
              <div>
                <div className="text-xs font-bold text-gray-800">Publish สำเร็จ!</div>
                <div className="text-xs text-gray-400">my-shop.hostinglotus.cloud</div>
              </div>
            </div>
          </motion.div>

          {/* Floating card 2 — tagline line 1 */}
          <motion.div
            className="absolute -bottom-5 -right-10 glass rounded-2xl px-4 py-3 shadow-xl"
            animate={{ y: [0,10,0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
            <div className="text-xs font-bold text-gray-800">สร้างเว็บไซต์ด้วย AI ใน 5 นาที</div>
          </motion.div>

          {/* Floating card 3 — tagline line 2 */}
          <motion.div
            className="absolute bottom-16 -right-10 glass rounded-2xl px-4 py-3 shadow-xl"
            animate={{ y: [0,-8,0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
            <div className="text-xs font-bold text-gray-800">สร้างเว็บสวยพร้อมออนไลน์ ใช้งานได้ทันที</div>
          </motion.div>

          {/* Badge — tagline line 3 (ย้ายไปบนซ้ายหนีใบบัว) */}
          <motion.div
            className="absolute -top-5 -left-10 glass rounded-2xl px-4 py-3 shadow-xl"
            animate={{ y: [0,-8,0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
            <div className="text-xs font-bold text-gray-800">ไม่ต้องมีความรู้เรื่องโค้ด</div>
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
