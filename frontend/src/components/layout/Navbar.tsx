import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const shortLanguages = { en: 'EN', uk: 'UA' };
  const languages = { en: 'English', uk: 'Українська' };

  const toggleMenu = () => setIsOpen(!isOpen);

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

      <div className="search-bar">
        <input type="text" placeholder={t('searchPlaceholder')} />
      </div>

      <div className="navbar-right">
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/add-producer" onClick={() => setIsOpen(false)}>
              {t('joinProducer')}
            </Link>
          </li>

          {/* Блок мовного меню */}
          <li className="lang-select" style={{ position: 'relative' }}>
            <span
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              style={{ cursor: 'pointer' }}
            >
              {shortLanguages[i18n.language as keyof typeof shortLanguages] || i18n.language}
              <i className={`fas fa-chevron-down  fa-sm ${langMenuOpen ? 'rotated' : ''}`}></i>
            </span>

            {langMenuOpen && (
              <ul className="lang-dropdown" style={{
                position: 'absolute',
                top: '160%',
                right: -40,
                backgroundColor: 'white',
                border: '1px solid #ccddee',
                borderRadius: '12px',
                padding: '0.5rem',
                listStyle: 'none',
                zIndex: 1000
              }}>
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
            <Link to="/login" onClick={() => setIsOpen(false)}>
              {t('login')}
            </Link>
          </li>
        </ul>

        <button className="search-icon" aria-label="Пошук">
          <i className="fas fa-search"></i>
        </button>

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