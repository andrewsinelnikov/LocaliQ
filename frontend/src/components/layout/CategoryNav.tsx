import { useState } from 'react';
import { Link } from 'react-router';
import { categories } from '../common/categoriesConfig';

const CategoryNav = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const handleMouseLeave = () => {
    setActiveCategoryId(null);
  };

  return (
    <div className="category-bar-container">
      <nav className="category-bar">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-tab"
            onMouseEnter={() => setActiveCategoryId(cat.id)}
          >
            <span className="category-tab-label">
              <span className="emoji">{cat.emoji}</span> {cat.title}
            </span>
          </div>
        ))}
      </nav>

      {activeCategoryId && (
        <div className="category-popup" onMouseLeave={handleMouseLeave}>
          <div className="popup-inner">
            {categories
              .find((cat) => cat.id === activeCategoryId)
              ?.subcategories.map((sub) => (
                <Link
                  key={sub.name}
                  to={`/category/${activeCategoryId}/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="subcategory-item"
                >
                  <div className="subcategory-icon">{sub.emoji}</div>
                  <div className="subcategory-text">
                    <div className="subcategory-title">{sub.name}</div>
                    <div className="subcategory-description">{sub.description}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryNav;