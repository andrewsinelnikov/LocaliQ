import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h3>LocaliQ</h3>
          <p>{t('footer.description')}</p>
        </div>

        <div className="footer-links">
          <h4>{t('footer.navigation')}</h4>
          <ul>
            <li><a href="/about">{t('footer.about')}</a></li>
            <li><a href="/add">{t('footer.addProducer')}</a></li>
            <li><a href="/contact">{t('footer.contact')}</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>{t('footer.social')}</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-telegram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LocaliQ. {t('footer.rights')}</p>
        <div className="footer-legal">
          <a href="/terms">{t('footer.terms')}</a>
          <span>•</span>
          <a href="/privacy">{t('footer.privacy')}</a>
          <span>•</span>
          <a href="/cookies">{t('footer.cookies')}</a>
          <span>•</span>
          <a href="/accessibility">{t('footer.accessibility')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
