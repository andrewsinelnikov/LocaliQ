import { useState } from 'react';

const IdeaStart = () => {
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

    // TODO: API call або localStorage
    console.log('Idea submitted:', form);
    alert('Дякуємо! Вашу ідею збережено.');
  };

  return (
    <div className="idea-page">
      <div className="idea-box">
        <h2>Поділіться своєю ідеєю</h2>
        <p className="description">Це допоможе краще зрозуміти, з чого почати</p>

        <form onSubmit={handleSubmit}>
          <label>
            Яка у вас ідея?
            <textarea
              value={form.idea}
              onChange={(e) => handleChange('idea', e.target.value)}
              rows={2}
              required
            />
          </label>

          <label>
            Що саме хочете створити або продавати?
            <input
              type="text"
              value={form.product}
              onChange={(e) => handleChange('product', e.target.value)}
              required
            />
          </label>

          <label>
            Хто ваш клієнт?
            <input
              type="text"
              value={form.customer}
              onChange={(e) => handleChange('customer', e.target.value)}
              required
            />
          </label>

          <label>
            Які проблеми вирішує ваш продукт?
            <textarea
              value={form.problem}
              onChange={(e) => handleChange('problem', e.target.value)}
              rows={2}
              required
            />
          </label>

          <label>
            Які є конкуренти або схожі проєкти? <span className="optional">(необов’язково)</span>
            <textarea
              value={form.competitors}
              onChange={(e) => handleChange('competitors', e.target.value)}
              rows={2}
            />
          </label>

          <label>
            Ваш досвід або мотивація <span className="optional">(необов’язково)</span>
            <textarea
              value={form.motivation}
              onChange={(e) => handleChange('motivation', e.target.value)}
              rows={2}
            />
          </label>

          <button type="submit">Розпочати проєкт</button>
        </form>
      </div>
    </div>
  );
};

export default IdeaStart;