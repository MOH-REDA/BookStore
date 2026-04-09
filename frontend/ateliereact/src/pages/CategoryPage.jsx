import { useState, useEffect } from 'react'
import CategoryForm from '../components/CategoryForm'
import CategoryList from '../components/CategoryList'
import categoriesApi from '../api/categoriesApi'
import '../styles/CategoryPage.css'

export default function CategoryPage() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true)
        const data = await categoriesApi.getAll()
        setCategories(data.data)
        setError(null)
      } catch (err) {
        setError('Failed to load categories')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadCategories()
  }, [])

  const handleCategoryAdded = () => {
    const loadCategories = async () => {
      try {
        const data = await categoriesApi.getAll()
        setCategories(data.data)
        setError(null)
      } catch (err) {
        setError('Failed to load categories')
        console.error(err)
      }
    }
    loadCategories()
  }

  const handleDeleteCategory = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await categoriesApi.delete(id)
        setCategories(categories.filter(cat => cat._id !== id))
      } catch (err) {
        setError('Failed to delete category')
        console.error(err)
      }
    }
  }

  return (
    <div className="category-page">
      <div className="category-hero">
        <h1>Book Categories</h1>
        <p>Organize and manage all book categories</p>
      </div>

      <div className="category-container">
        {error && <div className="error-message">{error}</div>}

        <div className="category-content">
          <div className="category-form-section">
            <CategoryForm onCategoryAdded={handleCategoryAdded} />
          </div>

          <div className="category-list-section">
            {loading ? (
              <div className="loading">Loading categories...</div>
            ) : categories.length === 0 ? (
              <div className="no-categories">
                <p>No categories yet. Create one to get started!</p>
              </div>
            ) : (
              <CategoryList
                categories={categories}
                onDeleteCategory={handleDeleteCategory}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
