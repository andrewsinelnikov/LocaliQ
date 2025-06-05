import { useState } from 'react';
import { useNavigate } from 'react-router';

const StartProducer = () => {
  const [choice, setChoice] = useState('existing');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (choice === 'existing') {
      navigate('/add-producer');
    } else if (choice === 'idea') {
      navigate('/idea-start'); 
    } else {
      alert('Будь ласка, виберіть один із варіантів.');
    }
  };

  return (
    <div className="form-producer-page">
      <div className="form-producer-box">
        <h2>З чого починаємо?</h2>
        <p className="description">
          Чи ви вже щось виробляєте або надаєте послуги?
        </p>

        <form onSubmit={handleSubmit}>
          <label className="radio-option">
            <input
              type="radio"
              name="producer-type"
              value="existing"
              checked={choice === 'existing'}
              onChange={() => setChoice('existing')}
            />
            <div>
                <span className="option-title">Я вже маю свій бізнес і хочу додати його на платформу</span>
                <p className="option-description">
                    Ви вже щось виробляєте або надаєте послуги? Супер! Ми допоможемо вам стати помітними для локальної спільноти.
                </p>
            </div>
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="producer-type"
              value="idea"
              checked={choice === 'idea'}
              onChange={() => setChoice('idea')}
            />
            <div>
                <span className="option-title">Я маю ідею і хочу дослідити можливості</span>
                <p className="option-description">
                    Ще не стартували, але думаєте про власну справу? Ми підтримаємо вас з аналізом ідеї, перших кроків та ресурсами.
                </p>
            </div>
          </label>

          <button type="submit">Продовжити</button>
        </form>
      </div>
    </div>
  );
};

export default StartProducer;