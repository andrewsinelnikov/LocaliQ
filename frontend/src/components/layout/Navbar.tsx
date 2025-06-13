import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router'; 
import { useTranslation } from 'react-i18next';

interface INavbarProps {
  isAuthenticated: boolean;
  userRole: 'guest' | 'consumer' | 'producer' | 'ideator' | 'hybrid';
  onLogout: () => void;
}

const Navbar = ({ isAuthenticated, userRole, onLogout }: INavbarProps) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const shortLanguages = { en: 'En', uk: 'Укр' };
  const languages = { en: 'English', uk: 'Українська' };
  
  const toggleLangMenu = () => {
    setLangMenuOpen(!langMenuOpen);
    setIsOpen(false)
    setProfileMenuOpen(false); 
  }
  
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
    setLangMenuOpen(false);
    setIsOpen(false);
  }
  
  const toggleMenu = () => {
   setIsOpen(!isOpen); 
   setLangMenuOpen(false);
   setProfileMenuOpen(false);
  }

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
        setProfileMenuOpen(false);
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
          {userRole === 'guest' || userRole === 'consumer' ? (
            <li>
              <Link to="/start-producer" onClick={() => setIsOpen(false)}>
                {t('navbar.joinProducer')}
              </Link>
            </li>
          ) : null}
          {userRole === 'producer' ? (
            <li><Link to="/my-business" onClick={() => setIsOpen(false)}>{t('navbar.myBusiness')}</Link></li>
          ) : null}
          {userRole === 'ideator' ? (
            <li><Link to="/my-ideas" onClick={() => setIsOpen(false)}>{t('navbar.myIdeas')}</Link></li>
          ) : null}
          
          {/* Блок мовного меню */}
          <li className="lang-select" style={{ position: 'relative' }}>
            <span
              onClick={ toggleLangMenu }
              style={{ cursor: 'pointer' }}
            >
              {shortLanguages[i18n.language as keyof typeof shortLanguages] || i18n.language}
              <i className={`fas fa-chevron-down fa-sm ${langMenuOpen ? 'rotated' : ''}`}></i>
            </span>

            {langMenuOpen && (
              <ul className="lang-dropdown">
                {Object.entries(languages).map(([code, name]) => (
                  <li
                    key={code}
                    onClick={() => {
                      i18n.changeLanguage(code);
                      setLangMenuOpen(false);
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {isAuthenticated ? (
            <li className="profile-menu" style={{ position: 'relative' }}>
              <span
                onClick={ toggleProfileMenu }
                style={{ cursor: 'pointer' }}
              >
                <i className="fa-regular fa-user"></i>
                <i className={`fas fa-chevron-down fa-sm ${profileMenuOpen ? 'rotated' : ''}`}></i>
              </span>

              {profileMenuOpen && (
                <ul className="profile-dropdown">
                  <li><Link to="/profile">{t('navbar.myProfile')}</Link></li>
                  {/* {userRole === 'producer' ? (
                    <li><Link to="/my-business">{t('navbar.myBusiness')}</Link></li>
                  ) : null}
                  {userRole === 'ideator' || userRole === 'producer' ? (
                    <li><Link to="/my-ideas">{t('navbar.myIdeas')}</Link></li>
                  ) : null} */}
                  <li><Link to="/messages">{t('navbar.messages')}</Link></li>
                  <hr />
                  <li><button className='btn-transparent' onClick={onLogout}>
                    {t('navbar.logout')}
                  </button></li>
                </ul>
              )}
              </li>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)}>
                {t('navbar.login')}
              </Link>
          )}
        </ul>

        {/* <button className="search-icon" aria-label="Пошук">
          <i className="fas fa-search"></i>
        </button> */}
        <button
          className="search-ico"
          aria-label="Пошук"
          onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
        >
          <i className="fas fa-search"></i>
        </button>

        <li className="mobile-lang" style={{ position: 'relative' }}>
          <span
            onClick={ toggleLangMenu }
            style={{ cursor: 'pointer' }}
          >
            {shortLanguages[i18n.language as keyof typeof shortLanguages] || i18n.language}
            <i className={`fas fa-chevron-down fa-sm ${langMenuOpen ? 'rotated' : ''}`}></i>
          </span>

          {langMenuOpen && (
            <ul className="lang-dropdown">
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

        {isAuthenticated ? (
            <li className="mobile-profile" style={{ position: 'relative' }}>
              <span
                onClick={ toggleProfileMenu }
                style={{ cursor: 'pointer' }}
              >
                <i className="fa-regular fa-user"></i>
                <i className={`fas fa-chevron-down fa-sm ${profileMenuOpen ? 'rotated' : ''}`}></i>
              </span>

              {profileMenuOpen && (
                <ul className="profile-dropdown">
                  <li><Link to="/profile">{t('navbar.myProfile')}</Link></li>
                  {/* {userRole === 'producer' ? (
                    <li><Link to="/my-business">{t('navbar.myBusiness')}</Link></li>
                  ) : null}
                  {userRole === 'ideator' || userRole === 'producer' ? (
                    <li><Link to="/my-ideas">{t('navbar.myIdeas')}</Link></li>
                  ) : null} */}
                  <li><Link to="/messages">{t('navbar.messages')}</Link></li>
                  <hr />
                  <li><button className='btn-transparent' onClick={onLogout}>
                    {t('navbar.logout')}
                  </button></li>
                </ul>
              )}
              </li>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)}>
                {t('navbar.login')}
              </Link>
        )}

        {/* Бургер */}
        <button className="burger" onClick={ toggleMenu } aria-label="Меню">
          <span className={isOpen ? 'line open' : 'line'}></span>
          <span className={isOpen ? 'line open' : 'line'}></span>
          <span className={isOpen ? 'line open' : 'line'}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;