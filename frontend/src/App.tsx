import './style.css';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import data from './data/producers.json';
import { useState } from 'react';
import type { IProducer } from './utils/types';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Усі');

  const allProducers: IProducer[] = data;
  const categories = [...new Set(allProducers.map((p) => p.category))];

  const filteredProducers =
    selectedCategory === 'Усі'
      ? allProducers
      : allProducers.filter((p) => p.category === selectedCategory);

  return (
    <div className="app">
      <Sidebar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="map-container">
        <Map producers={filteredProducers} />
      </div>
    </div>
  );
};

export default App;