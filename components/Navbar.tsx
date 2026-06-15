'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 80))

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1, paddingTop: scrolled ? 10 : 0, paddingLeft: scrolled ? 16 : 0, paddingRight: scrolled ? 16 : 0 }}
      transition={{ y: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.5 }, default: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
    >
      <motion.nav
        className="mx-auto flex items-center justify-between"
        animate={{
          height:          56,
          maxWidth:        scrolled ? 1152 : 9999,
          borderRadius:    scrolled ? 20 : 0,
          paddingLeft:     scrolled ? 24 : 32,
          paddingRight:    scrolled ? 24 : 32,
          // glassmorphism in both states — just shadow/border differ
          backgroundColor: 'rgba(255,255,255,0.78)',
          backdropFilter:  'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow:       scrolled
            ? '0 8px 32px rgba(46,125,50,0.12), 0 0 0 1px rgba(255,255,255,0.6)'
            : '0 1px 0 rgba(0,0,0,0.06)',
        }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center" aria-label="HostingLotus">
          <Image
            src="/hosting-lotus-logo.png"
            alt="HostingLotus"
            width={160}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
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
        <div className="flex items-center gap-3 shrink-0">
          <Link href="#" className="hidden md:inline text-sm text-gray-500 hover:text-brand-700 transition-colors">
            เข้าสู่ระบบ
          </Link>
          <motion.a
            href="#"
            className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold shadow-md shadow-brand-600/30 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            เริ่มฟรีเลย →
          </motion.a>
        </div>
      </motion.nav>
    </motion.header>
  )
}
