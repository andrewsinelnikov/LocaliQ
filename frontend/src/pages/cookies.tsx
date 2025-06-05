import { useTranslation } from 'react-i18next';

const CookiesPolicyPage = () => {
  const { t, i18n } = useTranslation();
  const formattedDate = new Date().toLocaleDateString(i18n.language);

  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>{t('cookies.title')}</h1>
        <p>{t('cookies.lastUpdated', { date: formattedDate })}</p>

        <p>{t('cookies.intro')}</p>

        <h2>{t('cookies.section1.title')}</h2>
        <p>{t('cookies.section1.content')}</p>

        <h2>{t('cookies.section2.title')}</h2>
        <ul>
          <li>{t('cookies.section2.use1')}</li>
          <li>{t('cookies.section2.use2')}</li>
          <li>{t('cookies.section2.use3')}</li>
        </ul>

        <h2>{t('cookies.section3.title')}</h2>
        <p>{t('cookies.section3.content')}</p>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;