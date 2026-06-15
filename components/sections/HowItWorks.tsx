'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Bot, PenTool, Globe, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

/* ─── Preview components ─── */

function PreviewStep1() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 pt-6 pb-4 border-b border-gray-100">
        <div className="text-lg font-extrabold text-gray-900">เริ่มเว็บใหม่</div>
        <div className="text-sm text-gray-400 mt-1">บอกน้องใบบัวว่าต้องการเว็บแบบไหน</div>
      </div>
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-500 mb-1.5 font-medium">ชื่อเว็บ *</div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500">Vivid Creative Studio</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1.5 font-medium">ชื่อโดเมน *</div>
            <div className="rounded-xl border border-brand-400 bg-brand-50 px-4 py-2.5 text-sm text-brand-700">vivid-creative-studio</div>
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1.5 font-medium">ธุรกิจของคุณคืออะไร *</div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-600">สตูดิโอรับถ่ายภาพ วิดีโอ และงานโปรดักชั่นโฆษณาแบบครบวงจร</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-2 font-medium">เลือกสไตล์</div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'โมเดิร์น มินิมอล', colors: ['#1a1a2e','#6366f1'] },
              { label: 'สดใส น่ารัก',      colors: ['#f472b6','#a3e635','#60a5fa'] },
              { label: 'หรูหรา พรีเมียม',  colors: ['#1a1a1a','#c9a96e'] },
            ].map(s => (
              <div key={s.label} className="rounded-xl border border-gray-200 p-3 text-center">
                <div className="flex justify-center gap-1.5 mb-2">
                  {s.colors.map(c => <div key={c} className="w-4 h-4 rounded-full" style={{ background: c }} />)}
                </div>
                <div className="text-xs text-gray-600 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="w-full py-3 rounded-xl bg-brand-600 text-white text-sm font-bold text-center flex items-center justify-center gap-2">
          เริ่มให้น้องใบบัวสร้าง <ArrowRight size={14} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  )
}

const STEP2_STEPS = ['บรีฟ', 'วางแผน', 'เขียนเว็บ', 'เปิดเว็บ']
const STEP2_BADGES = ['กำลังอ่านบรีฟ...', 'วางแผนโครงสร้างเว็บ...', 'กำลังเขียนโค้ด', 'เว็บพร้อมใช้งานแล้ว! 🎉']
const STEP2_LOGS: Record<number, string> = {
  0: 'กำลังวางโครงสร้างเว็บ...', 20: 'สร้าง component และ layout...',
  45: 'เพิ่มเนื้อหาและรูปภาพ...', 70: 'ปรับ style และ typography...',
  90: 'ตรวจสอบ responsive design...', 99: 'เสร็จสมบูรณ์ ✓',
}

