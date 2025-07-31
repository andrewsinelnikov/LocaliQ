import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import type { IProducerForm } from '../utils/types';
import StepBasicInfo from '../components/forms/addProducer/StepBasicInfo';
import StepLocation from '../components/forms/addProducer/StepLocation';
import StepDescriptionPhoto from '../components/forms/addProducer/StepDescriptionPhoto';
import StepContact from '../components/forms/addProducer/StepContact';

const AddProducerPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [form, setForm] = useState<IProducerForm>({
    name: '',
    categoryId: 'fresh-from-the-farm',
    subcategorySlug: '',
    description: '',
    photo: null,
    location: { lat: 49.8397, lng: 24.0297 },
    contactPhone: '',
    contactEmail: '',
    contactSocial: '',
  });

  const handleChange = (field: keyof IProducerForm, value: any) => {
    if (field === 'categoryId') {
      setForm((prev) => ({
        ...prev,
        categoryId: value,
        subcategorySlug: '', // Reset subcategory if category changes
      }));
    } else {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async () => {
    const payload = {
      name: form.name,
      description: form.description,
      category: form.categoryId,
      subcategory: form.subcategorySlug,
      latitude: form.location.lat,
      longitude: form.location.lng,
      contact: [form.contactPhone, form.contactEmail, form.contactSocial]
        .filter(Boolean)
        .join(', '),
    };

    try {
      const res = await fetch('http://localhost:8000/api/producers/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert(`Виробник "${form.name}" доданий!`);
        navigate('/');
      } else {
        alert('Помилка при додаванні виробника');
      }
    } catch {
      alert('Помилка мережі');
    }
  };

  const steps = [
    <StepBasicInfo form={form} onChange={handleChange} nextStep={() => setStep(step + 1)} key="step-1" />,
    <StepLocation form={form} onChange={handleChange} nextStep={() => setStep(step + 1)} prevStep={() => setStep(step - 1)} key="step-2" />,
    <StepDescriptionPhoto form={form} onChange={handleChange} nextStep={() => setStep(step + 1)} prevStep={() => setStep(step - 1)} key="step-3" />,
    <StepContact form={form} onChange={handleChange} nextStep={handleSubmit}  prevStep={() => setStep(step - 1)} key="step-4" />,
  ];

  return (
    <div className="add-producer-wrapper">
      <div className="step-indicator">
        {[0, 1, 2, 3].map((s) => (
          <span
            key={s}
            className={`step-bullet ${step === s ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="form-producer-wrapper">
        <div className="form-step-header">
          <h2>{t(`addProducer.stepTitles.${step}`)}</h2>
          <p className="description">{t(`addProducer.stepSubtitle.${step}`)}</p>
        </div>

        {steps[step]}
      </div>
    </div>
  );
};

export default AddProducerPage;
