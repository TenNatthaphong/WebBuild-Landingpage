'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '@/components/ui/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

/* ─── named preview components (avoids stale JSX in array) ─── */

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
        <div className="w-full py-3 rounded-xl bg-brand-600 text-white text-sm font-bold text-center">
          เริ่มให้น้องใบบัวสร้าง →
        </div>
      </div>
    </div>
  )
}

function PreviewStep2() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-7 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-semibold px-4 py-2 rounded-full mb-5">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          น้องใบบัวกำลังอ่านบรีฟ...
        </div>
        <div className="text-xl font-extrabold text-gray-900 mb-1.5">น้องใบบัวกำลังสร้างเว็บให้คุณ</div>
        <div className="text-sm text-gray-400 mb-6">ใช้เวลาประมาณ 3–5 นาที</div>
        <div className="flex items-center justify-center gap-3 mb-6">
          {[
            { label: 'บรีฟ', done: true },
            { label: 'วางแผน', done: true },
            { label: 'เขียนเว็บ', active: true, num: '3' },
            { label: 'เปิดเว็บ', num: '4' },
          ].map((s, i, arr) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                  s.done   ? 'bg-brand-600 border-brand-600 text-white' :
                  s.active ? 'bg-white border-brand-500 text-brand-600' :
                             'bg-gray-100 border-gray-200 text-gray-400'
                }`}>
                  {s.done ? '✓' : s.num}
                </div>
                <div className={`text-xs ${s.done || s.active ? 'text-gray-700 font-semibold' : 'text-gray-400'}`}>{s.label}</div>
              </div>
              {i < arr.length - 1 && <div className={`w-8 h-px mb-5 ${s.done ? 'bg-brand-500' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-xl p-4 text-left border border-gray-100">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>ความคืบหน้า</span><span className="text-brand-600 font-bold">2% · รอบที่ 1/60</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full w-[2%]" />
          </div>
          <div className="text-sm text-gray-400 mt-2.5">● น้องใบบัวกำลังอ่านบรีฟ...</div>
        </div>
      </div>
    </div>
  )
}

function PreviewStep3() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden text-xs">
      {/* Top bar */}
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
      {/* Split: preview left + chat right */}
      <div className="flex" style={{ height: 280 }}>
        {/* Left: website thumbnail */}
        <div className="w-[58%] border-r border-gray-100 overflow-hidden relative">
          <img
            src="/examples/vivid-creative-studio.png"
            alt="website preview"
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Right: AI chat */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="px-3 py-2.5 border-b border-gray-100 font-bold text-gray-700 text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            คุยกับน้องใบบัว
          </div>
          <div className="flex-1 overflow-hidden px-3 py-3 space-y-2.5">
            <div className="bg-brand-50 rounded-xl p-2.5 text-xs text-gray-600 leading-snug">
              สวัสดี! บอกได้เลยอยากแก้อะไร
            </div>
            <div className="bg-gray-100 rounded-xl p-2.5 text-xs text-gray-700 leading-snug ml-2">
              เปลี่ยนสีหัวข้อเป็นสีเขียวค่ะ
            </div>
            <div className="bg-brand-50 rounded-xl p-2.5 text-xs text-gray-600 leading-snug">
              ได้เลย! กำลังปรับให้...
            </div>
          </div>
          <div className="px-3 pb-3">
            <div className="flex items-center gap-1.5 rounded-xl border border-gray-200 px-3 py-2 bg-gray-50">
              <span className="flex-1 text-xs text-gray-400">อยากแก้อะไร...</span>
              <div className="w-6 h-6 rounded-lg bg-brand-600 flex items-center justify-center text-white text-xs font-bold">→</div>
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
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-100 border-b border-gray-200">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-lg px-3 py-1.5 text-xs text-gray-400 font-mono border border-gray-200 truncate">
          your-website.hostinglotus.cloud
        </div>
        <span className="flex items-center gap-1 text-[11px] text-green-600 font-bold flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />Live
        </span>
      </div>
      {/* Website screenshot */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src="/examples/vivid-creative-studio.png"
          alt="published website"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  )
}

