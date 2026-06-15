import Navbar        from '@/components/Navbar'
import Hero          from '@/components/sections/Hero'
import DemoVideo     from '@/components/sections/DemoVideo'
import Examples      from '@/components/sections/Examples'
import Highlights    from '@/components/sections/Highlights'
import Features      from '@/components/sections/Features'
import UsageModes    from '@/components/sections/UsageModes'
import HowItWorks    from '@/components/sections/HowItWorks'
import Pricing       from '@/components/sections/Pricing'
import Testimonials  from '@/components/sections/Testimonials'
import FAQ           from '@/components/sections/FAQ'
import CtaFinal      from '@/components/sections/CtaFinal'
import Footer        from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <DemoVideo />
      <Examples />
      <Highlights />
      <Features />
      <UsageModes />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CtaFinal />
      <Footer />
    </main>
  )
}
