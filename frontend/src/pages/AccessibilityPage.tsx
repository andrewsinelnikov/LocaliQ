import { useTranslation } from 'react-i18next';

const AccessibilityPage = () => {
  const { t, i18n } = useTranslation();

  // Форматування дати відповідно до поточної мови
  const formattedDate = new Date().toLocaleDateString(i18n.language);

  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>{t('accessibility.title')}</h1>
        <p>{t('accessibility.lastUpdated', { date: formattedDate })}</p>

        <p>{t('accessibility.intro')}</p>

        <h2>{t('accessibility.whatWeDoTitle')}</h2>
        <ul>
          <li>{t('accessibility.whatWeDo.readableFonts')}</li>
          <li>{t('accessibility.whatWeDo.contrastColors')}</li>
          <li>{t('accessibility.whatWeDo.clearNavigation')}</li>
          <li>{t('accessibility.whatWeDo.responsiveLayout')}</li>
        </ul>

        <p>
          {t('accessibility.contactIntro')}{' '}
          <a href="mailto:access@localiq.com">access@localiq.com</a>
        </p>
      </div>
    </div>
  );
};

export default AccessibilityPage;
