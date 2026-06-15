'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const PLANS = [
  {
    tier: 'FREE',
    name: 'ฟรี',
    priceNote: 'ตลอดไป ไม่มีวันหมดอายุ',
    highlight: false,
    btnLabel: 'เริ่มใช้ฟรี →',
    btnClass: 'border-2 border-brand-500 text-brand-600 hover:bg-brand-50',
    features: [
      'สร้างเว็บได้ไม่จำกัด',
      'Publish เป็น Subdomain ฟรี',
      'เช่น yourname.hostinglotus.cloud',
      'เครดิตฟรี 50 ครั้งแรก',
    ],
  },
  {
    tier: 'เครดิต AI',
    name: '฿2',
    priceNote: 'ต่อเครดิต · ซื้อเพิ่มตามต้องการ',
    highlight: false,
    btnLabel: 'ซื้อเครดิต →',
    btnClass: 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50',
    features: [
      'ใช้สั่ง AI สร้าง / แก้เว็บ',
      'แพ็ก 100 / 200 / 500 / 1,000',
      'ใช้ร่วมกันได้ทั้ง Workspace',
      'ไม่มีวันหมดอายุ',
    ],
  },
  {
    tier: 'SUBSCRIPTION',
    name: '฿2,000',
    priceNote: 'ต่อปี · ราว 167 บาท/เดือน เท่านั้น',
    highlight: true,
    badge: 'แนะนำ',
    btnLabel: 'สมัครเลย →',
    btnClass: 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/25',
    features: [
      'เปิดเว็บบน Host ของเรา',
      'Hosting + SSL รวมอยู่แล้ว',
      'รองรับ Custom Domain',
      'Support ทีมไทย ตอบเร็ว',
    ],
  },
  {
    tier: 'CUSTOM DOMAIN',
    name: 'ราคาตามโดเมน',
    priceNote: 'อ้างอิงราคา Hosting Lotus',
    highlight: false,
    btnLabel: 'ดูราคาโดเมน →',
    btnClass: 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50',
    features: [
      'ต้องมี Subscription ก่อน',
      'ซื้อโดเมนแยก (.com / .co.th ฯลฯ)',
      'เชื่อมโดเมนง่าย ไม่ต้องตั้งค่าเอง',
      'SSL ติดตั้งให้อัตโนมัติ',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(187,247,208,0.8) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-20 animate-blob delay-4000"
          style={{ background: 'radial-gradient(circle, rgba(254,243,199,0.8) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="ราคา"
          title="เริ่มสร้างได้ฟรี"
          titleGreen="จ่ายเฉพาะตอนจะ Publish จริง"
          subtitle="ไม่มีค่า Subscription บังคับ ไม่มีค่าธรรมเนียมซ่อนเร้น"
          variant="green"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {PLANS.map((p, i) => (
            <motion.div key={p.tier}
              className={`relative rounded-3xl border-2 bg-white p-7 ${
                p.highlight ? 'border-brand-400 shadow-xl shadow-brand-600/10' : 'border-gray-100 shadow-sm'
              } ${p.highlight ? '-mt-2' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -5 }}>

              {p.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-white text-xs font-extrabold rounded-full shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #2e7d32, #43a047)', boxShadow: '0 4px 14px rgba(46,125,50,0.35)' }}>
                  {p.badge}
                </div>
              )}

              <div className="mb-5">
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">{p.tier}</div>
                <div className="text-3xl font-extrabold text-gray-950 leading-tight mb-1">{p.name}</div>
                <div className="text-xs text-gray-400 leading-snug">{p.priceNote}</div>
              </div>

              <motion.a href="#"
                className={`block w-full text-center py-3 rounded-2xl text-sm font-bold mb-6 transition-all ${p.highlight ? '' : p.btnClass}`}
                style={p.highlight ? { background: '#2e7d32', color: '#fff', boxShadow: '0 4px 18px rgba(46,125,50,0.3)' } : {}}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                {p.btnLabel}
              </motion.a>

              <ul className="space-y-2.5">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={14} strokeWidth={2.5} className="text-brand-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* mascot-5 ที่มุมล่างขวาของ highlighted card เท่านั้น */}
              {p.highlight && (
                <motion.div className="absolute -bottom-14 -right-4 pointer-events-none select-none hidden md:block z-20"
                  animate={{ y: [0,-10,0] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
                  <Image src="/mascot-5.png" alt="น้องใบบัว" width={140} height={140} style={{ objectFit: 'contain' }} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
