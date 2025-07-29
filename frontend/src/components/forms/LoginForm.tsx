import { useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  try {
    const response = await fetch('http://localhost:8000/api/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      alert('Вхід успішний!');
    } else {
      const errorData = await response.json();
      alert(`Помилка: ${errorData.detail || 'невірні дані'}`);
    }
  } catch (error) {
    console.error('Помилка під час входу:', error);
    alert('Помилка мережі');
  }
};

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>{t('login.title')}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            {t('login.username')}
            <input
              type="username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            {t('login.password')}
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="forgot-password">
            <Link to="/forgot-password">{t('login.forgot_password')}</Link>
          </div>
          <button type="submit">{t('login.submit')}</button>
        </form>
        <p className="alt-link">
          {t('login.no_account')} <Link to="/register">{t('login.register')}</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;