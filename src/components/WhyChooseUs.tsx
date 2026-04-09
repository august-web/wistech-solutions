import './WhyChooseUs.css'
import { FaUsers, FaHeadset, FaExpandAlt, FaHandshake } from 'react-icons/fa'

const features = [
  {
    icon: FaUsers,
    title: 'Experienced Team',
    description: 'Industry veterans with deep expertise across various technology domains and business sectors.'
  },
  {
    icon: FaHeadset,
    title: 'Reliable Support',
    description: '24/7 dedicated support ensuring your systems run smoothly and issues are resolved quickly.'
  },
  {
    icon: FaExpandAlt,
    title: 'Scalable Solutions',
    description: 'Technology that grows with your business, adapting to your changing needs and requirements.'
  },
  {
    icon: FaHandshake,
    title: 'Client-Focused',
    description: 'Your success is our priority. We partner closely with you to understand and exceed expectations.'
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Wistech?</h2>
          <p>Proven expertise and dedication to your success</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="feature">
                <div className="feature-icon">
                  <IconComponent />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
