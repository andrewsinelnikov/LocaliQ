import CategorySelect from './CategorySelect';

interface SidebarProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const Sidebar = ({ categories, selected, onSelect }: SidebarProps) => {
  return (
    <div className="sidebar">
      <h2>Фільтр</h2>
      <CategorySelect
        categories={categories}
        selected={selected}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Sidebar;
