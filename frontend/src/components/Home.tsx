import Awning from './layout/Awning';
import CategorySelect from './common/CategorySelect';

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
                <CategorySelect
                  categories={categories}
                  selected={selected}
                  onSelect={onSelect}
                />
                <button onClick={onShowMap}>Показати на мапі</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
