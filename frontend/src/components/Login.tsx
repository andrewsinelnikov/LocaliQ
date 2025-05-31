import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Реальна авторизація
    alert(`Вхід як ${email}`);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Увійти</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
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

export default Login;
