// import { useTranslation } from 'react-i18next';

import CategoryNav from '../layout/CategoryNav';
import Awning from '../layout/Awning';
import CategorySection from './CategorySection';

interface ICategoriesProps {
  categories: {
    name: string;
    title: string;
    subtitle: string;
    products: { id: number; name: string; imageUrl: string; price: string, producer: string }[];
  }[];
}

const Categories = ({ categories }: ICategoriesProps) => {

  return (
    <div className="home">
      <CategoryNav />
      <Awning />
      <div className="wall">
        <div className="storefront-wrapper">
          {categories.map((cat) => (
            <CategorySection 
                key={cat.name} 
                category={cat.name} 
                title={cat.title} 
                subtitle={cat.subtitle} 
                products={cat.products} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;