import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import enTranslations from './locales/en.json';
import hiTranslations from './locales/hi.json';
import taTranslations from './locales/ta.json';
import teTranslations from './locales/te.json';
import mlTranslations from './locales/ml.json';
import bnTranslations from './locales/bn.json';
import guTranslations from './locales/gu.json';
import knTranslations from './locales/kn.json';
import mrTranslations from './locales/mr.json';
import paTranslations from './locales/pa.json';

const resources = {
  en: { translation: enTranslations },
  hi: { translation: hiTranslations },
  ta: { translation: taTranslations },
  te: { translation: teTranslations },
  ml: { translation: mlTranslations },
  bn: { translation: bnTranslations },
  gu: { translation: guTranslations },
  kn: { translation: knTranslations },
  mr: { translation: mrTranslations },
  pa: { translation: paTranslations }
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'ta', 'te', 'ml', 'bn', 'gu', 'kn', 'mr', 'pa'],
    debug: true, // Enable debug mode temporarily
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    react: {
      useSuspense: false // Disable Suspense temporarily for debugging
    }
  });

export default i18n;