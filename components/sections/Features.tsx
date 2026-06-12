'use client'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const FEATS = [
  {
    icon: '🛡️', iconBg: '#dcfce7', iconBorder: '#bbf7d0',
    title: 'ไม่ต้องรอ ไม่ต้องจ้างทีมเว็บ',
    body: 'แก้คำผิด เปลี่ยนภาพ อัพเดทราคา – ทำเองได้ทันที ตลอด 24 ชั่วโมง ไม่ต้องส่งอีเมลรอวันหรืออาทิตย์',
    tags: ['อิสระ 100%', 'แก้เองได้ทันที', 'ไม่รอใคร'],
  },
  {
    icon: '⚡', iconBg: '#fce7f3', iconBorder: '#fbcfe8',
    title: 'เปิดเว็บจริงได้ภายใน 1 วัน',
    body: 'จากไม่มีเว็บเลย ถึงเว็บใช้จริงบนอินเทอร์เน็ต ใช้เวลาไม่เกินวันเดียว เร็วกว่าจ้างเอเจนซีหลายสัปดาห์',
    tags: ['รวดเร็ว', 'วันเดียวได้เว็บ', 'ไม่รอนาน'],
  },
  {
    icon: '💰', iconBg: '#f3e8ff', iconBorder: '#e9d5ff',
    title: 'ประหยัดกว่าจ้างเอเจนซีมาก',
    body: 'เว็บจากเอเจนซีราคาหลายหมื่น BAIBUA ราคาหลักร้อยต่อเว็บ ได้คุณภาพ Professional เหมือนกัน',
    tags: ['ประหยัด', 'คุ้มกว่า 10×', 'ไม่ต้องจ้างเอเจนซี'],
  },
  {
    icon: '✨', iconBg: '#dbeafe', iconBorder: '#bfdbfe',
    title: 'AI จำสไตล์แบรนด์คุณได้',
    body: 'บอกครั้งเดียว – สีแบรนด์ โทนภาพ สไตล์การเขียน น้องใบบัวจำแล้วนำไปใช้ทุกครั้งโดยอัตโนมัติ',
    tags: ['จำสไตล์แบรนด์', 'ไม่ต้องบอกซ้ำ', 'เรียนรู้จากคุณ'],
  },
  {
    icon: '📞', iconBg: '#ffedd5', iconBorder: '#fed7aa',
    title: 'Support ทีมไทย ตอบเร็ว',
    body: 'ไม่ใช่ Bot ไม่ใช่ FAQ ทีมคนจริงตอบผ่าน LINE ภาษาไทย เข้าใจปัญหาธุรกิจไทย ไม่ปล่อยให้สับสนคนเดียว',
    tags: ['LINE Support', 'ทีมไทย', 'ตอบเร็ว'],
  },
  {
    icon: '💻', iconBg: '#ccfbf1', iconBorder: '#99f6e4',
    title: 'ไม่ต้องรู้โค้ดเลยสักบรรทัด',
    body: 'แค่บอกว่าอยากได้อะไร – น้องใบบัวจัดการโค้ดทั้งหมดให้เอง คุณแค่บอกไอเดีย เดียวได้เว็บเลยค่ะ',
    tags: ['ไม่ต้องเขียนโค้ด', 'บอกแล้วได้เลย', 'ใครก็ทำได้'],
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20 animate-blob-slow"
        style={{ background: 'radial-gradient(circle, rgba(187,247,208,0.8) 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="ทำไมต้อง BAIBUA"
          title="ทำไมต้องเลือกทำเว็บกับ"
          titleGreen="น้องใบบัว?"
          subtitle="ไม่ใช่แค่สร้างเว็บได้ – แต่ตอบโจทย์ธุรกิจจริงๆ ด้วยเหตุผลเหล่านี้"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATS.map((f, i) => (
            <motion.div key={i}
              className="tilt-card bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:border-brand-200 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -6, scale: 1.01 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <motion.div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: f.iconBg, border: `1px solid ${f.iconBorder}` }}
                whileHover={{ rotate: [0,-8,8,0], scale: 1.1 }}
                transition={{ duration: 0.5 }}>
                {f.icon}
              </motion.div>
              <h3 className="text-lg font-extrabold text-gray-950 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{f.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {f.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
