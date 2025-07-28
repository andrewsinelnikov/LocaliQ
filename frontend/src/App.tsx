import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import type { IProducer } from './utils/types';

import Navbar from './components/layout/Navbar';
import HomePage from './pages';
import MapPage from './pages/map';
import StartProducer from './pages/start';
import IdeaStart from './pages/idea';
import AddProducerPage from './pages/AddProducerPage';
import CategoriesPage from './pages/categories';
import LoginPage from './pages/login';
import ForgotPasswordPage from './pages/forgotPassword';
import RegisterPage from './pages/register';
import TermsPage from './pages/terms';
import PrivacyPolicyPage from './pages/privacy';
import CookiesPolicyPage from './pages/cookies';
import AccessibilityPage from './pages/accessibility';
import Footer from './components/layout/Footer';
import NotFoundPage from './pages/notFound';

import data from './data/producers.json';
import categoriesData from './data/data.json';

const getSeason = () => {
  const month = new Date().getMonth();
  if (month <= 1 || month === 11) return "winter";
  if (month <= 4) return "spring";
  if (month <= 7) return "summer";
  return "autumn";
};

const AppContent = () => {
  const [selectedCategory, setSelectedCategory] = useState('Усі');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'guest' | 'consumer' | 'producer' | 'ideator'>('guest');

  useEffect(() => {
    const season = getSeason();
    document.body.classList.add(season);
    return () => {
      document.body.classList.remove("winter", "spring", "summer", "autumn");
    };
  }, []);
  
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
          setIsAuthenticated(true);

          // 🔹 Присвоюємо роль, fallback — consumer
          const roleFromBackend = data.role || 'consumer';
          setUserRole(roleFromBackend);
        })
        .catch((err) => {
          console.error('Помилка при отриманні користувача:', err);
          setIsAuthenticated(false);
          setUserRole('guest');
        });
    } else {
      setUserRole('guest');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    setUserRole('guest');
  };

  const allProducers: IProducer[] = data;
  const categories = [...new Set(allProducers.map((p) => p.category))];
  const filteredProducers =
    selectedCategory === 'Усі'
      ? allProducers
      : allProducers.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} userRole={userRole} onLogout={handleLogout} />
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
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/start-producer" element={<StartProducer />} />
        <Route path="/idea-start" element={<IdeaStart />} />
        <Route path="/add-producer" element={<AddProducerPage />} />
        <Route path="/categories" element={<CategoriesPage categories={categoriesData} />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/cookies" element={<CookiesPolicyPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="*" element={<NotFoundPage />} />
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
