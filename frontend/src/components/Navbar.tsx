const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LocaliQ</div>
      <ul className="nav-links">
        <li><a href="#about">Про нас</a></li>
        <li><a href="#add">Додати виробника</a></li>
        <li><a href="#login">Увійти</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
