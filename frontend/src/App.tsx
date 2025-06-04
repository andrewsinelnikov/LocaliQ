import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import type { IProducer } from './utils/types';

import Navbar from './components/layout/Navbar';
import HomePage from './pages';
import MapPage from './pages/map';
import AddProducerPage from './pages/AddProducerPage';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import AccessibilityPage from './pages/AccessibilityPage';
import Footer from './components/layout/Footer';

import data from './data/producers.json';

const AppContent = () => {
  const [selectedCategory, setSelectedCategory] = useState('Усі');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mobile viewport height fix
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

  // Перевірка автентифікації користувача
  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      fetch('http://localhost:8000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Користувач:', data);
          setIsAuthenticated(true); // Якщо запит успішний, користувач авторизований
        })
        .catch((err) => {
          console.error('Помилка при отриманні користувача:', err);
          setIsAuthenticated(false);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
  };

  const allProducers: IProducer[] = data;
  const categories = [...new Set(allProducers.map((p) => p.category))];
  const filteredProducers =
    selectedCategory === 'Усі'
      ? allProducers
      : allProducers.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
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
        {!isAuthenticated ? (
          <Route path="/login" element={<LoginPage />} />
        ) : null}
        <Route path="/add-producer" element={<AddProducerPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/cookies" element={<CookiesPolicyPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
