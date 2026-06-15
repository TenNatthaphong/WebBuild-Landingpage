'use client'
import Link from 'next/link'
import Image from 'next/image'

const COLS = [
  {
    heading: 'BAIBUA AI',
    links: ['วิธีใช้งาน','ตัวอย่างเว็บ','ราคา / แผน','บทความ'],
  },
  {
    heading: 'บริการของเรา',
    links: ['Hosting Package','Domain Registration','SSL Certificate','Cloud Server'],
  },
  {
    heading: 'บริษัท',
    links: ['เกี่ยวกับเรา','ติดต่อเรา','นโยบายความเป็นส่วนตัว','เงื่อนไขการใช้งาน'],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0d1f0e' }}>
      {/* Top gradient accent bar */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #43a047 0%, #2e7d32 30%, #c2185b 70%, #e91e63 100%)' }} />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/hosting-lotus-logo.png"
                alt="HostingLotus"
                width={160}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              บริษัท เมตราไบต์ คลาวด์ จำกัด<br />
              ประสบการณ์มากกว่า 10 ปี ด้าน Network,<br />
              Microsoft และ Google Cloud
            </p>
            <div className="flex gap-3">
              {(['LINE','FB','IG','TW']).map(s => (
                <a key={s} href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white/60 hover:text-white hover:bg-pink-500/25 transition-all"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.heading}>
              <h4 className="text-sm font-extrabold text-white mb-4 tracking-wide">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l}>
                    <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            <span>📞 02-1054-322</span>
            <span>✉ support@metrabyte.cloud</span>
            <span>💬 Line: @hostinglotus</span>
          </div>
          <p className="text-xs text-white/30">© 2024 HostingLotus · Metrabyte Cloud Co., Ltd. · All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
