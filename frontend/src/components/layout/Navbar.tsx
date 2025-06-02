import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

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
        <input type="text" placeholder="Пошук..." />
      </div>

      {/* Навігація справа */}
      <div className="navbar-right">
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/add-producer" onClick={handleLinkClick}>Додати виробника</Link></li>
          <li>
            <select className="lang-select">
              <option value="uk">UA</option>
              <option value="en">EN</option>
            </select>
          </li>
          <li><Link to="/login" onClick={handleLinkClick}>Увійти</Link></li>
        </ul>

        {/* Іконка пошуку для мобільних */}
        <button className="search-icon" aria-label="Пошук">
          🔍
        </button>
        <select className="mobile-lang">
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