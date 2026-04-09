import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <svg className="hero-svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3c72" stopOpacity="1" />
              <stop offset="100%" stopColor="#2a5298" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#grad1)" />
          <circle cx="100" cy="80" r="120" fill="#00d4ff" opacity="0.1" />
          <circle cx="1100" cy="500" r="150" fill="#00d4ff" opacity="0.08" />
          <path d="M 0 400 Q 300 350, 600 400 T 1200 400 L 1200 600 L 0 600 Z" fill="#ffffff" opacity="0.03" />
        </svg>
      </div>
      <div className="container hero-content">
        <h1 className="hero-title">Innovative IT Solutions for Modern Businesses</h1>
        <p className="hero-subtitle">Transform your operations with cutting-edge technology and strategic consulting. Trusted by leading companies worldwide.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get Started</a>
          <a href="#contact" className="btn btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
