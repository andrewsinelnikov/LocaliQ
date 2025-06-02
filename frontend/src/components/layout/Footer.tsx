const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h3>LocaliQ</h3>
          <p>Платформа для пошуку локальних виробників і ферм.</p>
        </div>

        <div className="footer-links">
          <h4>Корисне</h4>
          <ul>
            <li><a href="/about">Про нас</a></li>
            <li><a href="/producers">Виробники</a></li>
            <li><a href="/add">Додати точку</a></li>
            <li><a href="/contact">Контакти</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Соцмережі</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Telegram"><i className="fab fa-telegram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LocalMarkt. Усі права захищено.</p>
      </div>
    </footer>
  );
};

export default Footer;
