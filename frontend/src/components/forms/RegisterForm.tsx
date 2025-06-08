import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const RegisterForm = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (response.ok) {
      alert('Реєстрація успішна!');
      navigate('/login');
    } else {
      const errorData = await response.json();
      alert(`Помилка: ${errorData.detail || 'невідомо'}`);
    }
  } catch (error) {
    console.error('Помилка під час реєстрації:', error);
    alert('Помилка мережі');
  }
};


  return (
    <div className="register-page">
      <div className="register-box">
        <h2>{t('register.title')}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            {t('register.name')}
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            {t('register.email')}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            {t('register.password')}
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">{t('register.submit')}</button>
        </form>
        <p className="alt-link">
          {t('register.loginPrompt')} <a href="/login">{t('register.loginLink')}</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
