'use client'
import { motion } from 'framer-motion'

export default function DemoVideo() {
  return (
    <section id="demo" className="py-20 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff8fc 0%, #f0fdf4 100%)' }}>

      {/* bg blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(255,172,190,0.7) 0%, transparent 65%)' }} />
        <div className="absolute -bottom-1/4 -right-1/4 w-[550px] h-[550px] rounded-full opacity-20 animate-blob delay-4000"
          style={{ background: 'radial-gradient(circle, rgba(187,247,208,0.8) 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold border"
            style={{ background: 'rgba(255,240,246,0.9)', borderColor: 'rgba(233,30,99,0.22)', color: '#ad1457' }}>
            ดูวิดีโอสาธิต
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
            สร้างเว็บใน <span className="text-gradient-vivid">5 นาที</span>
          </h2>
          <p className="mt-3 text-gray-500 text-lg">ดูวิธีที่น้องใบบัวสร้างเว็บจริงให้ลูกค้าตั้งแต่ต้นจนจบ</p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/15"
          style={{ border: '1.5px solid rgba(255,255,255,0.7)' }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>

          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100/90 backdrop-blur-sm border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-white/80 rounded-lg px-3 py-1 text-xs text-gray-400 font-mono border border-gray-200 truncate ml-2">
              web.hostinglotus.cloud
            </div>
          </div>

          <video
            src="/demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full block"
            style={{ aspectRatio: '16/9', objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
