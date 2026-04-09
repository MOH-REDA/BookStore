import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getBookById, deleteBook } from '../api/booksApi'
import '../styles/BookDetail.css'

export default function BookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadBook()
  }, [id])

  const loadBook = async () => {
    try {
      setLoading(true)
      const data = await getBookById(id)
      setBook(data)
      setError(null)
    } catch (err) {
      setError('Failed to load book details')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id)
        navigate('/books')
      } catch (err) {
        setError('Failed to delete book')
        console.error(err)
      }
    }
  }

  if (loading) return <div className="loading">Loading book details...</div>
  if (error) return <div className="error">{error}</div>
  if (!book) return <div className="no-book">Book not found</div>

  return (
    <div className="book-detail">
      <Link to="/books" className="back-link">← Back to Books</Link>

      <div className="book-detail-container">
        <div className="book-detail-content">
          <h1>{book.title}</h1>
          <div className="book-info">
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <p><strong>Published:</strong> {new Date(book.publishedAt).toLocaleDateString()}</p>
          </div>

          <div className="book-actions">
            <Link
              to={`/books/edit/${book._id}`}
              className="btn btn-secondary"
            >
              Edit Book
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-danger"
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
