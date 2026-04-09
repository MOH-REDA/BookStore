import { Link } from 'react-router-dom'
import { useKeycloak } from '../hooks/useKeycloak'
import '../styles/Header.css'

export default function Header() {
  const { user, login, logout, isInitialized } = useKeycloak()

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-content">
            <span className="logo-icon">📚</span>
            <span className="logo-text">BookStore</span>
          </div>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/books" className="nav-link">Shop</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <div className="auth-section">
          {isInitialized && user ? (
            <>
              <span className="user-info">
                👤 {user.name || user.email}
              </span>
              <button onClick={logout} className="btn-logout">
                Logout
              </button>
            </>
          ) : (
            <button onClick={login} className="btn-login">
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
