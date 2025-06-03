import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  uk: {
    translation: {
      joinProducer: 'Приєднатися як виробник',
      searchPlaceholder: 'Пошук...',
      login: 'Увійти',
    },
  },
  en: {
    translation: {
      joinProducer: 'Join as a producer',
      searchPlaceholder: 'Search...',
      login: 'Login',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uk',
    interpolation: { escapeValue: false },
  });

export default i18n;
