import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const IdeaStartForm = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    idea: '',
    product: '',
    customer: '',
    problem: '',
    competitors: '',
    motivation: '',
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Idea submitted:', form);
    alert(t('ideaForm.thankYou'));
  };

  return (
    <div className="form-producer-page">
      <div className="form-producer-box">
        <h2>{t('ideaForm.title')}</h2>
        <p className="description">{t('ideaForm.subtitle')}</p>

        <form onSubmit={handleSubmit}>
          <label>
            {t('ideaForm.idea')}
            <textarea
              value={form.idea}
              onChange={(e) => handleChange('idea', e.target.value)}
              rows={2}
              required
            />
          </label>

          <label>
            {t('ideaForm.product')}
            <input
              type="text"
              value={form.product}
              onChange={(e) => handleChange('product', e.target.value)}
              required
            />
          </label>

          <label>
            {t('ideaForm.customer')}
            <input
              type="text"
              value={form.customer}
              onChange={(e) => handleChange('customer', e.target.value)}
              required
            />
          </label>

          <label>
            {t('ideaForm.problem')}
            <textarea
              value={form.problem}
              onChange={(e) => handleChange('problem', e.target.value)}
              rows={2}
              required
            />
          </label>

          <label>
            {t('ideaForm.competitors')} <span className="idea-box-optional">{t('ideaForm.optional')}</span>
            <textarea
              value={form.competitors}
              onChange={(e) => handleChange('competitors', e.target.value)}
              rows={2}
            />
          </label>

          <label>
            {t('ideaForm.motivation')} <span className="idea-box-optional">{t('ideaForm.optional')}</span>
            <textarea
              value={form.motivation}
              onChange={(e) => handleChange('motivation', e.target.value)}
              rows={2}
            />
          </label>

          <button type="submit">{t('ideaForm.cta')}</button>
        </form>
      </div>
    </div>
  );
};

export default IdeaStartForm;