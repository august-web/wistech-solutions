import './Footer.css'
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/wistech-logo.svg" alt="Wistech Solutions" className="footer-logo-img" />
            </div>
            <p>
              Wistech Solutions is a leading IT solutions and creative company providing cutting-edge 
              technology solutions, web design, digital marketing, and IT support services to empower 
              businesses and individuals to thrive in the digital world.
            </p>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/about">Our Team</a></li>
              <li><a href="/">Our Clients</a></li>
              <li><a href="/">Testimonials</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Support</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/">IT Solutions</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">Portfolio</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p className="contact-info">
              📍 Spintex Road, Accra
            </p>
            <p className="contact-info">
              📞 +233 240 918 204
            </p>
            <p className="contact-info">
              📞 +233 302 900 547
            </p>
            <p className="contact-info">
              ✉️ support@wistechsolutions.com
            </p>
            <p className="contact-info">
              ✉️ info@wistechsolutions.com
            </p>
          </div>

          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/wistechsolutions" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com/wistechsolution" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/wistechsolutions" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/company/wistechsolutions/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/233240918204" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Wistech Solutions. All rights reserved.</p>
            <div className="footer-links">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
              <a href="/">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
