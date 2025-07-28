import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Помилка: ${errorData.detail || 'невірна електронна адреса'}`);
      }
    } catch (error) {
      console.error('Помилка мережі:', error);
      alert('Помилка мережі');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>{t('forgot.title')}</h2>
        {submitted ? (
          <p className="success">{t('forgot.success')}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              {t('forgot.email')}
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button type="submit">{t('forgot.submit')}</button>
          </form>
        )}
        <p className="alt-link">
          <a href="/login">{t('forgot.back_to_login')}</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordForm