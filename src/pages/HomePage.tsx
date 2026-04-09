import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <CTA />
    </div>
  )
}
