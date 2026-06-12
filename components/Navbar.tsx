'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const LINKS = [
  { href: '#features',    label: 'ฟีเจอร์' },
  { href: '#how-it-works',label: 'วิธีใช้งาน' },
  { href: '#pricing',     label: 'ราคา' },
  { href: '#faq',         label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60))

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className={`mx-auto max-w-6xl rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'glass shadow-xl shadow-brand-600/10' : 'bg-white/60 backdrop-blur-md border border-white/50'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5 text-xl font-extrabold select-none">
          <span className="text-gray-950">HOSTING</span>
          <span className="text-brand-500">LOTUS</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="relative text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors group">
                {label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-brand-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link href="#" className="hidden md:inline text-sm text-gray-500 hover:text-brand-700 transition-colors">
            เข้าสู่ระบบ
          </Link>
          <motion.a
            href="#"
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold shadow-md shadow-brand-600/30 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            เริ่มฟรีเลย →
          </motion.a>
        </div>
      </nav>
    </motion.header>
  )
}
