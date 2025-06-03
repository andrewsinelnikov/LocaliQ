import { useState } from 'react';

const LoginForm = () => {
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
    <div className="login-page">
      <div className="login-box">
        <h2>Увійти</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Увійти</button>
        </form>
        <p className="alt-link">
          Ще не маєш акаунту? <a href="/register">Зареєструватися</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
