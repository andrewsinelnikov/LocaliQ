import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import data from './data/producers.json';
import type { IProducer } from './utils/types';

const AppContent = () => {
  const [selectedCategory, setSelectedCategory] = useState('Усі');
  const navigate = useNavigate();

  const allProducers: IProducer[] = data;
  const categories = [...new Set(allProducers.map((p) => p.category))];
  const filteredProducers =
    selectedCategory === 'Усі'
      ? allProducers
      : allProducers.filter((p) => p.category === selectedCategory);

  const handleShowMap = () => {
    navigate('/map');
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onShowMap={handleShowMap}
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          }
        />
        <Route
          path="/map"
          element={
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
          }
        />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
