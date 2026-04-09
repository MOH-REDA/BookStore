import '../styles/AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About BookStore</h1>
          <p>Empowering readers worldwide since 2024</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-container">
        {/* Mission Section */}
        <section className="about-section mission-section">
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>
              BookStore is dedicated to making quality literature accessible to everyone, everywhere.
              We believe that reading has the power to inspire, educate, and transform lives. Our mission
              is to create a vibrant community where book lovers can discover, share, and celebrate the
              written word.
            </p>
          </div>
          <div className="section-image">
            <div className="image-placeholder">📚</div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="about-section offer-section">
          <h2>What We Offer</h2>
          <div className="offer-grid">
            <div className="offer-card">
              <span className="offer-icon">📖</span>
              <h3>Curated Selection</h3>
              <p>Hand-picked books across multiple genres and categories</p>
            </div>
            <div className="offer-card">
              <span className="offer-icon">💰</span>
              <h3>Best Prices</h3>
              <p>Competitive pricing with regular discounts and special offers</p>
            </div>
            <div className="offer-card">
              <span className="offer-icon">🚚</span>
              <h3>Fast Delivery</h3>
              <p>Reliable shipping to over 100 countries worldwide</p>
            </div>
            <div className="offer-card">
              <span className="offer-icon">⭐</span>
              <h3>Quality Assurance</h3>
              <p>All books verified for authenticity and excellent condition</p>
            </div>
          </div>
        </section>

        {/* History & Growth */}
        <section className="about-section">
          <div className="section-content">
            <h2>Our Story</h2>
            <p>
              BookStore was founded in 2024 with a simple yet powerful vision: to democratize access 
              to quality literature. What started as a passion project has grown into a thriving platform 
              serving readers across the globe.
            </p>
            <p>
              From our humble beginnings, we've expanded our catalog to include over 10,000 titles, 
              partnered with leading publishers and authors, and built a community of 50,000+ engaged readers. 
              Today, we continue to innovate and improve our platform to better serve our customers.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-section why-us-section">
          <h2>Why Choose BookStore?</h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>Variety & Discovery</h3>
              <p>
                From bestsellers to hidden literary gems, find your next favorite read in our 
                diverse collection spanning all genres.
              </p>
            </div>
            <div className="why-card">
              <h3>Quality & Authenticity</h3>
              <p>
                Every book is sourced from trusted suppliers and verified for authenticity 
                and quality before shipment.
              </p>
            </div>
            <div className="why-card">
              <h3>Customer-Centric Service</h3>
              <p>
                Our dedicated support team is available 24/7 to answer questions and ensure 
                your complete satisfaction.
              </p>
            </div>
            <div className="why-card">
              <h3>Continuous Innovation</h3>
              <p>
                We're constantly evolving our platform with new features, categories, and 
                personalized recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section values-section">
          <h2>Our Core Values</h2>
          <div className="values-container">
            <div className="value-item">
              <span className="value-number">1</span>
              <h3>Passion for Books</h3>
              <p>We are passionate about literature and its power to inspire.</p>
            </div>
            <div className="value-item">
              <span className="value-number">2</span>
              <h3>Integrity</h3>
              <p>We conduct our business with honesty and transparency.</p>
            </div>
            <div className="value-item">
              <span className="value-number">3</span>
              <h3>Community</h3>
              <p>We foster a supportive community of readers and book enthusiasts.</p>
            </div>
            <div className="value-item">
              <span className="value-number">4</span>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="about-cta">
          <h2>Get In Touch</h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <a href="/contact" className="btn btn-primary btn-large">
            Contact Us
          </a>
        </section>
      </div>
    </div>
  )
}
