import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">LocaliQ</Link></div>

      <button className="burger" onClick={toggleMenu} aria-label="Меню">
        <span className={isOpen ? 'line open' : 'line'}></span>
        <span className={isOpen ? 'line open' : 'line'}></span>
        <span className={isOpen ? 'line open' : 'line'}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about">Про нас</a></li>
        <li><a href="#add">Додати виробника</a></li>
        <li><a href="#login">Увійти</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
