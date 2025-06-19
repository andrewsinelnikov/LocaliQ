import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import CategoryStand from './CategoryStand';

const categoryImageMap: Record<string, string> = {
  'Домашній сир': '/images/cheese.jpg',
  'Мед': '/images/honey.png',
  'Мигдаль': '/images/almonds.jpg',
  'Яблука': '/images/apples.jpg',
  'Абрикоси': '/images/apricots.jpg',
  'Лохина': '/images/blueberries.jpg',
};

const popularCategories = Object.keys(categoryImageMap);

const NotFound = () => {
  const { t } = useTranslation();

  const handleSelect = (category: string) => {
    window.location.href = `/categories?selected=${encodeURIComponent(category)}`;
  };

  return (
    <div className="notfound-page">
      <div className="notfound-wrapper">
        <h1>404</h1>
        <p>{t('notFound.message', 'Сторінку не знайдено')}</p>

        <Link to="/" className="notfound-link">
          {t('notFound.goHome', 'Повернутись на головну')}
        </Link>

        <div className="suggested-categories">
          <h2>{t('notFound.suggestions', 'Можливо, вас зацікавить:')}</h2>
          <div className="category-stands-grid">
            {popularCategories.map((category) => (
              <CategoryStand
                key={category}
                name={category}
                imageUrl={categoryImageMap[category]}
                isSelected={false}
                onClick={() => handleSelect(category)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;