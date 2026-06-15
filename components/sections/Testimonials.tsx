'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const REVIEWS = [
  { name: 'คุณสมศรี อ. ', role: 'เจ้าของร้านกาแฟ',   stars: 5, text: 'ไม่น่าเชื่อว่าจะทำเว็บได้เองด้วยการพิมพ์คำสั่ง ลูกค้ามาจากออนไลน์เพิ่มขึ้น 3 เท่าหลังมีเว็บ!', city: 'เชียงใหม่',  avatar: 'green' },
  { name: 'คุณวีรชัย พ.',  role: 'ฟรีแลนซ์กราฟิก',   stars: 5, text: 'พอร์ตโฟลิโอสวยมาก สร้างเสร็จภายใน 10 นาที ลูกค้าชื่นชมมาก ราคาถูกกว่าจ้างทำมาก', city: 'กรุงเทพฯ',  avatar: 'pink' },
  { name: 'คุณปิยะ ส.',    role: 'เจ้าของร้านอาหาร', stars: 5, text: 'ใช้งานง่ายมากสำหรับคนไม่มีความรู้ IT ทีม Support ตอบเร็ว พูดภาษาไทย เข้าใจกัน', city: 'ขอนแก่น',  avatar: 'vivid' },
  { name: 'คุณนภาพร ร.',   role: 'นักศึกษาปริญญาโท', stars: 5, text: 'ทำเว็บรับสมัครงานสำหรับ startup ที่เรียน ได้ผลเกินคาด น้อง AI เก่งมากตอบทุกอย่างได้', city: 'กรุงเทพฯ', avatar: 'green' },
  { name: 'คุณธนกร ม.',    role: 'เจ้าของ SME',       stars: 5, text: 'จากไม่มีเว็บเลย มาเป็นมีเว็บขาย B2B ที่ดูน่าเชื่อถือ ลูกค้าต่างชาติติดต่อมาผ่านเว็บเพิ่มขึ้น', city: 'ระยอง',   avatar: 'pink' },
  { name: 'คุณมาลี ก.',    role: 'เจ้าของสปา',        stars: 5, text: 'ทำระบบจองออนไลน์ได้ด้วย ลูกค้าไม่ต้องโทรมาจอง ประหยัดเวลาไปได้มากเลย', city: 'ภูเก็ต',   avatar: 'vivid' },
]

const AVATAR_GRAD: Record<string, string> = {
  green: 'linear-gradient(135deg, #43a047, #2e7d32)',
  pink:  'linear-gradient(135deg, #e91e63, #c2185b)',
  vivid: 'linear-gradient(135deg, #43a047, #e91e63)',
}

export default function Testimonials() {
  const dragRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 px-6 overflow-hidden relative" style={{ background: 'linear-gradient(180deg, #fff0f6 0%, #f8fafc 40%, #f0fdf4 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(233,30,99,0.07) 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="รีวิวจากลูกค้า"
          title="4.9★ จาก"
          titleGreen="10,000+ ผู้ใช้"
          subtitle="เสียงจริงจากผู้ใช้จริงทั่วประเทศไทย"
          variant="pink"
        />
      </div>

      <motion.div ref={dragRef} className="flex gap-5 px-6 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -(REVIEWS.length * 340 - (typeof window !== 'undefined' ? window.innerWidth : 1200)) }}
        dragElastic={0.1}>
        {REVIEWS.map((r, i) => (
          <motion.div key={i}
            className="flex-shrink-0 w-80 bg-white rounded-3xl p-7 border border-gray-100 shadow-sm select-none"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22,1,0.36,1] }}
            whileHover={{ y: -4 }}>
            <div className="flex gap-1 mb-4">
              {[...Array(r.stars)].map((_, j) => <span key={j} className="text-amber-400 text-lg">★</span>)}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: AVATAR_GRAD[r.avatar] }}>
                {r.name.charAt(3)}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">{r.name}</div>
                <div className="text-xs text-gray-400">{r.role} · {r.city}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <p className="text-center text-xs text-gray-400 mt-6">← ลากซ้าย-ขวาเพื่อดูรีวิวเพิ่มเติม →</p>
    </section>
  )
}
