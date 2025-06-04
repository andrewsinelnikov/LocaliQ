import { useTranslation } from 'react-i18next';

import Awning from './layout/Awning';
import CategorySelect from './common/CategorySelect';

interface IHomeProps {
  onShowMap: () => void;
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const Home = ({ onShowMap, categories, selected, onSelect }: IHomeProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="home">
      <Awning />
      <div className="wall">
        <div className="storefront-wrapper">
            <h1>{t('home.heading')}</h1>
            <p className="tagline">{t('home.tagline')}</p>

            <div className="search-controls">
                <CategorySelect
                  categories={categories}
                  selected={selected}
                  onSelect={onSelect}
                />
                <button onClick={onShowMap}>{t('home.showMap')}</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
