interface CategorySelectProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
  includeAllOption?: boolean;
}

const CategorySelect = ({
  categories,
  selected,
  onSelect,
  includeAllOption = true,
}: CategorySelectProps) => {
  return (
    <select value={selected} onChange={(e) => onSelect(e.target.value)}>
      {includeAllOption && <option value="Усі">Усі категорії</option>}
      {categories.map((cat, i) => (
        <option key={i} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
