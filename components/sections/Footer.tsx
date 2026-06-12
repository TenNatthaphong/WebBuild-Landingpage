import Link from 'next/link'

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
    <footer className="bg-brand-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-0.5 text-xl font-extrabold mb-4">
              <span className="text-white">HOSTING</span>
              <span className="text-brand-300">LOTUS</span>
            </div>
            <p className="text-brand-200/70 text-sm leading-relaxed mb-5">
              บริษัท เมตราไบต์ คลาวด์ จำกัด<br />
              ประสบการณ์มากกว่า 10 ปี ด้าน Network,<br />
              Microsoft และ Google Cloud
            </p>
            <div className="flex gap-3">
              {['LINE','FB','IG','TW'].map(s => (
                <a key={s} href="#"
                  className="w-9 h-9 rounded-xl bg-brand-700 hover:bg-brand-600 transition-colors flex items-center justify-center text-xs font-bold text-brand-200">
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
                    <Link href="#" className="text-brand-200/70 hover:text-white text-sm transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="border-t border-brand-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-brand-200/60">
            <span>📞 02-1054-322</span>
            <span>✉ support@metrabyte.cloud</span>
            <span>💬 Line: @hostinglotus</span>
          </div>
          <p className="text-xs text-brand-200/40">© 2024 HostingLotus · Metrabyte Cloud Co., Ltd. · All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
