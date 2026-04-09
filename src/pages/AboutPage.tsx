import './Pages.css'

export default function AboutPage() {
  const team = [
    { name: 'Ade Deji', role: 'CEO & Founder', specialty: 'IT Solutions Expert' },
    { name: 'Sarah Johnson', role: 'CTO', specialty: 'Cloud Architecture' },
    { name: 'Mike Chen', role: 'Lead Designer', specialty: 'UX/UI Design' },
    { name: 'Emma Williams', role: 'Head of Security', specialty: 'Cybersecurity' }
  ]

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Wistech Solutions</h1>
          <p>Transforming businesses through innovative technology</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-main">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                Wistech Solutions is a leading IT solutions and creative company dedicated to providing 
                cutting-edge technology solutions, web design, digital marketing, and IT support services 
                to empower businesses and individuals to thrive in the digital world.
              </p>
              <p>
                With a team of skilled IT professionals, creative designers, and digital experts, we offer 
                a wide range of technical services, including website designing, graphic designing, digital 
                marketing, IT consultation, and system administration.
              </p>
              <p>
                Our mission is to empower businesses and individuals to maximize their possibilities through 
                technology, unleashing their full potential in the digital realm.
              </p>

              <div className="company-stats">
                <div className="stat">
                  <h3>500+</h3>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>98%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Team Members</p>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img src="/images/wistech-logo.svg" alt="Wistech Solutions" className="about-logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Leadership Team</h2>
          <p>Meet the experts driving our vision</p>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="specialty">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value">
              <h3>Innovation</h3>
              <p>We stay ahead of technology trends to deliver cutting-edge solutions.</p>
            </div>
            <div className="value">
              <h3>Excellence</h3>
              <p>Quality and excellence are at the core of everything we do.</p>
            </div>
            <div className="value">
              <h3>Reliability</h3>
              <p>You can trust us to deliver on our promises, every time.</p>
            </div>
            <div className="value">
              <h3>Partnership</h3>
              <p>We believe in building long-term relationships with our clients.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
