import { useState, useRef } from 'react';
import { Link } from 'react-router';
import { categories } from '../common/categoriesConfig';

const FADE_DURATION = 300; // ms

const CategoryNav = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnterTab = (id: string) => {
    clearCloseTimeout();
    setIsFadingOut(false);
    setActiveCategoryId(id);
  };

  const startFadeOut = () => {
    setIsFadingOut(true);
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveCategoryId(null);
      setIsFadingOut(false);
    }, FADE_DURATION);
  };

  const handleMouseLeaveTab = () => {
    // Delay hiding to detect if user is going to another tab
    closeTimeoutRef.current = window.setTimeout(() => {
      startFadeOut();
    }, 50);
  };

  const handleMouseEnterPopup = () => {
    clearCloseTimeout();
    setIsFadingOut(false);
  };

  const handleMouseLeavePopup = () => {
    startFadeOut();
  };

  return (
    <div className="category-bar-container">
      <nav className="category-bar">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-tab"
            onMouseEnter={() => handleMouseEnterTab(cat.id)}
            onMouseLeave={handleMouseLeaveTab}
          >
            <span className="category-tab-label">
              <span className="emoji">{cat.emoji}</span> {cat.title}
            </span>
          </div>
        ))}
      </nav>

      {(activeCategoryId || isFadingOut) && (
        <div
          className={`category-popup ${isFadingOut ? 'fade-out' : 'fade-in'}`}
          onMouseEnter={handleMouseEnterPopup}
          onMouseLeave={handleMouseLeavePopup}
        >
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
