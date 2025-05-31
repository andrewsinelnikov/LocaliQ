interface SidebarProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const Sidebar = ({ categories, selected, onSelect }: SidebarProps) => {
  return (
    <div className="sidebar">
      <h2>Фільтр</h2>
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        <option value="Усі">Усі категорії</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sidebar;
