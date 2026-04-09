import '../styles/CategoryList.css'

export default function CategoryList({ categories, onDeleteCategory }) {
  return (
    <div className="category-list">
      <h3>All Categories ({categories.length})</h3>
      {categories.length > 0 ? (
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category._id} className="category-card">
              <h4>{category.name}</h4>
              {category.description && (
                <p className="category-description">{category.description}</p>
              )}
              <button
                onClick={() => onDeleteCategory(category._id)}
                className="btn btn-danger btn-sm"
                title="Delete category"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-categories">No categories found</p>
      )}
    </div>
  )
}
