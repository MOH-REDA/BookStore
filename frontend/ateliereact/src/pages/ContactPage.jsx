import { useState } from 'react'
import '../styles/ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message!</p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="contact-container">
        {/* Contact Methods */}
        <section className="contact-methods">
          <h2>How to Reach Us</h2>
          <div className="methods-grid">
            <div className="method-card">
              <div className="method-icon">📧</div>
              <h3>Email</h3>
              <p>support@bookstore.com</p>
              <p className="method-detail">We'll respond within 24 hours</p>
            </div>
            <div className="method-card">
              <div className="method-icon">📞</div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p className="method-detail">Mon-Fri, 9AM-6PM EST</p>
            </div>
            <div className="method-card">
              <div className="method-icon">📍</div>
              <h3>Address</h3>
              <p>123 Book Street</p>
              <p className="method-detail">New York, NY 10001</p>
            </div>
            <div className="method-card">
              <div className="method-icon">⏰</div>
              <h3>Business Hours</h3>
              <p>24/7 Customer Support</p>
              <p className="method-detail">Always here to help</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="form-container">
            <h2>Send Us a Message</h2>
            
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map or Info Sidebar */}
          <div className="contact-info-sidebar">
            <h3>Why Contact Us?</h3>
            <ul className="contact-reasons">
              <li>
                <strong>Order Issues</strong>
                <p>Track or modify your orders</p>
              </li>
              <li>
                <strong>Returns & Refunds</strong>
                <p>Hassle-free return process</p>
              </li>
              <li>
                <strong>Book Recommendations</strong>
                <p>Get personalized suggestions</p>
              </li>
              <li>
                <strong>Partnerships</strong>
                <p>Collaborate with us</p>
              </li>
              <li>
                <strong>General Inquiries</strong>
                <p>Any other questions</p>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h3>🚚 How long does shipping take?</h3>
              <p>Standard shipping takes 5-7 business days. Express options available for faster delivery.</p>
            </div>
            <div className="faq-card">
              <h3>💳 What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and digital payment methods.</p>
            </div>
            <div className="faq-card">
              <h3>↩️ What's your return policy?</h3>
              <p>30-day money-back guarantee on all purchases. Free returns with prepaid labels.</p>
            </div>
            <div className="faq-card">
              <h3>🔒 Is my information safe?</h3>
              <p>Yes! We use SSL encryption and comply with all data protection regulations.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
