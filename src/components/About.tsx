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
            <div className="image-placeholder">
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="imgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3c72" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <rect width="400" height="300" fill="url(#imgGrad)" rx="10" />
                <circle cx="200" cy="150" r="80" fill="#1e3c72" opacity="0.3" />
                <rect x="120" y="80" width="160" height="140" fill="none" stroke="#00d4ff" strokeWidth="2" rx="10" opacity="0.5" />
                <line x1="150" y1="120" x2="250" y2="120" stroke="#00d4ff" strokeWidth="1.5" opacity="0.4" />
                <line x1="150" y1="150" x2="250" y2="150" stroke="#00d4ff" strokeWidth="1.5" opacity="0.4" />
                <line x1="150" y1="180" x2="250" y2="180" stroke="#00d4ff" strokeWidth="1.5" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
