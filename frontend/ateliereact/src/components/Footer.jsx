import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-brand">
            <span className="footer-icon">📚</span>
            <h3>BookStore</h3>
          </div>
          <p>Empowering readers worldwide with quality literature and exceptional service.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Browse Books</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact & Support</h4>
          <p className="footer-contact">
            <strong>Email:</strong> support@bookstore.com
          </p>
          <p className="footer-contact">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="footer-contact">
            <strong>Hours:</strong> 24/7 Support
          </p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">ig</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-content">
          <p>&copy; {currentYear} BookStore. All rights reserved.</p>
          <p className="footer-credit">Built with ❤️ for book lovers worldwide</p>
        </div>
      </div>
    </footer>
  )
}
