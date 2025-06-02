const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h3>LocaliQ</h3>
          <p>Платформа для пошуку локальних виробників</p>
        </div>

        <div className="footer-links">
          <h4>Навігація</h4>
          <ul>
            <li><a href="/about">Про нас</a></li>
            <li><a href="/add">Додати виробника</a></li>
            <li><a href="/contact">Контакти</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Ми в мережі</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-telegram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LocaliQ. Всі права захищено.</p>
        <div className="footer-legal">
          <a href="/terms">Умови користування</a>
          <span>•</span>
          <a href="/privacy">Політика конфіденційності</a>
          <span>•</span>
          <a href="/cookies">Політика Cookies</a>
          <span>•</span>
          <a href="/accessibility">Доступність</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
