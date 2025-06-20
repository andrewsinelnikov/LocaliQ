import ProductCard from './ProductCard';

interface ICategorySectionProps {
  category: string;
  products: {
    id: number;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

const CategorySection = ({ category, products }: ICategorySectionProps) => {
  return (
    <div className="category-section">
      <h2 className="category-title">{category}</h2>
      <div className="category-stands-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;