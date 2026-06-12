'use client'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const ITEMS = [
  {
    icon: '🇹🇭',
    title: 'คุยภาษาไทยได้เลย 100%',
    body: 'สื่อสารกับน้องใบบัวเป็นภาษาพูดปกติ ไม่ต้องรู้ศัพท์เทคนิคใดๆ AI เข้าใจและสร้างเว็บให้ทันที',
  },
  {
    icon: '💳',
    title: 'จ่ายเมื่อ Publish จริง',
    body: 'ทดลองสร้างและแก้ไขได้โดยไม่เสียค่าใช้จ่าย ไม่มี Subscription รายเดือน จ่ายเฉพาะเมื่อพร้อมเปิดเว็บจริง',
  },
  {
    icon: '🌐',
    title: 'Domain + SSL + Hosting ครบ',
    body: 'เชื่อมโดเมนได้เอง รับ SSL ฟรีอัตโนมัติ ชั้น Hosting ด้วยคลิกเดียว ทุกอย่างในที่เดียว',
  },
]

export default function Highlights() {
  return (
    <section className="py-24 px-6 bg-brand-50/40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(187,247,208,0.35) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="ครบในที่เดียว"
          title="ครบทุกอย่างที่เว็บต้องการ"
          titleGreen="ในที่เดียว"
          subtitle="ตั้งแต่สร้าง แก้ไข จน Publish – BAIBUA จัดการให้ครบ ไม่ต้องใช้เครื่องมืออื่นเพิ่ม"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div key={i}
              className="bg-white rounded-3xl p-8 border border-brand-100 shadow-sm group relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -5 }}>
              <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <div className="w-14 h-14 rounded-2xl bg-brand-100 border border-brand-200 flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-extrabold text-gray-950 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
