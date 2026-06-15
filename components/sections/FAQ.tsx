'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const FAQS = [
  { q: 'ต้องรู้โค้ดไหมในการสร้างเว็บ?', a: 'ไม่ต้องเลย! เพียงแค่บอก AI เป็นภาษาไทยว่าต้องการเว็บแบบไหน AI จะสร้างทุกอย่างให้ ทั้งโค้ด ดีไซน์ และเนื้อหา' },
  { q: '50 เครดิตฟรีพอสร้างเว็บได้ไหม?', a: 'พอสร้างเว็บได้ 1-2 เว็บ แต่ละเครดิตใช้สำหรับ 1 คำสั่ง AI เช่น สร้างหน้า แก้สี เพิ่มเนื้อหา โดยเฉลี่ยเว็บ 1 หน้าใช้ประมาณ 15-20 เครดิต' },
  { q: 'เว็บที่สร้างมีโฆษณาหรือโลโก้ HostingLotus ไหม?', a: 'แผน Starter จะมี "Powered by HostingLotus" ที่ Footer เล็กๆ แผน Pro ขึ้นไปสามารถลบออกได้ แผน Business สามารถ White-label ได้เต็มรูปแบบ' },
  { q: 'ถ้าต้องการใช้ Domain ของตัวเองได้ไหม?', a: 'ได้เลย! แผน Pro ขึ้นไปรองรับ Custom Domain ฟรี พร้อม SSL Certificate อัตโนมัติ ไม่ต้องตั้งค่าเอง ระบบจะจัดการให้ทั้งหมด' },
  { q: 'เว็บที่สร้างแก้ไขเองได้ไหม?', a: 'ได้! สามารถแก้ไขได้ตลอดเวลาผ่าน AI Chat เพียงบอกว่าต้องการเปลี่ยนอะไร AI จะแก้ไขให้ทันที หรือจะแก้โค้ดเองก็ได้หากต้องการ' },
  { q: 'ชำระเงินได้ด้วยวิธีไหน?', a: 'รองรับบัตรเครดิต/เดบิต, PromptPay, TrueMoney Wallet, Line Pay และโอนธนาคาร ปลอดภัยด้วย SSL ทุกการชำระเงิน' },
  { q: 'ยกเลิกแผนรายเดือนได้ไหม?', a: 'ได้เสมอ! ยกเลิกได้ทุกเวลาผ่าน Dashboard ไม่มีค่าปรับ เว็บของคุณจะยังทำงานได้จนครบรอบบิล' },
  { q: 'ข้อมูลและเว็บไซต์ของฉันปลอดภัยไหม?', a: 'ปลอดภัย 100% เซิร์ฟเวอร์อยู่ในไทย backup อัตโนมัติทุกวัน ข้อมูลเป็นของคุณ ไม่มีการขายหรือแชร์ข้อมูล' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,172,190,0.18) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(187,247,208,0.18) 0%, transparent 65%)' }} />

      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeading eyebrow="FAQ" title="คำถาม" titleGreen="ที่พบบ่อย" variant="vivid" />

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            const isPink = i % 2 !== 0
            return (
              <motion.div key={i}
                className="rounded-2xl border bg-white overflow-hidden shadow-sm transition-colors"
                style={{ borderColor: isOpen ? (isPink ? '#f8bbd0' : '#bbf7d0') : '#e5e7eb' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22,1,0.36,1] }}>
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="font-semibold text-base transition-colors"
                    style={{ color: isOpen ? (isPink ? '#c2185b' : '#15803d') : '#1f2937' }}>
                    {faq.q}
                  </span>
                  <motion.span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm transition-colors text-white"
                    style={{ background: isOpen ? (isPink ? '#e91e63' : '#2e7d32') : '#e5e7eb', color: isOpen ? '#fff' : '#6b7280' }}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}>+</motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}>
                      <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4"
                        style={{ background: isPink ? 'rgba(255,240,246,0.4)' : 'rgba(240,253,244,0.4)' }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
