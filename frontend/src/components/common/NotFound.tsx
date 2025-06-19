import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import CategorySuggestions from './CategorySuggestions';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="notfound-page">
      <div className="notfound-wrapper">
        <h2>{t('notFound.title', 'Ой! Нічого не знайдено')}</h2>
        <p>{t('notFound.message', 'Ми не змогли знайти цю сторінку')}</p>

        <div className="notfound-buttons">
          <Link to="/" className="notfound-link">
            {t('notFound.goHome', 'На головну вітрину')}
          </Link>
          <Link to="/map" className="notfound-link">
            {t('notFound.showMap', 'Показати мапу виробників')}
          </Link>
        </div>

        <CategorySuggestions />
      </div>
    </div>
  );
};

export default NotFoundPage;