import { useTranslation } from 'react-i18next';

import CategoryNav from '../layout/CategoryNav';
import Awning from '../layout/Awning';
import CategorySection from './CategorySection';

interface ICategoriesProps {
  categories: {
    name: string;
    products: { id: number; name: string; imageUrl: string; price: string }[];
  }[];
}

const Categories = ({ categories }: ICategoriesProps) => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <CategoryNav />
      <Awning />
      <div className="wall">
        <div className="storefront-wrapper">
          <h1>{t('categories.heading', 'Оберіть найкраще поруч')}</h1>
          <p className="tagline">{t('categories.tagline', 'Свіжі товари та послуги від місцевих виробників')}</p>

          {categories.map((cat) => (
            <CategorySection key={cat.name} category={cat.name} products={cat.products} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;