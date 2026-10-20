import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          // Add your English strings here
          "welcome": "Welcome to Swaraj Forts",
          "loading": "Loading..."
        }
      },
      // Placeholders for Marathi and Hindi translations
      mr: { translation: {} },
      hi: { translation: {} }
    },
    interpolation: {
      escapeValue: false // React already escapes
    }
  });

export default i18n;
