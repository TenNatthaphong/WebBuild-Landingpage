'use client'
import { motion } from 'framer-motion'
import { Languages, CreditCard, Globe } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Highlights() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(187,247,208,0.45) 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="ครบในที่เดียว"
          title="ครบทุกอย่างที่เว็บต้องการ"
          titleGreen="ในที่เดียว"
          subtitle="ตั้งแต่สร้าง แก้ไข จน Publish – BAIBUA จัดการให้ครบ ไม่ต้องใช้เครื่องมืออื่นเพิ่ม"
          variant="vivid"
        />

        <div className="grid md:grid-cols-3 gap-5">

          {/* Card 1 — คุยภาษาไทย (2 cols, green) — left: text, right: bubbles */}
          <motion.div {...fadeUp(0)}
            className="md:col-span-2 rounded-3xl overflow-hidden p-9 flex flex-col sm:flex-row gap-8 min-h-[300px]"
            style={{ background: 'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)', border: '1.5px solid #bbf7d0' }}
            whileHover={{ y: -4 }}>

            {/* Left: icon + text */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20">
                <Languages size={26} strokeWidth={1.8} color="white" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-950 mb-3">คุยภาษาไทยได้เลย 100%</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                สื่อสารกับน้องใบบัวเป็นภาษาพูดปกติ ไม่ต้องรู้ศัพท์เทคนิคใดๆ AI เข้าใจและสร้างเว็บให้ทันที
              </p>
            </div>

            {/* Right: chat bubbles */}
            <div className="flex-shrink-0 w-full sm:w-52 flex flex-col justify-center gap-2.5">
              <div className="flex justify-end">
                <div className="bg-brand-500 text-white text-[11px] leading-snug px-3 py-2.5 rounded-2xl rounded-br-none shadow-sm">
                  อยากได้เว็บร้านกาแฟ<br />สไตล์มินิมอล สีน้ำตาล
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-gray-500 text-[11px] leading-snug px-3 py-2.5 rounded-2xl rounded-bl-none shadow-sm">
                  กำลังสร้างให้เลยค่ะ<br />รอสักครู่... ☕
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-brand-50 border border-brand-100 text-brand-700 text-[11px] leading-snug px-3 py-2.5 rounded-2xl rounded-br-none shadow-sm">
                  เว็บพร้อมแล้วค่ะ! ดูได้เลย ✨
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — จ่ายเมื่อ Publish (1 col, white) — icon+text horizontal */}
          <motion.div {...fadeUp(0.1)}
            className="rounded-3xl overflow-hidden p-8 flex flex-col gap-5 bg-white"
            style={{ border: '1.5px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
            whileHover={{ y: -4 }}>

            {/* Top: icon + text side by side */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                <CreditCard size={22} strokeWidth={1.8} color="#2563eb" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-950 mb-1 leading-snug">จ่ายเมื่อ Publish จริง</h3>
                <p className="text-gray-500 text-xs leading-relaxed">ทดลองสร้างและแก้ไขได้ฟรีไม่จำกัด</p>
              </div>
            </div>

            {/* Step rows */}
            <div className="space-y-2 mt-auto">
              {[
                { label: 'สร้างเว็บ',    free: true },
                { label: 'แก้ไขได้เสมอ', free: true },
                { label: 'Publish จริง', credit: '1 Credit' },
              ].map((r, i) => (
                <div key={i} className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-xs ${
                  r.credit ? 'bg-brand-600 text-white' : 'bg-gray-50 border border-gray-100 text-gray-500'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                      r.credit ? 'bg-white/20 text-white' : 'bg-brand-100 text-brand-600'
                    }`}>✓</div>
                    {r.label}
                  </div>
                  {r.free   && <span className="text-[10px] text-brand-600 font-bold">ฟรี</span>}
                  {r.credit && <span className="text-[10px] text-white/80 font-semibold">{r.credit}</span>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3 — Domain + SSL + Hosting (full width, light) */}
          <motion.div {...fadeUp(0.2)}
            className="md:col-span-3 relative rounded-3xl overflow-hidden p-9"
            style={{ background: 'linear-gradient(135deg,#f0fdf4 0%,#dbeafe 100%)', border: '1.5px solid #bbf7d0' }}
            whileHover={{ y: -4 }}>

            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 50% 100% at 90% 50%, rgba(255,255,255,0.6) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ opacity: 0.06, backgroundImage: 'radial-gradient(circle, #16a34a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 border border-brand-200 flex items-center justify-center mb-6">
                  <Globe size={24} strokeWidth={1.8} color="#16a34a" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-950 mb-3">Domain + SSL + Hosting ครบ</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                  เชื่อมโดเมนได้เอง รับ SSL ฟรีอัตโนมัติ Hosting พร้อมใช้ด้วยคลิกเดียว ทุกอย่างในที่เดียว ไม่ต้องใช้เครื่องมืออื่นเพิ่ม
                </p>
              </div>

              <div className="flex-shrink-0 w-full md:w-64 space-y-3">
                {[
                  { label: 'yoursite.com', badge: 'เชื่อมแล้ว', dot: '#16a34a', badgeBg: 'rgba(22,163,74,0.1)', badgeColor: '#16a34a' },
                  { label: 'SSL Certificate', badge: 'ฟรี', dot: '#2563eb', badgeBg: 'rgba(37,99,235,0.1)', badgeColor: '#2563eb' },
                  { label: 'Hosting', badge: '● Live', dot: '#16a34a', badgeBg: 'rgba(22,163,74,0.1)', badgeColor: '#16a34a' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/70 backdrop-blur-sm"
                    style={{ border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: r.dot }} />
                      <span className="text-sm text-gray-700 font-medium">{r.label}</span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ background: r.badgeBg, color: r.badgeColor }}>
                      {r.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
