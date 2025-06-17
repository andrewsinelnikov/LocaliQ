import { useState } from 'react';
import { categories } from './categoriesConfig';

const CategoriesList = () => {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);

  const handleExpand = (id: string) => {
    setExpandedCategoryId(prev => (prev === id ? null : id));
  };
  
  return (
    <div>
        <h2>Categories</h2>
    </div>
  )
}

export default CategoriesList