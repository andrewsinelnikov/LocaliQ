import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import CategorySuggestions from './CategorySuggestions';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="notfound-page">
      <div className="notfound-wrapper">
        <h2>{t('notFound.title')}</h2>
        <p>{t('notFound.message')}</p>

        <div className="notfound-buttons">
          <Link to="/" className="notfound-link">
            {t('notFound.goHome')}
          </Link>
          <Link to="/map" className="notfound-link">
            {t('notFound.showMap')}
          </Link>
        </div>

        <CategorySuggestions />
      </div>
    </div>
  );
};

export default NotFoundPage;