import { useTranslation } from 'react-i18next';

import Awning from './layout/Awning';
import CategoryStand from './common/CategoryStand';
import CategorySelect from './common/CategorySelect';

interface IHomeProps {
  onShowMap: () => void;
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const categoryImages: Record<string, string> = {
  'Хліб і випічка': '🍞',
  'Свіжі овочі': '🥬',
  'Хендмейд': '🧵',
  'Молочка': '🥛',
  'Мед': '🍯',
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

            {/* <div className="search-controls">
                <CategorySelect
                  categories={categories}
                  selected={selected}
                  onSelect={onSelect}
                />
                <button onClick={onShowMap}>{t('home.showMap')}</button>
            </div> */}
            <div className="category-stands-grid">
              {categories.map((category) => (
                <CategoryStand
                  key={category}
                  name={category}
                  image={categoryImages[category] || '🛒'}
                  isSelected={selected === category}
                  onClick={() => onSelect(category)}
                />
              ))}
            </div>
            <button onClick={onShowMap}>{t('home.showMap')}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
