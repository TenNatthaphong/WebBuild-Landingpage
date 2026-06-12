'use client'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const MODES = [
  {
    num: '01',
    icon: '💬',
    label: 'เริ่มจากศูนย์',
    headerBg: 'linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)',
    headerBorder: '#bbf7d0',
    accentColor: '#16a34a',
    accentBg: '#dcfce7',
    title: 'เล่าให้น้องใบบัวฟัง แล้วได้เว็บใหม่',
    body: 'ไม่มีโค้ดอยู่เลย? เริ่มจาก 0 ได้เลย – แค่บอกว่าทำธุรกิจอะไร ขายอะไร น้องใบบัวจะปั้นเว็บให้คุณเห็นต่อหน้าภายในไม่กี่นาที',
    steps: [
      { icon: '💬', label: 'เล่าให้ฟัง' },
      { icon: '⚙️', label: 'AI สร้าง' },
      { icon: '🚀', label: 'Publish' },
    ],
  },
  {
    num: '02',
    icon: '⬆️',
    label: 'มีเว็บอยู่แล้ว',
    headerBg: 'linear-gradient(135deg,#fdf2f8 0%,#fce7f3 100%)',
    headerBorder: '#fbcfe8',
    accentColor: '#db2777',
    accentBg: '#fce7f3',
    title: 'มีเว็บอยู่แล้ว นำเข้ามา Deploy ได้เลย',
    body: 'มีโค้ดเว็บอยู่แล้วจากที่อื่น? อัปโหลดไฟล์ .zip / .tar หรือใส่ URL Git repo – เรา deploy ให้ทันที น้องใบบัวช่วยปรับเนื้อหาบนของเดิมได้ต่อ',
    steps: [
      { icon: '📁', label: 'Browse File' },
      { icon: '🔗', label: 'Clone Git' },
      { icon: '☁️', label: 'Deploy' },
    ],
  },
]

export default function UsageModes() {
  return (
    <section id="usage-modes" className="py-24 px-6 relative overflow-hidden" style={{ background: '#f8fafc' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(187,247,208,0.25) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="เริ่มยังไงก็ได้ตามถนัด"
          title="2 รูปแบบ"
          titleGreen="การใช้งาน"
          subtitle="เริ่มจากศูนย์ก็ได้ หรือนำเว็บที่มีอยู่แล้วเข้ามาก็ได้ – สุดท้ายได้เว็บออนไลน์เหมือนกัน"
        />

        <div className="relative grid md:grid-cols-2 gap-6">

          {/* หรือ divider — desktop only */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center gap-2 pointer-events-none">
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            <div className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-400 shadow-sm">หรือ</div>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          </div>

          {MODES.map((m, i) => (
            <motion.div key={i}
              className="rounded-3xl overflow-hidden bg-white"
              style={{ border: `1.5px solid ${m.headerBorder}`, boxShadow: '0 4px 32px rgba(0,0,0,0.06)' }}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -6 }}>

              {/* Colored header zone */}
              <div className="relative p-7 pb-6" style={{ background: m.headerBg }}>
                {/* Big num watermark */}
                <div className="absolute top-2 right-5 text-[110px] font-extrabold leading-none select-none pointer-events-none"
                  style={{ color: `${m.accentColor}12` }}>{m.num}</div>

                {/* Label chip */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-5"
                  style={{ background: m.accentBg, color: m.accentColor, border: `1px solid ${m.headerBorder}` }}>
                  <span>{m.icon}</span> {m.label}
                </div>

                {/* Step flow */}
                <div className="flex items-center gap-2">
                  {m.steps.map((s, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-sm"
                          style={{ background: '#ffffff', border: `1.5px solid ${m.headerBorder}` }}>
                          {s.icon}
                        </div>
                        <span className="text-[10px] font-semibold" style={{ color: m.accentColor }}>{s.label}</span>
                      </div>
                      {j < m.steps.length - 1 && (
                        <div className="flex flex-col items-center mb-4">
                          <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                            <path d="M1 6h16M13 1l5 5-5 5" stroke={m.accentColor} strokeWidth="1.8"
                              strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* White content zone */}
              <div className="p-7 pt-6">
                <h3 className="text-xl font-extrabold text-gray-950 mb-3 leading-snug">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.body}</p>

                <motion.a href="#"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                  style={{ background: m.accentBg, color: m.accentColor }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  เริ่มเลย →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
