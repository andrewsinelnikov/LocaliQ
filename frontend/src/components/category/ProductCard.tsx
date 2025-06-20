interface IProductCardProps {
  name: string;
  imageUrl: string;
  price: string;
  producer: string;
}

const ProductCard = ({ name, imageUrl, price, producer }: IProductCardProps) => {
  return (
    <div className="category-stand">
      <img src={imageUrl} alt={name} />
      <div className="category-stand-name">
        <div>{name}</div>
        <div style={{ fontSize: '13px', color: '#555' }}>{producer}</div>
        <div style={{ color: '#0077cc', fontWeight: '500', marginTop: '4px' }}>{price}</div>
      </div>
    </div>
  );
};


export default ProductCard;