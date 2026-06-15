'use client'
import { motion } from 'framer-motion'

interface Props {
  eyebrow?: string
  title: string
  titleGreen?: string
  subtitle?: string
  center?: boolean
  variant?: 'green' | 'pink' | 'vivid'
}

const PILL: Record<string, { bg: string; border: string; color: string }> = {
  green: { bg: '#dcfce7',                   border: '#bbf7d0',              color: '#15803d' },
  pink:  { bg: 'rgba(255,240,246,0.9)',      border: 'rgba(233,30,99,0.22)', color: '#ad1457' },
  vivid: { bg: 'rgba(255,240,246,0.9)',      border: 'rgba(233,30,99,0.22)', color: '#ad1457' },
}

const TITLE_CLASS: Record<string, string> = {
  green: 'text-gradient-green',
  pink:  'text-gradient-vivid',
  vivid: 'text-gradient-vivid',
}

export default function SectionHeading({
  eyebrow, title, titleGreen, subtitle, center = true, variant = 'green',
}: Props) {
  const pill  = PILL[variant]
  const titleCls = TITLE_CLASS[variant]

  return (
    <motion.div
      className={`mb-14 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border"
          style={{ background: pill.bg, borderColor: pill.border, color: pill.color }}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
        {title}{' '}
        {titleGreen && <span className={titleCls}>{titleGreen}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
