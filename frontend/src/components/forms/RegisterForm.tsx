import { useState } from 'react';
import { useNavigate } from 'react-router';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Реєстрація (API або localStorage)
    alert(`Реєстрація успішна для ${name}`);
    navigate('/login');
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
