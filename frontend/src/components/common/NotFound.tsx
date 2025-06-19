import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import CategorySuggestions from './CategorySuggestions';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="notfound-page">
      <div className="notfound-wrapper">
        <h1>404</h1>
        <p>{t('notFound.message', 'Сторінку не знайдено')}</p>

        <Link to="/" className="notfound-link">
          {t('notFound.goHome', 'Повернутись на головну')}
        </Link>

        <CategorySuggestions />
      </div>
    </div>
  );
};

export default NotFound;