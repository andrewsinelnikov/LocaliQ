import { useState } from 'react';
import { Link } from 'react-router';
import { categories } from '../common/categoriesConfig';

const CategoryNav = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  return (
    <nav className="category-nav">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="category-item"
          onMouseEnter={() => setActiveCategoryId(cat.id)}
          onMouseLeave={() => setActiveCategoryId(null)}
        >
          <span className="main-label">
            <span className="emoji">{cat.emoji}</span> {cat.title}
          </span>

          {activeCategoryId === cat.id && (
            <div className="subcategory-popup">
              {cat.subcategories.map((sub) => (
                <Link
                  key={sub.name}
                  to={`/category/${cat.id}/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="subcategory-link"
                >
                  <span className="emoji">{sub.emoji}</span> {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default CategoryNav