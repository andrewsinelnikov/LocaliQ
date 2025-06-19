import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router';
import CategorySuggestions from './CategorySuggestions';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleShowMap = () => {
    navigate('/map');
  };

  return (
    <div className="notfound-page">
      <div className="notfound-wrapper">
        <h2>{t('notFound.title', 'Ой! Нічого не знайдено')}</h2>
        <p>{t('notFound.message', 'Ми не змогли знайти цю сторінку')}</p>

        <CategorySuggestions />

        <div className="notfound-buttons">
          <Link to="/" className="notfound-link">
            {t('notFound.goHome', 'На головну вітрину')}
          </Link>
          <button onClick={handleShowMap} className="notfound-map-btn">
            {t('notFound.showMap', 'Показати карту виробників 🗺️')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;