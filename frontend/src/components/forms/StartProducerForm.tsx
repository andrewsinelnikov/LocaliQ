import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const StartProducerForm = () => {
  const [choice, setChoice] = useState<'existing' | 'idea'>('existing');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (choice === 'existing') {
      navigate('/add-producer');
    } else if (choice === 'idea') {
      navigate('/idea-start');
    } else {
      alert(t('startProducer.alert'));
    }
  };

  return (
    <div className="form-producer-page">
      <div className="form-producer-box">
        <h2>{t('startProducer.title')}</h2>
        <p className="description">{t('startProducer.subtitle')}</p>

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
              <span className="option-title">{t('startProducer.option_existing.title')}</span>
              <p className="option-description">
                {t('startProducer.option_existing.description')}
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
              <span className="option-title">{t('startProducer.option_idea.title')}</span>
              <p className="option-description">
                {t('startProducer.option_idea.description')}
              </p>
            </div>
          </label>

          <button type="submit">{t('startProducer.continue')}</button>
        </form>
      </div>
    </div>
  );
};

export default StartProducerForm;