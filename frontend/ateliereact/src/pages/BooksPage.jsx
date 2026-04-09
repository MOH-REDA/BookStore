import { Link } from 'react-router-dom'
import BookList from '../components/BookList'
import '../styles/BooksPage.css'

export default function BooksPage() {
  return (
    <div className="books-page">
      <div className="page-header">
        <h1>Books</h1>
        <Link to="/books/add" className="btn btn-primary">
          + Add New Book
        </Link>
      </div>
      <BookList />
    </div>
  )
}
