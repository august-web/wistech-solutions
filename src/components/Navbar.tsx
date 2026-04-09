import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

interface NavbarProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event
  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY > 100)
  })

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to="/">
              <img src="/images/wistech-logo.svg" alt="Wistech Solutions" className="logo-img" />
            </Link>
          </div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/services" onClick={handleNavClick}>Services</Link></li>
            <li><Link to="/about" onClick={handleNavClick}>About</Link></li>
            <li><Link to="/" onClick={handleNavClick}>Why Us</Link></li>
            <li><Link to="/contact" className="btn-nav" onClick={handleNavClick}>Contact</Link></li>
          </ul>
          <div 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}
