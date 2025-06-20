import ProductCard from './ProductCard';

interface ICategorySectionProps {
  category: string;
  title: string;
  subtitle: string;
  products: {
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    producer: string;
  }[];
}

const CategorySection = ({ category, title, subtitle, products }: ICategorySectionProps) => {
  return (
    <div className="category-section">
      <h2 className="category-title">
        <span>{category}.</span>  {title}
      </h2>
      <p className="category-subtitle">{subtitle}</p>
      <div className="category-stands-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            producer={product.producer}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;