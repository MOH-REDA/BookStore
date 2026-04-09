import { Link } from 'react-router-dom'
import '../styles/HomePage.css'

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Your Next Great Read</h1>
          <p>Explore thousands of books from bestsellers to hidden literary gems</p>
          <Link to="/books" className="btn btn-primary btn-large">
            Start Browsing
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Why Shop With Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Vast Collection</h3>
              <p>Browse thousands of titles across all genres and categories with our curated selection.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Competitive Prices</h3>
              <p>Get the best deals on books with regular discounts and special offers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Shipping</h3>
              <p>Quick and reliable delivery to ensure your books arrive in perfect condition.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Service</h3>
              <p>Exceptional customer support available 24/7 for all your inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="categories-preview-section">
        <div className="categories-container">
          <h2 className="section-title">Popular Categories</h2>
          <div className="categories-grid">
            <div className="category-preview-card">
              <span className="category-icon">📖</span>
              <h3>Fiction</h3>
              <p>Novels & Stories</p>
            </div>
            <div className="category-preview-card">
              <span className="category-icon">🔬</span>
              <h3>Science</h3>
              <p>Knowledge & Discovery</p>
            </div>
            <div className="category-preview-card">
              <span className="category-icon">💡</span>
              <h3>Self-Help</h3>
              <p>Personal Growth</p>
            </div>
            <div className="category-preview-card">
              <span className="category-icon">📚</span>
              <h3>History</h3>
              <p>Past & Present</p>
            </div>
          </div>
          <Link to="/categories" className="btn btn-secondary">
            View All Categories
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Join Our Reading Community</h2>
          <p>Become part of thousands of book lovers who discover, share, and enjoy great reads every day.</p>
          <div className="cta-buttons">
            <Link to="/books" className="btn btn-primary btn-large">
              Start Shopping
            </Link>
            <Link to="/about" className="btn btn-secondary btn-large">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Books Available</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Happy Readers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100+</div>
            <div className="stat-label">Countries Served</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4.8⭐</div>
            <div className="stat-label">Avg. Rating</div>
          </div>
        </div>
      </section>
    </div>
  )
}
