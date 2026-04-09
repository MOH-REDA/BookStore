import { useState } from 'react'
import categoriesApi from '../api/categoriesApi'
import '../styles/CategoryForm.css'

export default function CategoryForm({ onCategoryAdded }) {
  const [categoryData, setCategoryData] = useState({
    name: '',
    description: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setCategoryData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!categoryData.name.trim()) {
    setError('Category name is required');
    return;
  }

  try {
    setLoading(true);
    const newCategory = await categoriesApi.create(categoryData); // returns the created category
    setCategoryData({ name: '', description: '' });
    setError(null);

    // update the list in the parent immediately
    if (onCategoryAdded) {
      onCategoryAdded(newCategory); // pass the newly created category
    }
  } catch (err) {
    setError('Failed to add category');
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit} className="category-form">
      <h3>Add New Category</h3>
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group full-width">
        <label htmlFor="category-name">Category Name *</label>
        <input
          type="text"
          id="category-name"
          name="name"
          value={categoryData.name}
          onChange={handleChange}
          placeholder="e.g., Fantasy, Science, History"
          required
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="category-description">Description</label>
        <textarea
          id="category-description"
          name="description"
          value={categoryData.description}
          onChange={handleChange}
          placeholder="Describe this category..."
          rows="3"
        ></textarea>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Adding...' : 'Add Category'}
        </button>
      </div>
    </form>
  )
}
