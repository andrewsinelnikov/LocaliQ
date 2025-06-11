import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router'; 
import { useTranslation } from 'react-i18next';

interface INavbarProps {
  isAuthenticated: boolean;
  userRole: 'guest' | 'consumer' | 'producer' | 'ideator' | 'hybrid';
  onLogout: () => void;
}

const Navbar = ({ isAuthenticated, onLogout }: INavbarProps) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const shortLanguages = { en: 'En', uk: 'Укр' };
  const languages = { en: 'English', uk: 'Українська' };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (mobileSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [mobileSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="logo">
        <Link to="/">LocaliQ</Link>
      </div>

      <div className={`mobile-search-bar ${mobileSearchOpen ? 'open' : ''}`}>
        <input
          type="text"
          placeholder={t('navbar.searchPlaceholder')}
          ref={searchInputRef}
          onBlur={() => setMobileSearchOpen(false)}
        />
      </div>

      <div className="search-bar">
        <input type="text" placeholder={t('navbar.searchPlaceholder')} />
      </div>

      <div className="navbar-right">
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/map" onClick={() => setIsOpen(false)}>{t('navbar.map')}</Link></li>
          {isAuthenticated && (
            <li><Link to="/orders" onClick={() => setIsOpen(false)}>{t('navbar.myOrders')}</Link></li>
          )}
          <li>
            <Link to="/start-producer" onClick={() => setIsOpen(false)}>
              {t('navbar.joinProducer')}
            </Link>
          </li>

          {/* Блок мовного меню */}
          <li className="lang-select" style={{ position: 'relative' }}>
            <span
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              style={{ cursor: 'pointer' }}
            >
              {shortLanguages[i18n.language as keyof typeof shortLanguages] || i18n.language}
              <i className={`fas fa-chevron-down fa-sm ${langMenuOpen ? 'rotated' : ''}`}></i>
            </span>

            {langMenuOpen && (
              <ul
                className="lang-dropdown"
                style={{
                  position: 'absolute',
                  top: '160%',
                  right: -40,
                  backgroundColor: 'white',
                  border: '1px solid #ccddee',
                  borderRadius: '12px',
                  padding: '0.5rem',
                  listStyle: 'none',
                  zIndex: 1000,
                }}
              >
                {Object.entries(languages).map(([code, name]) => (
                  <li
                    key={code}
                    onClick={() => {
                      i18n.changeLanguage(code);
                      setLangMenuOpen(false);
                    }}
                    style={{ padding: '0.25rem 0.5rem', cursor: 'pointer' }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            {isAuthenticated ? (
              <button onClick={onLogout}>{t('Вийти')}</button>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)}>
                {t('navbar.login')}
              </Link>
            )}
          </li>
        </ul>

        {/* <button className="search-icon" aria-label="Пошук">
          <i className="fas fa-search"></i>
        </button> */}
        <button
          className="search-icon"
          aria-label="Пошук"
          onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
        >
          <i className="fas fa-search"></i>
        </button>

        <li className="mobile-lang" style={{ position: 'relative' }}>
          <span
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            style={{ cursor: 'pointer' }}
          >
            {shortLanguages[i18n.language as keyof typeof shortLanguages] || i18n.language}
            <i className={`fas fa-chevron-down fa-sm ${langMenuOpen ? 'rotated' : ''}`}></i>
          </span>

          {langMenuOpen && (
            <ul
              className="lang-dropdown"
              style={{
                position: 'absolute',
                top: '75%',
                right: -40,
                backgroundColor: 'white',
                border: '1px solid #ccddee',
                borderRadius: '12px',
                padding: '0.5rem',
                listStyle: 'none',
                zIndex: 1000,
              }}
            >
              {Object.entries(languages).map(([code, name]) => (
                <li
                  key={code}
                  onClick={() => {
                    i18n.changeLanguage(code);
                    setLangMenuOpen(false);
                  }}
                  style={{ padding: '0.25rem 0.5rem', cursor: 'pointer' }}
                >
                  {name}
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Бургер */}
        <button className="burger" onClick={toggleMenu} aria-label="Меню">
          <span className={isOpen ? 'line open' : 'line'}></span>
          <span className={isOpen ? 'line open' : 'line'}></span>
          <span className={isOpen ? 'line open' : 'line'}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;