import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar" ref={menuRef}>
      {/* Лого */}
      <div className="logo">
        <Link to="/">LocaliQ</Link>
      </div>

      {/* Пошук */}
      <div className="search-bar">
        <input type="text" placeholder={t('searchPlaceholder')} />
      </div>

      {/* Навігація справа */}
      <div className="navbar-right">
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/add-producer" onClick={handleLinkClick}>{t('joinProducer')}</Link></li>
          <li>
            <select className="lang-select" onChange={handleLanguageChange} value={i18n.language}>
              <option value="uk">UA</option>
              <option value="en">EN</option>
            </select>
          </li>
          <li><Link to="/login" onClick={handleLinkClick}>{t('login')}</Link></li>
        </ul>

        {/* Іконка пошуку для мобільних */}
        <button className="search-icon" aria-label={t('searchPlaceholder')}>
          <i className="fas fa-search"></i>
        </button>
        <select className="mobile-lang" onChange={handleLanguageChange} value={i18n.language}>
          <option value="uk">UA</option>
          <option value="en">EN</option>
        </select>

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