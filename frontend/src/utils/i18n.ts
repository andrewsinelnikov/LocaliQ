import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../data/languages/en.json';
import ukTranslation from '../data/languages/uk.json';

const resources = {
  en: { translation: enTranslation },
  uk: { translation: ukTranslation },
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
