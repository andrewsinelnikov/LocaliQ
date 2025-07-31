import { useTranslation } from 'react-i18next';

import type { FormStepProps } from '../../../utils/types';

const StepContact = ({ form, onChange, nextStep, prevStep }: FormStepProps) => {
  const { t } = useTranslation();

  return (
    <>
      <label>
        {t('addProducer.phone')}
        <input
          type="text"
          value={form.contactPhone}
          onChange={(e) => onChange('contactPhone', e.target.value)}
        />
      </label>
      <label>
        {t('addProducer.email')}
        <input
          type="email"
          value={form.contactEmail}
          onChange={(e) => onChange('contactEmail', e.target.value)}
        />
      </label>
      <label>
        {t('addProducer.social')}
        <input
          type="text"
          value={form.contactSocial}
          onChange={(e) => onChange('contactSocial', e.target.value)}
          placeholder={t('addProducer.placeholderSocial')}
        />
      </label>

      <div className='steps'>
        <button type="button" onClick={prevStep}>{t('common.back')}</button>
        <button type="button" onClick={nextStep}>{t('common.next')}</button>
      </div>
    </>
  );
};

export default StepContact;