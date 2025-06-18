import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { categories } from '../common/categoriesConfig';

const CategoryNav = () => {
  const { t } = useTranslation();
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  // Detect if the screen is mobile-sized
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClickTab = (id: string) => {
    setActiveCategoryId((prev) => (prev === id ? null : id));
  };

  const handleMouseEnterTab = (id: string) => {
    if (isMobile) return;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveCategoryId(id);
  };

  const handleMouseLeaveTab = () => {
    if (isMobile) return;
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveCategoryId(null);
    }, 50);
  };

  const handleMouseEnterPopup = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  const handleMouseLeavePopup = () => {
    if (isMobile) return;
    setActiveCategoryId(null);
  };

  return (
    <div className="category-bar-container">
      <nav className="category-bar">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`category-tab ${activeCategoryId === cat.id ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnterTab(cat.id)}
            onMouseLeave={handleMouseLeaveTab}
            onClick={() => handleClickTab(cat.id)}
          >
            <span className="category-tab-label">
              <span className="emoji">{cat.emoji}</span>
              {t(cat.title)}
            </span>
          </div>
        ))}
      </nav>

      {/* Desktop hover popup */}
      {!isMobile && activeCategoryId && (
        <div
          className="category-popup"
          onMouseEnter={handleMouseEnterPopup}
          onMouseLeave={handleMouseLeavePopup}
        >
          <div className="popup-inner">
            {categories
              .find((cat) => cat.id === activeCategoryId)
              ?.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/category/${activeCategoryId}/${sub.slug}`}
                  className="subcategory-item"
                >
                  <div className="subcategory-icon">{sub.emoji}</div>
                  <div className="subcategory-text">
                    <div className="subcategory-title">{t(sub.name)}</div>
                    <div className="subcategory-description">{t(sub.description)}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}

      {/* Mobile dropdown list */}
      {isMobile && activeCategoryId && (
        <div className="mobile-subcategory-list">
          {categories
            .find((cat) => cat.id === activeCategoryId)
            ?.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                to={`/category/${activeCategoryId}/${sub.slug}`}
                className="subcategory-item"
              >
                <div className="subcategory-icon">{sub.emoji}</div>
                <div className="subcategory-text">
                  <div className="subcategory-title">{t(sub.name)}</div>
                  <div className="subcategory-description">{t(sub.description)}</div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNav;