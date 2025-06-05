import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage = () => {
  const { t, i18n } = useTranslation();
  const formattedDate = new Date().toLocaleDateString(i18n.language);

  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>{t('privacy.title')}</h1>
        <p>{t('privacy.lastUpdated', { date: formattedDate })}</p>

        <p>{t('privacy.intro')}</p>

        <h2>{t('privacy.section1.title')}</h2>
        <ul>
          <li>{t('privacy.section1.item1')}</li>
          <li>{t('privacy.section1.item2')}</li>
        </ul>

        <h2>{t('privacy.section2.title')}</h2>
        <p>{t('privacy.section2.content')}</p>

        <h2>{t('privacy.section3.title')}</h2>
        <p>{t('privacy.section3.content')}</p>

        <h2>{t('privacy.section4.title')}</h2>
        <p>{t('privacy.section4.content')}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
