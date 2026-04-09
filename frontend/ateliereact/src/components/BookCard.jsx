import { Link } from 'react-router-dom'
import '../styles/BookCard.css'

export default function BookCard({ book, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      onDelete(book._id)
    }
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`}>⭐</span>)
    }
    if (hasHalfStar) {
      stars.push(<span key="half">✨</span>)
    }
    for (let i = 0; i < 5 - Math.ceil(rating); i++) {
      stars.push(<span key={`empty-${i}`}>☆</span>)
    }
    return stars
  }

  return (
    <div className="book-card">
      <div className="book-image">
        <img src={book.imageUrl} alt={book.title} onError={(e) => e.target.src = 'https://via.placeholder.com/200x300?text=Book'} />
        {!book.inStock && <div className="out-of-stock">Out of Stock</div>}
      </div>

      <div className="book-card-content">
        <div className="book-card-header">
          {book.category && (
            <span className="book-category">{book.category.icon} {book.category.name}</span>
          )}
          <h3>{book.title}</h3>
        </div>

        <div className="book-card-meta">
          <p className="author">by {book.author}</p>
          {book.rating > 0 && (
            <div className="book-rating">
              <div className="stars">{renderStars(book.rating)}</div>
              <span className="rating-text">({book.rating}/5)</span>
            </div>
          )}
        </div>

        {book.description && (
          <p className="book-description">{book.description.substring(0, 80)}...</p>
        )}

        <div className="book-card-footer">
          <div className="price-section">
            <span className="price">${book.price.toFixed(2)}</span>
          </div>
          <div className="button-group">
            <Link to={`/books/${book._id}`} className="btn btn-primary btn-sm">
              View
            </Link>
            <Link to={`/books/edit/${book._id}`} className="btn btn-secondary btn-sm">
              Edit
            </Link>
            <button onClick={handleDelete} className="btn btn-danger btn-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
