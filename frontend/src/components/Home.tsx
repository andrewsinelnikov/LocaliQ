interface IHomeProps {
  onShowMap: () => void;
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const Home = ({ onShowMap, categories, selected, onSelect }: IHomeProps) => {
  return (
    <div className="home">
      <section className="banner">
        <h1>Твій хаб якісних речей</h1>
        <h2>Знайди крафтових виробників поруч із собою</h2>
      </section>

      <section className="search-block">
        <label htmlFor="category">Категорія:</label>
        <select id="category" value={selected} onChange={(e) => onSelect(e.target.value)}>
          <option value="Усі">Усі категорії</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
        <button onClick={onShowMap}>Показати на мапі</button>
      </section>
    </div>
  );
};

export default Home;
