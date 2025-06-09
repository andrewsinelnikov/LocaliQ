interface ICategoryStandProps {
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryStand = ({ name, imageUrl, isSelected, onClick }: ICategoryStandProps) => {
  return (
    // <div
    //   className={`category-stand ${isSelected ? 'selected' : ''}`}
    //   onClick={onClick}
    // >
    //   <div className="image-wrapper">
    //     <img src={imageUrl} alt={name} />
    //   </div>
    //   <div className="name">{name}</div>
    // </div>
    <div
      className={`category-stand ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img src={imageUrl} alt={name} />
      <div className="category-stand-name">{name}</div>
    </div>
  );
};

export default CategoryStand;