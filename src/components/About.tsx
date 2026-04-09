import { useState, useEffect } from 'react'
import './About.css'

export default function About() {
  const [stats, setStats] = useState({ projects: 0, years: 0, satisfaction: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about')
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight && stats.projects === 0) {
          animateCounters()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [stats.projects])

  const animateCounters = () => {
    const targets = { projects: 500, years: 10, satisfaction: 98 }
    const duration = 2000
    const start = Date.now()

    const animate = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)

      setStats({
        projects: Math.floor(targets.projects * progress),
        years: Math.floor(targets.years * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-content">
            <h2>About Wistech Solutions</h2>
            <p>We are a forward-thinking technology partner dedicated to empowering businesses with innovative solutions. Since our founding, we've helped hundreds of companies transform their operations through strategic IT solutions and digital innovation.</p>
            <p>Our commitment to excellence, customer success, and continuous innovation makes us the preferred choice for businesses seeking reliable, scalable technology partners.</p>
            <div className="about-stats">
              <div className="stat">
                <h4>{stats.projects}+</h4>
                <p>Projects Delivered</p>
              </div>
              <div className="stat">
                <h4>{stats.years}+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>{stats.satisfaction}%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/wistech-logo.svg" alt="Wistech Solutions Logo" className="about-logo" />
          </div>
        </div>
      </div>
    </section>
  )
}
