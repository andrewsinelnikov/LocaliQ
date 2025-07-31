import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import type { FormStepProps } from '../../../utils/types';

const StepDescriptionPhoto = ({ form, onChange, nextStep, prevStep }: FormStepProps) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoChange = (file: File | null) => {
    onChange('photo', file);
  };

  return (
    <>
      <label>
        {t('addProducer.description')}
        <textarea
          required
          value={form.description}
          onChange={(e) => onChange('description', e.target.value)}
          rows={3}
        />
      </label>

      <label>
        {t('addProducer.photo')}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={(e) =>
            handlePhotoChange(e.target.files ? e.target.files[0] : null)
          }
        />
      </label>

      <div className='steps'>
        <button type="button" onClick={prevStep}>{t('common.back')}</button>
        <button type="button" onClick={nextStep}>{t('common.next')}</button>
      </div>
    </>
  );
};

export default StepDescriptionPhoto;
