import { useState } from 'react';
import { categories } from './categoriesConfig';

const CategoriesList = () => {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);

  const handleExpand = (id: string) => {
    setExpandedCategoryId(prev => (prev === id ? null : id));
  };

  return (
    <div className="categories-page">
      <h1 className="categories-title">🛍️ Explore Local Categories</h1>
      <p className="categories-subtitle">Support local producers by exploring what they make, grow, and offer.</p>

      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <div
              className="card-top"
              style={{ backgroundImage: `url(${cat.imageUrl})` }}
              onClick={() => handleExpand(cat.id)}
            >
              <div className="overlay">
                <span className="emoji">{cat.emoji}</span>
                <h2>{cat.title}</h2>
                <p>{cat.description}</p>
              </div>
            </div>

            {expandedCategoryId === cat.id && (
              <div className="subcategories-list">
                {cat.subcategories.map((sub) => (
                  <div key={sub.name} className="subcategory-item">
                    <span className="sub-emoji">{sub.emoji}</span>
                    <span>{sub.name}</span>
                    <p>{sub.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesList