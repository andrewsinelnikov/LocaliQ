import Awning from './Awning';

interface IHomeProps {
  onShowMap: () => void;
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const Home = ({ onShowMap, categories, selected, onSelect }: IHomeProps) => {
  return (
    <div className="home">
      <Awning />
      <div className="wall">
        <div className="storefront-wrapper">
            <h1>Твій хаб якісних речей</h1>
            <p className="tagline">Знайди крафтових виробників поруч із собою</p>

            <div className="search-controls">
                <select value={selected} onChange={(e) => onSelect(e.target.value)}>
                    <option value="Усі">Усі категорії</option>
                    {categories.map((cat, i) => (
                    <option key={i} value={cat}>{cat}</option>
                    ))}
                </select>
                <button onClick={onShowMap}>Показати на мапі</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
