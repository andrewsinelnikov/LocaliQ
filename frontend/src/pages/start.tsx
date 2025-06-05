import { useState } from 'react';
import { useNavigate } from 'react-router';

const StartProducer = () => {
  const [choice, setChoice] = useState('');
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
    <div className="start-producer-page">
      <div className="start-producer-box">
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
            <span>Я вже маю свій бізнес і хочу додати його на платформу</span>
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="producer-type"
              value="idea"
              checked={choice === 'idea'}
              onChange={() => setChoice('idea')}
            />
            <span>Я маю ідею і хочу дослідити можливості</span>
          </label>

          <button type="submit">Продовжити</button>
        </form>
      </div>
    </div>
  );
};

export default StartProducer;