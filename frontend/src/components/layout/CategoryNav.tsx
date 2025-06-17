import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { categories } from '../common/categoriesConfig';

const FADE_DURATION = 300; // ms

function useHoverMediaQuery() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(hover: hover)');
    setCanHover(mql.matches);

    const handler = (e: MediaQueryListEvent) => {
      setCanHover(e.matches);
    };

    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return canHover;
}

const CategoryNav = () => {
  const canHover = useHoverMediaQuery();

  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Desktop hover handlers
  const handleMouseEnterTab = (id: string) => {
    if (!canHover) return; // Only run on hover capable devices
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
    if (!canHover) return;
    closeTimeoutRef.current = window.setTimeout(() => {
      startFadeOut();
    }, 50);
  };

  const handleMouseEnterPopup = () => {
    if (!canHover) return;
    clearCloseTimeout();
    setIsFadingOut(false);
  };

  const handleMouseLeavePopup = () => {
    if (!canHover) return;
    startFadeOut();
  };

  // Mobile click handlers
  const handleClickTab = (id: string) => {
    if (canHover) return; // Ignore clicks on hover devices
    if (activeCategoryId === id) {
      // toggle off if clicking same tab
      startFadeOut();
    } else {
      clearCloseTimeout();
      setIsFadingOut(false);
      setActiveCategoryId(id);
    }
  };

  // Close popup on outside click (mobile only)
  useEffect(() => {
    if (!canHover && activeCategoryId) {
      const handleOutsideClick = (e: MouseEvent) => {
        const popup = document.querySelector('.category-popup');
        const nav = document.querySelector('.category-bar');
        if (
          popup &&
          !popup.contains(e.target as Node) &&
          nav &&
          !nav.contains(e.target as Node)
        ) {
          startFadeOut();
        }
      };
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [activeCategoryId, canHover]);

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
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleClickTab(cat.id);
              }
            }}
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