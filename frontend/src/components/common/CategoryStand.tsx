interface ICategoryStandProps {
  name: string;
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryStand = ({ name, image, isSelected, onClick }: ICategoryStandProps) => {
  return (
    <div
      className={`category-stand ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="image">{image}</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default CategoryStand;