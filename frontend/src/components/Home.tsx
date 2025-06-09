import { useTranslation } from 'react-i18next';

import Awning from './layout/Awning';
import CategoryStand from './common/CategoryStand';

interface IHomeProps {
  onShowMap: () => void;
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const categoryImageMap: Record<string, string> = {
  'Домашній сир': '/images/cheese.jpg',
  'Мед': '/images/honey.png',
  'Мигдаль': '/images/almonds.jpg',
  'Яблука': '/images/apples.jpg',
  'Абрикоси': '/images/apricots.jpg',
  'Лохина': '/images/blueberries.jpg',
  // Додаткові категорії
};

const Home = ({ onShowMap, categories, selected, onSelect }: IHomeProps) => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Awning />
      <div className="wall">
        <div className="storefront-wrapper">
          <h1>{t('home.heading')}</h1>
          <p className="tagline">{t('home.tagline')}</p>

          <div className="category-stands-grid">
            {categories.map((category) => (
              <CategoryStand
                key={category}
                name={category}
                imageUrl={
                  categoryImageMap[category] ?? '/images/default.jpg'
                }
                isSelected={selected === category}
                onClick={() => onSelect(category)}
              />
            ))}
          </div>
          <div className="more-link-wrapper">
            <a href="/categories" className="more-categories-link">Показати ще</a>
          </div>

          <button onClick={onShowMap}>{t('home.showMap')}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
