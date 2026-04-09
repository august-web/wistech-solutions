import './Services.css'
import { FaGlobe, FaLightbulb, FaShieldAlt, FaCloud } from 'react-icons/fa'

const services = [
  {
    icon: FaGlobe,
    title: 'Web Development',
    description: 'Custom web applications and responsive websites built with modern technologies to engage your audience and drive conversions.'
  },
  {
    icon: FaLightbulb,
    title: 'IT Consulting',
    description: 'Strategic technology guidance to optimize your IT infrastructure, reduce costs, and align technology with your business goals.'
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions protecting your assets, data, and reputation from evolving cyber threats.'
  },
  {
    icon: FaCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to enhance flexibility, reliability, and performance.'
  }
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions tailored to your business needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <IconComponent />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
