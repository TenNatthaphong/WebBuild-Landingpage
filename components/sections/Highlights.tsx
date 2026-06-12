'use client'
import { motion } from 'framer-motion'
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
        />

        <div className="grid md:grid-cols-3 gap-5">

          {/* Card 1 — คุยภาษาไทย (2 cols, green) */}
          <motion.div {...fadeUp(0)}
            className="md:col-span-2 relative rounded-3xl overflow-hidden p-9 flex flex-col justify-between min-h-[300px] group"
            style={{ background: 'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)', border: '1.5px solid #bbf7d0' }}
            whileHover={{ y: -4 }}>

            {/* Big stat watermark */}
            <div className="absolute -bottom-4 right-6 text-[130px] font-extrabold leading-none select-none pointer-events-none text-brand-100">100%</div>

            {/* Mini chat bubbles */}
            <div className="absolute bottom-8 right-8 space-y-2 pointer-events-none">
              <div className="flex justify-end">
                <div className="bg-brand-500 text-white text-[11px] leading-snug px-3 py-2 rounded-2xl rounded-br-none max-w-[180px] shadow-sm">
                  อยากได้เว็บร้านกาแฟ สไตล์มินิมอล สีน้ำตาล
                </div>
              </div>
              <div className="flex justify-start ml-2">
                <div className="bg-white border border-gray-200 text-gray-500 text-[11px] leading-snug px-3 py-2 rounded-2xl rounded-bl-none max-w-[150px] shadow-sm">
                  กำลังสร้างให้เลยค่ะ รอสักครู่... ☕
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-brand-500/20">🇹🇭</div>
              <h3 className="text-2xl font-extrabold text-gray-950 mb-3">คุยภาษาไทยได้เลย 100%</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                สื่อสารกับน้องใบบัวเป็นภาษาพูดปกติ ไม่ต้องรู้ศัพท์เทคนิคใดๆ AI เข้าใจและสร้างเว็บให้ทันที
              </p>
            </div>
          </motion.div>

          {/* Card 2 — จ่ายเมื่อ Publish (1 col, white) */}
          <motion.div {...fadeUp(0.1)}
            className="relative rounded-3xl overflow-hidden p-8 flex flex-col justify-between min-h-[300px] bg-white group"
            style={{ border: '1.5px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
            whileHover={{ y: -4 }}>

            {/* Payment steps visual */}
            <div className="absolute bottom-7 left-8 right-8 space-y-2 pointer-events-none">
              {[
                { label: 'สร้างเว็บ', done: true, free: true },
                { label: 'แก้ไขได้เสมอ', done: true, free: true },
                { label: 'Publish จริง', done: false, credit: '1 Credit' },
              ].map((r, i) => (
                <div key={i} className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs ${
                  r.credit ? 'bg-brand-600 text-white' : 'bg-gray-50 border border-gray-100 text-gray-500'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                      r.credit ? 'bg-white/20 text-white' : 'bg-brand-100 text-brand-600'
                    }`}>{r.done || r.credit ? '✓' : '○'}</div>
                    {r.label}
                  </div>
                  {r.free && <span className="text-[10px] text-brand-600 font-bold">ฟรี</span>}
                  {r.credit && <span className="text-[10px] text-white/80 font-semibold">{r.credit}</span>}
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-2xl mb-6">💳</div>
              <h3 className="text-xl font-extrabold text-gray-950 mb-2">จ่ายเมื่อ<br />Publish จริง</h3>
              <p className="text-gray-500 text-xs leading-relaxed">ทดลองสร้างและแก้ไขได้ฟรีไม่จำกัด</p>
            </div>
          </motion.div>

          {/* Card 3 — Domain + SSL + Hosting (full width, dark) */}
          <motion.div {...fadeUp(0.2)}
            className="md:col-span-3 relative rounded-3xl overflow-hidden p-9 bg-gray-950"
            whileHover={{ y: -4 }}>

            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 50% 100% at 90% 50%, rgba(74,222,128,0.09) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ opacity: 0.04, backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-6">🌐</div>
                <h3 className="text-2xl font-extrabold text-white mb-3">Domain + SSL + Hosting ครบ</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  เชื่อมโดเมนได้เอง รับ SSL ฟรีอัตโนมัติ Hosting พร้อมใช้ด้วยคลิกเดียว ทุกอย่างในที่เดียว ไม่ต้องใช้เครื่องมืออื่นเพิ่ม
                </p>
              </div>

              <div className="flex-shrink-0 w-full md:w-64 space-y-3">
                {[
                  { label: 'yoursite.com', badge: 'เชื่อมแล้ว', dot: '#4ade80', badgeBg: 'rgba(74,222,128,0.15)', badgeColor: '#4ade80' },
                  { label: 'SSL Certificate', badge: 'ฟรี', dot: '#60a5fa', badgeBg: 'rgba(96,165,250,0.15)', badgeColor: '#60a5fa' },
                  { label: 'Hosting', badge: '● Live', dot: '#a3e635', badgeBg: 'rgba(163,230,53,0.15)', badgeColor: '#a3e635' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl px-4 py-3"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: r.dot }} />
                      <span className="text-sm text-gray-300">{r.label}</span>
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
