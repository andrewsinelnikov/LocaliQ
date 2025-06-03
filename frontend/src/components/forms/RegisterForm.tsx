import { useState } from 'react';
import { useNavigate } from 'react-router';

const RegisterForm = () => {
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
        <h2>Зареєструватися</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Ім’я
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Зареєструватися</button>
        </form>
        <p className="alt-link">
          Вже є акаунт? <a href="/login">Увійти</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
