import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import type { IProducer } from './utils/types';

import Navbar from './components/Navbar';
import HomePage from './pages';
import MapPage from './pages/map';
import AddProducerPage from './pages/AddProducerPage';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

import data from './data/producers.json';

const AppContent = () => {
  const [selectedCategory, setSelectedCategory] = useState('Усі');

  // Встановлюємо реальну висоту (для mobile viewport fix)
  useEffect(() => {
    const setAppHeight = () => {
      document.documentElement.style.setProperty(
        '--app-height',
        `${window.innerHeight}px`
      );
    };

    setAppHeight();
    window.addEventListener('resize', setAppHeight);
    return () => window.removeEventListener('resize', setAppHeight);
  }, []);

  const allProducers: IProducer[] = data;
  const categories = [...new Set(allProducers.map((p) => p.category))];
  const filteredProducers =
    selectedCategory === 'Усі'
      ? allProducers
      : allProducers.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          }
        />
        <Route
          path="/map"
          element={
            <MapPage
              producers={filteredProducers}
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-producer" element={<AddProducerPage />} />
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
