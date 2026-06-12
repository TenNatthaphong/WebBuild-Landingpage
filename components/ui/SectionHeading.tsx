'use client'
import { motion } from 'framer-motion'

interface Props {
  eyebrow?: string
  title: string
  titleGreen?: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({
  eyebrow, title, titleGreen, subtitle, center = true,
}: Props) {
  return (
    <motion.div
      className={`mb-14 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold tracking-wide border border-brand-200">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
        {title}{' '}
        {titleGreen && <span className="text-gradient-green">{titleGreen}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
