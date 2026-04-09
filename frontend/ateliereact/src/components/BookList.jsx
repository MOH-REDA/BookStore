import { useState, useEffect } from 'react'
import BookCard from './BookCard'
import { getBooks, deleteBook } from '../api/booksApi'
import '../styles/BookList.css'

export default function BookList() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async () => {
    try {
      setLoading(true)
      const data = await getBooks()
      setBooks(data)
      setError(null)
    } catch (err) {
      setError('Failed to load books')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteBook(id)
      setBooks(books.filter(book => book._id !== id))
    } catch (err) {
      setError('Failed to delete book')
      console.error(err)
    }
  }

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <div className="loading">Loading books...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="book-list">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard
              key={book._id}
              book={book}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="no-results">No books found</p>
        )}
      </div>
    </div>
  )
}
