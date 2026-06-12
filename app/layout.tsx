import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/lib/lenis'

export const metadata: Metadata = {
  title: 'HostingLotus — สร้างเว็บไซต์ด้วย AI ในไม่กี่นาที',
  description:
    'AI Web Builder สัญชาติไทย สร้างเว็บไซต์สวยพร้อม Hosting ให้ทันที ไม่ต้องรู้โค้ด',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
