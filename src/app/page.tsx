import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import OurWork from '@/components/OurWork'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
// import BookCall from '@/components/BookCall'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <OurWork />
      <Pricing />
      <Testimonials />
      <FAQ />
      {/* <BookCall /> */}
      <Footer />
    </main>
  )
}
