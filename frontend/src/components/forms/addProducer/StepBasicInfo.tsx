import { useTranslation } from "react-i18next";

import type { FormStepProps } from "../../../utils/types";
import { categories } from "../../common/categoriesConfig";

const StepBasicInfo = ({ form, onChange, nextStep }: FormStepProps) => {
  const { t } = useTranslation();
  const selectedCategory = categories.find(cat => cat.id === form.categoryId);

  return (
    <>
      <label>
        {t('addProducer.name')}
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => onChange('name', e.target.value)}
        />
      </label>

      <label>
        {t('addProducer.category')}
        <select
          value={form.categoryId}
          onChange={(e) => onChange('categoryId', e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {t(cat.title)}
            </option>
          ))}
        </select>
      </label>

      <div className="category-options">
        <p>{t('addProducer.category')}</p>
        <div className="category-list">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`category-card ${form.categoryId === cat.id ? 'selected' : ''}`}
              onClick={() => onChange('categoryId', cat.id)}
            >
              <img src={cat.imageUrl} alt={t(cat.title)} className="category-image" />
              <span className="category-title">{t(cat.title)}</span>
            </button>
          ))}
        </div>
      </div>


      {(selectedCategory?.subcategories?.length ?? 0) > 0 && (
        <label>
          {t('addProducer.subcategory')}
          <select
            value={form.subcategorySlug}
            onChange={(e) => onChange('subcategorySlug', e.target.value)}
          >
            {selectedCategory?.subcategories?.map((subcat) => (
              <option key={subcat.slug} value={subcat.slug}>
                {subcat.emoji} {t(subcat.name)}
              </option>
            ))}
          </select>
        </label>
      )}

      <div className="step-one">
        <button type="button" onClick={nextStep}>
          {t('addProducer.next')}
        </button>
      </div>
    </>
  );
};

export default StepBasicInfo;