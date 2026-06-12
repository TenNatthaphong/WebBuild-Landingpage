'use client'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const MODES = [
  {
    num: '1',
    icon: '💬',
    iconBg: '#dcfce7',
    numColor: '#f0fdf4',
    title: 'เล่าให้น้องใบบัวฟัง แล้วได้เว็บใหม่',
    body: 'ไม่มีโค้ดอยู่เลย? เริ่มจาก 0 ได้เลย – แค่บอกว่าทำธุรกิจอะไร ขายอะไร น้องใบบัวจะปั้นเว็บให้คุณเห็นต่อหน้าภายในไม่กี่นาที',
    steps: ['เล่าให้น้องใบบัวฟัง', 'น้องใบบัวสร้าง', 'Publish'],
    stepColor: '#16a34a',
    stepBg: '#dcfce7',
  },
  {
    num: '2',
    icon: '⬆️',
    iconBg: '#fce7f3',
    numColor: '#fdf2f8',
    title: 'มีเว็บอยู่แล้ว นำเข้ามา Deploy ได้เลย',
    body: 'มีโค้ดเว็บอยู่แล้วจากที่อื่น? อัปโหลดไฟล์ .zip / .tar หรือใส่ URL Git repo – เรา deploy ให้ทันที น้องใบบัวช่วยปรับเนื้อหาบนของเดิมได้ต่อ',
    steps: ['Browse File หรือ Clone Git', 'Deploy'],
    stepColor: '#db2777',
    stepBg: '#fce7f3',
  },
]

export default function UsageModes() {
  return (
    <section id="usage-modes" className="py-24 px-6 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="เริ่มยังไงก็ได้ตามถนัด"
          title="2 รูปแบบ"
          titleGreen="การใช้งาน"
          subtitle="เริ่มจากศูนย์ก็ได้ หรือนำเว็บที่มีอยู่แล้วเข้ามาก็ได้ – สุดท้ายได้เว็บออนไลน์เหมือนกัน"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {MODES.map((m, i) => (
            <motion.div key={i}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -6 }}>

              {/* Watermark number */}
              <div className="absolute top-2 right-5 text-[130px] font-extrabold leading-none select-none pointer-events-none"
                style={{ color: m.numColor }}>
                {m.num}
              </div>

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 relative z-10"
                style={{ background: m.iconBg }}>
                {m.icon}
              </div>

              <h3 className="text-xl font-extrabold text-gray-950 mb-3 relative z-10">{m.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">{m.body}</p>

              <div className="flex items-center gap-2 flex-wrap relative z-10">
                {m.steps.map((s, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-transparent"
                      style={{ background: m.stepBg, color: m.stepColor }}>
                      {s}
                    </span>
                    {j < m.steps.length - 1 && (
                      <span className="text-gray-300 text-sm font-bold">→</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