function PreviewStep2() {
  const [step, setStep]         = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    let intervalId: ReturnType<typeof setInterval>
    const DURATIONS = [1300, 1300, 3300, 2000]
    const goToStep = (s: number) => {
      clearInterval(intervalId)
      setStep(s); setProgress(0)
      if (s === 2) {
        let p = 0
        intervalId = setInterval(() => { p = Math.min(p + 1, 100); setProgress(p); if (p >= 100) clearInterval(intervalId) }, 33)
      }
      timeoutId = setTimeout(() => goToStep((s + 1) % 4), DURATIONS[s])
    }
    goToStep(0)
    return () => { clearTimeout(timeoutId); clearInterval(intervalId) }
  }, [])

  const logMsg = Object.entries(STEP2_LOGS).filter(([k]) => progress >= Number(k)).at(-1)?.[1] ?? STEP2_LOGS[0]
  const barWidth = step === 3 ? 100 : step === 2 ? progress : 0

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-7 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-semibold px-4 py-2 rounded-full mb-5">
          <span className={`w-2 h-2 rounded-full bg-brand-500 ${step < 3 ? 'animate-pulse' : ''}`} />
          {STEP2_BADGES[step]}{step === 2 ? ` ${progress}%` : ''}
        </div>
        <div className="text-xl font-extrabold text-gray-900 mb-1.5">น้องใบบัวกำลังสร้างเว็บให้คุณ</div>
        <div className="text-sm text-gray-400 mb-6">ใช้เวลาประมาณ 5–7 นาที</div>
        <div className="flex items-center justify-center gap-3 mb-6">
          {STEP2_STEPS.map((label, i, arr) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 ${
                  i < step ? 'bg-brand-600 border-brand-600 text-white' :
                  i === step ? 'bg-white border-brand-500 text-brand-600 shadow-md shadow-brand-100' :
                  'bg-gray-100 border-gray-200 text-gray-400'
                }`}>{i < step ? '✓' : i + 1}</div>
                <div className={`text-xs transition-colors duration-300 ${i <= step ? 'text-gray-700 font-semibold' : 'text-gray-400'}`}>{label}</div>
              </div>
              {i < arr.length - 1 && <div className={`w-8 h-px mb-5 transition-all duration-500 ${i < step ? 'bg-brand-500' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-xl p-4 text-left border border-gray-100">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>ความคืบหน้า</span>
            <span className="text-brand-600 font-bold tabular-nums">{barWidth}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full"
              style={{ width: `${barWidth}%`, transition: step === 2 ? 'width 33ms linear' : 'width 600ms ease' }} />
          </div>
          <div className="text-sm text-gray-400 mt-2.5 flex items-center gap-1.5">
            {step < 3 ? <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse flex-shrink-0" />
                      : <span className="text-brand-600 flex-shrink-0">✓</span>}
            {step === 2 ? logMsg : STEP2_BADGES[step]}
          </div>
        </div>
      </div>
    </div>
  )
}

function PreviewStep3() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden text-xs">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-800 text-sm">my-website</span>
          <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-700 font-semibold text-xs">draft</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-500">Basic</div>
          <div className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-500">IDE</div>
          <div className="px-3 py-1 rounded-lg bg-brand-600 text-white font-bold">Publish</div>
        </div>
      </div>
      <div className="flex" style={{ height: 280 }}>
        <div className="w-[58%] border-r border-gray-100 overflow-hidden">
          <img src="/examples/vivid-creative-studio.png" alt="website preview" className="w-full h-full object-cover object-top" />
        </div>
        <div className="flex-1 flex flex-col bg-white">
          <div className="px-3 py-2.5 border-b border-gray-100 font-bold text-gray-700 text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />คุยกับน้องใบบัว
          </div>
          <div className="flex-1 overflow-hidden px-3 py-3 space-y-2.5">
            <div className="bg-brand-50 rounded-xl p-2.5 text-xs text-gray-600 leading-snug">สวัสดี! บอกได้เลยอยากแก้อะไร</div>
            <div className="bg-gray-100 rounded-xl p-2.5 text-xs text-gray-700 leading-snug ml-2">เปลี่ยนสีหัวข้อเป็นสีเขียวค่ะ</div>
            <div className="bg-brand-50 rounded-xl p-2.5 text-xs text-gray-600 leading-snug">ได้เลย! กำลังปรับให้...</div>
          </div>
          <div className="px-3 pb-3">
            <div className="flex items-center gap-1.5 rounded-xl border border-gray-200 px-3 py-2 bg-gray-50">
              <span className="flex-1 text-xs text-gray-400">อยากแก้อะไร...</span>
              <div className="w-6 h-6 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PreviewStep4() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-100 border-b border-gray-200">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-lg px-3 py-1.5 text-xs text-gray-400 font-mono border border-gray-200 truncate">
          vivid-creative-studio.hostinglotus.cloud
        </div>
        <span className="flex items-center gap-1 text-[11px] text-green-600 font-bold flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />Live
        </span>
      </div>
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img src="/examples/vivid-creative-studio.png" alt="published website" className="w-full h-full object-cover object-top" />
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />Publish แล้ว!
        </div>
      </div>
    </div>
  )
}

/* ─── Step data ─── */

const STEPS = [
  { num: '01', color: '#43a047', Icon: FileText, title: 'กรอกบรีฟ', body: 'ใส่ชื่อเว็บ ธุรกิจ สินค้า/บริการ และเลือกสไตล์ที่ชอบ ไม่ต้องรู้โค้ด พิมพ์ภาษาไทยธรรมดา', Preview: PreviewStep1 },
  { num: '02', color: '#0891b2', Icon: Bot,      title: 'น้องใบบัวสร้างเว็บให้', body: 'รอประมาณ 5-7 นาที AI จะออกแบบและเขียนเว็บให้ครบ ปิดแท็บได้ ระบบสร้างต่อเนื่องในพื้นหลัง', Preview: PreviewStep2 },
  { num: '03', color: '#7c3aed', Icon: PenTool,  title: 'ปรับแก้ตามต้องการ', body: 'เว็บพร้อมแล้ว สั่ง AI แก้ข้อความ รูป สี หรือเพิ่มส่วนใหม่ได้เลย พิมพ์ภาษาไทยธรรมดา', Preview: PreviewStep3 },
  { num: '04', color: '#ea580c', Icon: Globe,    title: 'Publish เว็บจริง', body: 'กด Publish เว็บออนไลน์ทันที มี URL จริง SSL ฟรี แก้ไขต่อได้ตลอด ไม่ต้องรอ', Preview: PreviewStep4 },
]

