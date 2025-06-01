import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close the menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="logo"><Link to="/">LocaliQ</Link></div>

      <button className="burger" onClick={toggleMenu} aria-label="Меню">
        <span className={isOpen ? 'line open' : 'line'}></span>
        <span className={isOpen ? 'line open' : 'line'}></span>
        <span className={isOpen ? 'line open' : 'line'}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {/* <li><a href="#about">Про нас</a></li> */}
        <li><Link to="/add-producer" onClick={handleLinkClick}>Додати виробника</Link></li>
        <li><Link to="/login" onClick={handleLinkClick}>Увійти</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
