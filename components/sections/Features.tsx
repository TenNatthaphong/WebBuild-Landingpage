'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Shield, Zap, BadgeDollarSign, Wand2, Headphones, Code2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const FEATS = [
  {
    num: '01', Icon: Shield, iconBg: '#dcfce7', iconBorder: '#bbf7d0', accent: '#16a34a',
    title: 'ไม่ต้องรอ ไม่ต้องจ้างทีมเว็บ',
    body: 'แก้คำผิด เปลี่ยนภาพ อัพเดทราคา – ทำเองได้ทันที ตลอด 24 ชั่วโมง ไม่ต้องส่งอีเมลรอวันหรืออาทิตย์',
    tags: ['อิสระ 100%', 'แก้เองได้ทันที', 'ไม่รอใคร'],
  },
  {
    num: '02', Icon: Zap, iconBg: '#fce7f3', iconBorder: '#fbcfe8', accent: '#db2777',
    title: 'เปิดเว็บจริงได้ภายใน 1 วัน',
    body: 'จากไม่มีเว็บเลย ถึงเว็บใช้จริงบนอินเทอร์เน็ต ใช้เวลาไม่เกินวันเดียว เร็วกว่าจ้างเอเจนซีหลายสัปดาห์',
    tags: ['รวดเร็ว', 'วันเดียวได้เว็บ', 'ไม่รอนาน'],
  },
  {
    num: '03', Icon: BadgeDollarSign, iconBg: '#f3e8ff', iconBorder: '#e9d5ff', accent: '#7c3aed',
    title: 'ประหยัดกว่าจ้างเอเจนซีมาก',
    body: 'เว็บจากเอเจนซีราคาหลายหมื่น BAIBUA ราคาหลักร้อยต่อเว็บ ได้คุณภาพ Professional เหมือนกัน',
    tags: ['ประหยัด', 'คุ้มกว่า 10×', 'ไม่ต้องจ้างเอเจนซี'],
  },
  {
    num: '04', Icon: Wand2, iconBg: '#dbeafe', iconBorder: '#bfdbfe', accent: '#2563eb',
    title: 'AI จำสไตล์แบรนด์คุณได้',
    body: 'บอกครั้งเดียว – สีแบรนด์ โทนภาพ สไตล์การเขียน น้องใบบัวจำแล้วนำไปใช้ทุกครั้งโดยอัตโนมัติ',
    tags: ['จำสไตล์แบรนด์', 'ไม่ต้องบอกซ้ำ', 'เรียนรู้จากคุณ'],
  },
  {
    num: '05', Icon: Headphones, iconBg: '#ffedd5', iconBorder: '#fed7aa', accent: '#c2410c',
    title: 'Support ทีมไทย ตอบเร็ว',
    body: 'ไม่ใช่ Bot ไม่ใช่ FAQ ทีมคนจริงตอบผ่าน LINE ภาษาไทย เข้าใจปัญหาธุรกิจไทย ไม่ปล่อยให้สับสนคนเดียว',
    tags: ['LINE Support', 'ทีมไทย', 'ตอบเร็ว'],
  },
  {
    num: '06', Icon: Code2, iconBg: '#ccfbf1', iconBorder: '#99f6e4', accent: '#0f766e',
    title: 'ไม่ต้องรู้โค้ดเลยสักบรรทัด',
    body: 'แค่บอกว่าอยากได้อะไร – น้องใบบัวจัดการโค้ดทั้งหมดให้เอง คุณแค่บอกไอเดีย เดียวได้เว็บเลยค่ะ',
    tags: ['ไม่ต้องเขียนโค้ด', 'บอกแล้วได้เลย', 'ใครก็ทำได้'],
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden" style={{ background: '#fafafa' }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-25 pointer-events-none animate-blob-slow"
        style={{ background: 'radial-gradient(circle, rgba(187,247,208,0.9) 0%, transparent 65%)', transform: 'translate(20%,-30%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none animate-blob delay-4000"
        style={{ background: 'radial-gradient(circle, rgba(255,172,190,0.8) 0%, transparent 65%)', transform: 'translate(-25%,30%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="ทำไมต้อง BAIBUA"
          title="ทำไมต้องเลือกทำเว็บกับ"
          titleGreen="น้องใบบัว?"
          subtitle="ไม่ใช่แค่สร้างเว็บได้ – แต่ตอบโจทย์ธุรกิจจริงๆ ด้วยเหตุผลเหล่านี้"
          variant="pink"
        />

        <div className="grid md:grid-cols-3 gap-5">

          {/* 01 — hero card, 2-col */}
          {(() => {
            const f = FEATS[0]
            return (
              <motion.div
                className="md:col-span-2 relative rounded-3xl p-8 flex flex-col justify-between min-h-[260px] group"
                style={{ background: `linear-gradient(135deg,${f.iconBg} 0%,#ffffff 60%)`, border: `1.5px solid ${f.iconBorder}` }}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
                whileHover={{ y: -5 }}>
                <div className="absolute top-5 right-7 text-[90px] font-extrabold leading-none select-none pointer-events-none opacity-[0.07] text-gray-900">{f.num}</div>
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                    style={{ background: f.iconBg, border: `1.5px solid ${f.iconBorder}` }}>
                    <f.Icon size={24} strokeWidth={1.8} color={f.accent} />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-950 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-sm">{f.body}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-xl text-xs font-semibold"
                      style={{ background: f.iconBg, color: f.accent }}>{t}</span>
                  ))}
                </div>

                {/* mascot-2: laptop — top-right corner of this card */}
                <motion.div className="absolute -top-14 -right-2 pointer-events-none select-none hidden md:block z-20"
                  animate={{ y: [0,-10,0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}>
                  <Image src="/mascot-2.png" alt="น้องใบบัว" width={140} height={140} style={{ objectFit: 'contain' }} />
                </motion.div>
              </motion.div>
            )
          })()}

          {/* 02 — 1-col */}
          {(() => {
            const f = FEATS[1]
            return (
              <motion.div
                className="relative rounded-3xl overflow-hidden p-8 bg-white group min-h-[260px] flex flex-col justify-between"
                style={{ border: '1.5px solid #f0f0f0', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08, ease: [0.22,1,0.36,1] }}
                whileHover={{ y: -5 }}>
                <div className="absolute top-5 right-7 text-[90px] font-extrabold leading-none select-none pointer-events-none opacity-[0.04] text-gray-900">{f.num}</div>
                <div className="absolute bottom-7 right-7 text-5xl font-extrabold leading-none pointer-events-none"
                  style={{ color: f.iconBg }}>1<span className="text-2xl">วัน</span></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: f.iconBg, border: `1.5px solid ${f.iconBorder}` }}>
                    <f.Icon size={24} strokeWidth={1.8} color={f.accent} />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-950 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{f.body}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {f.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-xl text-xs font-semibold"
                      style={{ background: f.iconBg, color: f.accent }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            )
          })()}

          {/* 03 04 05 — 3 equal cards */}
          {FEATS.slice(2, 5).map((f, i) => (
            <motion.div key={f.num}
              className="relative rounded-3xl overflow-hidden p-8 bg-white group flex flex-col justify-between"
              style={{ border: '1.5px solid #f0f0f0', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -5, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' } as any}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: `linear-gradient(135deg,${f.iconBg}55 0%,transparent 50%)` }} />
              <div className="absolute top-5 right-7 text-[80px] font-extrabold leading-none select-none pointer-events-none opacity-[0.04] text-gray-900">{f.num}</div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: f.iconBg, border: `1.5px solid ${f.iconBorder}` }}>
                  <f.Icon size={22} strokeWidth={1.8} color={f.accent} />
                </div>
                <h3 className="text-lg font-extrabold text-gray-950 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{f.body}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 relative z-10">
                {f.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-xl text-xs font-medium bg-gray-100 text-gray-600">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* 06 — full-width closing card, pink-green */}
          {(() => {
            const f = FEATS[5]
            return (
              <motion.div
                className="md:col-span-3 relative rounded-3xl overflow-hidden p-9"
                style={{ background: 'linear-gradient(135deg,#fce4ec 0%,#f0fdf4 50%,#dbeafe 100%)', border: '1.5px solid #f8bbd0' }}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22,1,0.36,1] }}
                whileHover={{ y: -4 }}>
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse 40% 100% at 85% 50%, rgba(255,255,255,0.6) 0%, transparent 60%)' }} />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ opacity: 0.07, backgroundImage: 'radial-gradient(circle, #e91e63 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-10">
                  <div className="flex-1">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: f.iconBg, border: `1.5px solid ${f.iconBorder}` }}>
                      <f.Icon size={24} strokeWidth={1.8} color={f.accent} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-950 mb-3">{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xl">{f.body}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:flex-col md:items-end flex-shrink-0">
                    {f.tags.map((t, ti) => (
                      <span key={t} className="px-4 py-2 rounded-xl text-sm font-semibold"
                        style={ti % 2 === 0
                          ? { background: 'rgba(233,30,99,0.08)', color: '#c2185b', border: '1px solid rgba(233,30,99,0.18)' }
                          : { background: 'rgba(67,160,71,0.08)',  color: '#2e7d32', border: '1px solid rgba(67,160,71,0.2)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })()}

        </div>
      </div>

    </section>
  )
}
