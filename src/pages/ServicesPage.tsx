import { FaGlobe, FaLightbulb, FaShieldAlt, FaCloud, FaPencilAlt, FaMobile } from 'react-icons/fa'
import './Pages.css'

const allServices = [
  {
    icon: FaGlobe,
    title: 'Web Development',
    description: 'Custom web applications and responsive websites built with modern technologies to engage your audience and drive conversions.',
    features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Security First']
  },
  {
    icon: FaLightbulb,
    title: 'IT Consulting',
    description: 'Strategic technology guidance to optimize your IT infrastructure, reduce costs, and align technology with your business goals.',
    features: ['Strategic Planning', 'Cost Optimization', 'Tech Alignment', 'Expert Guidance']
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions protecting your assets, data, and reputation from evolving cyber threats.',
    features: ['Data Protection', 'Threat Detection', '24/7 Monitoring', 'Compliance Ready']
  },
  {
    icon: FaCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to enhance flexibility, reliability, and performance.',
    features: ['Scalability', 'High Availability', 'Cost Effective', 'Migration Support']
  },
  {
    icon: FaPencilAlt,
    title: 'Graphic Design',
    description: 'Stunning visual designs that capture your brand identity and leave lasting impressions.',
    features: ['Brand Identity', 'Logo Design', 'Marketing Materials', 'Print & Digital']
  },
  {
    icon: FaMobile,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android', 'Cross-Platform', 'User Experience', 'App Store Ready']
  }
]

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="services-expanded">
        <div className="container">
          <div className="services-grid-full">
            {allServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="service-card-detailed">
                  <div className="service-icon-large">
                    <IconComponent />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn btn-service">Learn More</button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="cta-services">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how our services can transform your business</p>
          <a href="/contact" className="btn btn-primary btn-large">Contact Us Today</a>
        </div>
      </section>
    </div>
  )
}