/* ─── step data ─── */

const STEPS = [
  {
    num: '01', color: '#43a047',
    title: 'กรอกบรีฟ',
    body: 'ใส่ชื่อเว็บ ธุรกิจ สินค้า/บริการ และเลือกสไตล์ที่ชอบ ไม่ต้องรู้โค้ด พิมพ์ภาษาไทยธรรมดา',
    Preview: PreviewStep1,
  },
  {
    num: '02', color: '#0891b2',
    title: 'น้องใบบัวสร้างเว็บให้',
    body: 'รอประมาณ 3–5 นาที AI จะออกแบบและเขียนเว็บให้ครบ ปิดแท็บได้ ระบบสร้างต่อเนื่องในพื้นหลัง',
    Preview: PreviewStep2,
  },
  {
    num: '03', color: '#7c3aed',
    title: 'ปรับแก้ตามต้องการ',
    body: 'เว็บพร้อมแล้ว สั่ง AI แก้ข้อความ รูป สี หรือเพิ่มส่วนใหม่ได้เลย พิมพ์ภาษาไทยธรรมดา',
    Preview: PreviewStep3,
  },
  {
    num: '04', color: '#ea580c',
    title: 'Publish เว็บจริง',
    body: 'กด Publish เว็บออนไลน์ทันที มี URL จริง SSL ฟรี แก้ไขต่อได้ตลอด ไม่ต้องรอ',
    Preview: PreviewStep4,
  },
]

/* ─── component ─── */

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      STEPS.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `#step-trigger-${i}`,
          start: 'top center',
          end: 'bottom center',
          onEnter:      () => setActive(i),
          onEnterBack:  () => setActive(i),
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const ActivePreview = STEPS[active].Preview

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 px-6 bg-gray-50/60">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="วิธีใช้งาน" title="สร้างเว็บใน" titleGreen="4 ขั้นตอน" subtitle="ง่ายกว่าที่คิด เร็วกว่าที่คาด" />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: steps */}
          <div className="py-8">
            {STEPS.map((s, i) => (
              <div id={`step-trigger-${i}`} key={i} className="min-h-[50vh] flex items-center">
                <motion.button
                  className={`w-full text-left rounded-2xl px-6 py-5 border-2 transition-all duration-300 relative overflow-hidden ${
                    active === i
                      ? 'border-brand-400 bg-white shadow-md shadow-brand-600/10'
                      : 'border-transparent bg-white/60 hover:bg-white hover:border-gray-200'
                  }`}
                  onClick={() => setActive(i)}
                  whileHover={{ x: active === i ? 0 : 4 }}>
                  {active === i && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-400"
                      initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.5 }} />
                  )}
                  <div className="flex items-center gap-4">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-base font-extrabold flex-shrink-0 transition-all duration-300 ${
                      active === i ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30' : 'bg-gray-100 text-gray-400'
                    }`}>{s.num}</span>
                    <div>
                      <div className={`font-bold transition-colors ${active === i ? 'text-gray-950' : 'text-gray-600'}`}>{s.title}</div>
                      {active === i && (
                        <motion.p className="text-sm text-gray-500 mt-1 leading-relaxed"
                          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}>
                          {s.body}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.button>
              </div>
            ))}
          </div>

          {/* Right: sticky preview (desktop) */}
          <div className="hidden lg:block">
            <div ref={pinRef} className="sticky" style={{ top: 'calc(50vh - 160px)' }}>
              <AnimatePresence mode="wait">
                <motion.div key={active}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0,  scale: 1 }}
                  exit={{ opacity: 0,  y: -12, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                  <ActivePreview />
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-center gap-2 mt-6">
                {STEPS.map((_, i) => (
                  <motion.button key={i}
                    className={`h-2 rounded-full transition-all ${active === i ? 'bg-brand-600 w-6' : 'bg-gray-300 w-2'}`}
                    onClick={() => setActive(i)} />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden mt-6">
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
    </section>
  )
}
