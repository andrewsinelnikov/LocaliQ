import { useState } from 'react';
import { useNavigate } from 'react-router';

const StartProducer = () => {
  const navigate = useNavigate();
  const [hasBusiness, setHasBusiness] = useState<null | boolean>(null);

  const handleContinue = () => {
    if (hasBusiness === true) {
      navigate('/add-producer');
    } else if (hasBusiness === false) {
      navigate('/idea-start');
    }
  };

  return (
    <div className="start-producer-page">
      <div className="start-box">
        <h2>З чого починаємо?</h2>
        <p className="question">Чи ви вже щось виробляєте або надаєте послуги?</p>

        <div className="option-list">
          <label className={`option-card ${hasBusiness === true ? 'selected' : ''}`}>
            <input
              type="radio"
              name="producer-stage"
              checked={hasBusiness === true}
              onChange={() => setHasBusiness(true)}
            />
            <div className="option-content">
              <strong>Так</strong>
              <span>Я вже маю свій бізнес і хочу додати його на платформу</span>
            </div>
          </label>

          <label className={`option-card ${hasBusiness === false ? 'selected' : ''}`}>
            <input
              type="radio"
              name="producer-stage"
              checked={hasBusiness === false}
              onChange={() => setHasBusiness(false)}
            />
            <div className="option-content">
              <strong>Ще ні</strong>
              <span>Я тільки маю ідею і хочу дослідити можливості</span>
            </div>
          </label>
        </div>

        <button
          onClick={handleContinue}
          disabled={hasBusiness === null}
          className="continue-btn"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
};

export default StartProducer;
