import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addBook, updateBook, getBookById } from '../api/booksApi'
import categoriesApi from '../api/categoriesApi'
import '../styles/BookForm.css'

export default function BookForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    category: '',
    rating: 0,
    inStock: true,
    imageUrl: ''
  })
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

useEffect(() => {
  const loadData = async () => {
    try {
      const res = await categoriesApi.getAll()
      const cats = res.data || res.categories || res
      setCategories(Array.isArray(cats) ? cats : [])
    } catch (err) {
      console.error('Failed to load categories:', err)
      setCategories([])
    }
  }
  loadData()
}, [])

  useEffect(() => {
    if (id) {
      const loadBook = async () => {
        try {
          setLoading(true)
          const book = await getBookById(id)
          setFormData({
            title: book.title,
            author: book.author,
            description: book.description || '',
            price: book.price,
            category: book.category?._id || '',
            rating: book.rating || 0,
            inStock: book.inStock !== false,
            imageUrl: book.imageUrl || ''
          })
        } catch (err) {
          setError('Failed to load book')
          console.error(err)
        } finally {
          setLoading(false)
        }
      }
      loadBook()
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (type === 'number' ? parseFloat(value) : value)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const submitData = {
        ...formData,
        category: formData.category || undefined
      }
      if (id) {
        await updateBook(id, submitData)
      } else {
        await addBook(submitData)
      }
      navigate('/books')
    } catch (err) {
      setError('Failed to save book')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading && id) return <div className="loading">Loading...</div>

  return (
    <div className="book-form-container">
      <form onSubmit={handleSubmit} className="book-form">
        <h2>{id ? 'Edit Book' : 'Add New Book'}</h2>
        {error && <div className="error-message">{error}</div>}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter book title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author *</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              placeholder="Enter author name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category...</option>
              {categories.map(cat => (
                <option key={cat._id} value={cat._id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rating">Rating (0-5)</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              placeholder="0"
            />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor="inStock">
              <input
                type="checkbox"
                id="inStock"
                name="inStock"
                checked={formData.inStock}
                onChange={handleChange}
              />
              <span>In Stock</span>
            </label>
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter book description"
            rows="4"
          ></textarea>
        </div>

        <div className="form-group full-width">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/book-cover.jpg"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
            {loading ? 'Saving...' : 'Save Book'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/books')}
            className="btn btn-secondary btn-large"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
