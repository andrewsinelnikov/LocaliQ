import { useTranslation } from 'react-i18next';

const TermsPage = () => {
  const { t, i18n } = useTranslation();
  const formattedDate = new Date().toLocaleDateString(i18n.language);

  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>{t('terms.title')}</h1>
        <p>{t('terms.lastUpdated', { date: formattedDate })}</p>

        <p>{t('terms.intro')}</p>

        <h2>{t('terms.section1.title')}</h2>
        <p>{t('terms.section1.content')}</p>

        <h2>{t('terms.section2.title')}</h2>
        <p>{t('terms.section2.content')}</p>

        <h2>{t('terms.section3.title')}</h2>
        <p>{t('terms.section3.content')}</p>

        <h2>{t('terms.section4.title')}</h2>
        <p>{t('terms.section4.content')}</p>
      </div>
    </div>
  );
};

export default TermsPage;
