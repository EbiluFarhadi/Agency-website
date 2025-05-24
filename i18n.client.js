// i18n.client.js
'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fa',
    supportedLngs: ['en', 'fa'],
    debug: false,
    interpolation: {
      escapeValue: false, // React escapes by default
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['localStorage', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