/* ─── Component ─── */

export default function HowItWorks() {
  const [active, setActive] = useState(0)

  // IntersectionObserver — activate step when it scrolls into the center of viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    STEPS.forEach((_, i) => {
      const el = document.getElementById(`step-trigger-${i}`)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i) },
        { rootMargin: '-30% 0px -50% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const ActivePreview = STEPS[active].Preview

  return (
    <section id="how-it-works" className="py-24 px-6 relative" style={{ background: '#ffffff' }}>
      {/* blobs in a clipped wrapper so they don't overflow without breaking sticky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(255,172,190,0.8) 0%, transparent 65%)', transform: 'translate(25%,-25%)' }} />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full opacity-10 animate-blob delay-4000"
          style={{ background: 'radial-gradient(circle, rgba(187,247,208,0.9) 0%, transparent 65%)', transform: 'translate(-25%,25%)' }} />
      </div>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="วิธีใช้งาน"
          title="สร้างเว็บใน"
          titleGreen="4 ขั้นตอน"
          subtitle="เลื่อนลงเพื่อดูแต่ละขั้นตอน – ง่ายกว่าที่คิด เร็วกว่าที่คาด"
          variant="pink"
        />

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left: scrollable step cards */}
          <div>
            {STEPS.map((s, i) => {
              const isActive = active === i
              return (
                <div key={i} id={`step-trigger-${i}`} className="min-h-[48vh] flex items-center py-4">
                  <motion.div
                    className={`w-full rounded-2xl border-2 cursor-pointer overflow-hidden transition-all duration-400 ${
                      isActive
                        ? 'border-brand-300 bg-white shadow-xl shadow-brand-600/8'
                        : 'border-gray-100 bg-gray-50/60 hover:border-gray-200 hover:bg-white'
                    }`}
                    onClick={() => setActive(i)}
                    whileHover={{ x: isActive ? 0 : 3 }}
                    transition={{ duration: 0.2 }}>


                    <div className="px-6 py-5 flex items-start gap-4 relative">
                      {/* Step icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={isActive
                          ? { background: s.color, boxShadow: `0 4px 14px ${s.color}35` }
                          : { background: '#f3f4f6' }}>
                        <s.Icon size={20} strokeWidth={1.8} color={isActive ? '#fff' : '#9ca3af'} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-xs font-bold tracking-widest uppercase ${isActive ? 'text-gray-400' : 'text-gray-300'}`}>
                            {s.num}
                          </span>
                        </div>
                        <div className={`font-bold text-base transition-colors ${isActive ? 'text-gray-950' : 'text-gray-500'}`}>
                          {s.title}
                        </div>
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              className="text-sm text-gray-500 mt-1.5 leading-relaxed"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}>
                              {s.body}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* Right: sticky preview */}
          <div className="hidden lg:block">
            <div className="sticky" style={{ top: 'calc(50vh - 220px)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0,  scale: 1 }}
                  exit={{    opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                  <ActivePreview />
                </motion.div>
              </AnimatePresence>

              {/* Step indicator dots */}
              <div className="flex items-center gap-2 mt-5 justify-center">
                {STEPS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? 24 : 8,
                      background: active === i ? s.color : '#d1d5db',
                    }}
                  />
                ))}
                <span className="ml-2 text-xs text-gray-400">{active + 1} / {STEPS.length}</span>
              </div>
            </div>
          </div>

          {/* Mobile preview */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}>
                <ActivePreview />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* mascot-1: waving — bottom-left */}
      <motion.div className="absolute bottom-0 left-6 pointer-events-none select-none hidden md:block"
        animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}>
        <Image src="/mascot-1.png" alt="น้องใบบัว" width={150} height={150} style={{ objectFit: 'contain' }} />
      </motion.div>
    </section>
  )
}
