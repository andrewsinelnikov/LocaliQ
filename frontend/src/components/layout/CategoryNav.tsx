import { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { categories } from '../common/categoriesConfig';
import Awning from './Awning';
import { useSwipe } from '../../utils/useSwipe';

const CategoryNav = () => {
  const { t } = useTranslation();
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activeSubcategorySlug, setActiveSubcategorySlug] = useState<string | null>(null);
  const [viewingSubcategoryItemsMobile, setViewingSubcategoryItemsMobile] = useState(false);
  const [animateProductGrid, setAnimateProductGrid] = useState(false);

  const closeTimeoutRef = useRef<number | null>(null);

  const productViewRef = useRef<HTMLDivElement>(null);

  const [transitionDirection, setTransitionDirection] = useState<'forward' | 'backward' | null>(null);

  useSwipe(productViewRef, {
    onSwipeRight: () => {
      if (viewingSubcategoryItemsMobile) {
        setTransitionDirection('backward');
        setViewingSubcategoryItemsMobile(false);
        setActiveSubcategorySlug(null);
      }
    }
  });


  // Detect if the screen is mobile-sized
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    // checkMobile();
    // window.addEventListener('resize', checkMobile);
    // return () => window.removeEventListener('resize', checkMobile);
    const checkMobile = () => {
      const nowMobile = window.innerWidth <= 768;
      if (isMobile && !nowMobile) {
        // just switched from mobile to desktop
        setActiveCategoryId(null);
        setActiveSubcategorySlug(null);
      }
      setIsMobile(nowMobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  
  useEffect(() => {
    if (!isMobile && activeCategoryId) {
      const category = categories.find((cat) => cat.id === activeCategoryId);
      if (category && category.subcategories.length > 0) {
        setActiveSubcategorySlug((prev) => {
          // Don't reset if already viewing something in the same category
          const stillInCategory = category.subcategories.some((sub) => sub.slug === prev);
          return stillInCategory ? prev : category.subcategories[0].slug;
        });
      }
    }
  }, [activeCategoryId, isMobile]);

  useEffect(() => {
    if (!activeSubcategorySlug) return;

    setAnimateProductGrid(false); // reset first to retrigger
    requestAnimationFrame(() => {
      setAnimateProductGrid(true);
    });
  }, [activeSubcategorySlug]);

  // const handleClickTab = (id: string) => {
  //   setActiveCategoryId((prev) => (prev === id ? null : id));
  // };

  const handleClickTab = (id: string) => {
    setActiveCategoryId((prev) => {
      const isClosing = prev === id;

      if (isClosing) {
        // Reset all state when closing
        setActiveSubcategorySlug(null);
        setViewingSubcategoryItemsMobile(false);
        return null;
      } else {
        // Switching to a new category: also reset mobile state
        setActiveSubcategorySlug(null);
        setViewingSubcategoryItemsMobile(false);
        return id;
      }
    });
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
    }, 150);
  };

  const handleMouseEnterPopup = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  const handleMouseLeavePopup = () => {
    if (isMobile) return;
    setActiveCategoryId(null);
    setActiveSubcategorySlug(null);
  };

  const handleMouseEnterSubcategory = (slug: string) => {
  setActiveSubcategorySlug(slug);
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
              {/* <span className="emoji">{cat.emoji}</span> */}
              {t(cat.title)}
            </span>
          </div>
        ))}
      </nav>

      {/* Desktop hover popup */}
      {/* {!isMobile && activeCategoryId && (
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
      )} */}
      {!isMobile && activeCategoryId && (
        <div
          className="category-popup"
          onMouseEnter={handleMouseEnterPopup}
          onMouseLeave={handleMouseLeavePopup}
        >
          <Awning />
          <div className="popup-inner">
            <button
              className="popup-close-button"
              onClick={() => setActiveCategoryId(null)}
              aria-label="Close category menu"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveCategoryId(null);
                }
              }}
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="subcategory-scroll-container">
              <div className="subcategory-list">
                {categories
                  .find((cat) => cat.id === activeCategoryId)
                  ?.subcategories.map((sub) => (
                    <div
                      key={sub.slug}
                      className={`subcategory-nav-item ${
                        activeSubcategorySlug === sub.slug ? 'active' : ''
                      }`}
                      onMouseEnter={() => handleMouseEnterSubcategory(sub.slug)}
                      onClick={() => setActiveSubcategorySlug(sub.slug)}
                    >
                      {/* <div className="subcategory-icon">{sub.emoji}</div> */}
                      <div className="subcategory-icon">
                        <img src={sub.imageUrl} alt={t(sub.name)} className="subcategory-image" />
                      </div> 
                      <div className="subcategory-label">{t(sub.name)}</div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Product list (right panel) */}
            <div className={`subcategory-products-panel ${animateProductGrid ? 'fade-in' : ''}`}>
              {categories
                .find((cat) => cat.id === activeCategoryId)
                ?.subcategories.find((sub) => sub.slug === activeSubcategorySlug)
                ?.items?.map((item, idx) => (
                  <div key={idx} className="product-item">
                    <img src={item.imageUrl} alt={item.name} className="product-image" />
                    <div className="product-info">
                      <div className="product-name">{item.name}</div>
                      {/* <div className="product-description">{item.description}</div>
                      {item.season && <div className="product-season">📅 {item.season}</div>} */}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}


      {/* Mobile dropdown list */}
      {/* {isMobile && activeCategoryId && (
        <div className="mobile-subcategory-list">
          {categories
            .find((cat) => cat.id === activeCategoryId)
            ?.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                to={`/category/${activeCategoryId}/${sub.slug}`}
                className="subcategory-item"
              >
                
                <div className="subcategory-icon">
                  <img src={sub.imageUrl} alt={t(sub.name)} className="subcategory-image" />
                </div> 
                <div className="subcategory-text">
                  <div className="subcategory-title">{t(sub.name)}</div>
                  <div className="subcategory-description">{t(sub.description)}</div>
                </div>
              </Link>
            ))}
        </div>
      )} */}
      {isMobile && activeCategoryId && (
        <div className="mobile-category-view">
          {!viewingSubcategoryItemsMobile ? (
            // Show subcategories list
            <div className="mobile-subcategory-list mobile-fade-slide">
              {categories
                .find((cat) => cat.id === activeCategoryId)
                ?.subcategories.map((sub) => (
                  <div
                    key={sub.slug}
                    className="subcategory-item"
                    onClick={() => {
                      setTransitionDirection('forward'); 
                      setActiveSubcategorySlug(sub.slug);
                      setViewingSubcategoryItemsMobile(true);
                    }}
                  >
                    <div className="subcategory-icon">
                      <img src={sub.imageUrl} alt={t(sub.name)} className="subcategory-image" />
                    </div>
                    <div className="subcategory-text">
                      <div className="subcategory-title">{t(sub.name)}</div>
                      <div className="subcategory-description">{t(sub.description)}</div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            // Show items list for selected subcategory
            <div
              className={`mobile-subcategory-items mobile-fade-slide ${
                transitionDirection === 'forward'
                  ? 'slide-forward'
                  : transitionDirection === 'backward'
                  ? 'slide-backward'
                  : ''
              }`}
              ref={productViewRef}
            >
              <div className="mobile-back-header">
                <button
                  className="back-button"
                  onClick={() => {
                    setTransitionDirection('backward');
                    setViewingSubcategoryItemsMobile(false);
                    setActiveSubcategorySlug(null);
                  }}
                >
                  ← {t('Back')}
                </button>
                <div className="subcategory-title">
                  {t(
                    categories
                      .find((cat) => cat.id === activeCategoryId)
                      ?.subcategories.find((sub) => sub.slug === activeSubcategorySlug)?.name || ''
                  )}
                </div>
              </div>

              <div className={`subcategory-products-panel ${animateProductGrid ? 'fade-in' : ''}`}>
                {categories
                  .find((cat) => cat.id === activeCategoryId)
                  ?.subcategories.find((sub) => sub.slug === activeSubcategorySlug)
                  ?.items?.map((item, idx) => (
                    <div key={idx} className="product-item">
                      <img src={item.imageUrl} alt={item.name} className="product-image" />
                      <div className="product-info">
                        <div className="product-name">{item.name}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default CategoryNav;