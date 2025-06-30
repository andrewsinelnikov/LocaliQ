import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ICategory } from '../common/categoriesConfig';

interface IProps {
  category: ICategory;
  subcategory: ICategory['subcategories'][number];
  onBack: () => void;
}

const MobileSubcategoryView: React.FC<IProps> = ({ subcategory, onBack }) => {
  const { t } = useTranslation();

  return (
    <div className="mobile-subcategory-items">
      <button className="back-button" onClick={onBack}>
        ← {t('Back')}
      </button>

      <div className="subcategory-products-panel fade-in">
        {subcategory.items?.map((item, idx) => (
          <div key={idx} className="product-item">
            <img src={item.imageUrl} alt={item.name} className="product-image" />
            <div className="product-info">
              <div className="product-name">{item.name}</div>
              {item.description && (
                <div className="product-description">{item.description}</div>
              )}
              {item.season && (
                <div className="product-season">📅 {item.season}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSubcategoryView;
