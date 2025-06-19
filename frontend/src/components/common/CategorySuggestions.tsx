import { useTranslation } from 'react-i18next';
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

const CategorySuggestions = () => {
  const { t } = useTranslation();

  const handleSelect = (category: string) => {
    window.location.href = `/categories?selected=${encodeURIComponent(category)}`;
  };

  return (
    <div className="suggested-categories">
      <h2>{t('notFound.suggestions', 'Також в нас є дещо смачне та цікаве для вас:')}</h2>
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
  );
};

export default CategorySuggestions;