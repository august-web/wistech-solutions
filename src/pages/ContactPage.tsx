import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Pages.css'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team today</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <h3>Address</h3>
                  <p>Spintex Road, Accra</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-text">
                  <h3>Phone</h3>
                  <p>+233 240 918 204</p>
                  <p>+233 302 900 547</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>support@wistechsolutions.com</p>
                  <p>info@wistechsolutions.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-text">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for your message! We will get back to you soon.')
              }}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <textarea 
                    placeholder="Your Message" 
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us Here</h2>
          <div className="map-placeholder">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6820383427397!2d-0.2009!3d5.5887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sSpintex%20Road%2C%20Accra!5e0!3m2!1sen!2sgh!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
