'use client'
import { motion } from 'framer-motion'

const LOGOS = [
  { name: 'WordPress',  icon: '🔷' },
  { name: 'Shopify',    icon: '🛍️' },
  { name: 'WooCommerce',icon: '🛒' },
  { name: 'Stripe',     icon: '💳' },
  { name: 'Firebase',   icon: '🔥' },
  { name: 'Google Cloud',icon:'☁️' },
  { name: 'Cloudflare', icon: '🛡️' },
  { name: 'Vercel',     icon: '▲' },
  { name: 'GitHub',     icon: '🐙' },
  { name: 'Slack',      icon: '💬' },
  { name: 'LINE',       icon: '💚' },
  { name: 'Facebook',   icon: '🔵' },
]

const Row = ({ items, reverse = false }: { items: typeof LOGOS; reverse?: boolean }) => (
  <div className={`flex ${reverse ? 'animate-[marquee_36s_linear_infinite_reverse]' : 'animate-marquee'} whitespace-nowrap`}>
    {[...items, ...items].map((l, i) => (
      <div key={i} className="inline-flex items-center gap-2.5 mx-6 px-5 py-2.5 rounded-2xl bg-white border border-gray-100 shadow-sm text-sm font-semibold text-gray-700 whitespace-nowrap">
        <span className="text-xl">{l.icon}</span>
        {l.name}
      </div>
    ))}
  </div>
)

export default function LogoMarquee() {
  return (
    <section className="py-14 overflow-hidden border-y" style={{ background: 'linear-gradient(135deg, rgba(240,253,244,0.8) 0%, rgba(255,240,246,0.8) 100%)', borderColor: '#f3e6ef' }}>
      <motion.p
        className="text-center text-sm font-semibold text-gray-400 tracking-widest uppercase mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        เชื่อมต่อกับทุกแพลตฟอร์มที่คุณใช้งาน
      </motion.p>
      <div className="space-y-4">
        <div className="overflow-hidden"><Row items={LOGOS} /></div>
        <div className="overflow-hidden"><Row items={[...LOGOS].reverse()} reverse /></div>
      </div>
    </section>
  )
}
