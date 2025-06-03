import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar traducciones
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

// Función para obtener el idioma inicial
const getInitialLanguage = () => {
  const savedLang = localStorage.getItem('language');
  if (savedLang) return savedLang;
  
  const browserLang = navigator.language.split('-')[0];
  return ['es', 'en'].includes(browserLang) ? browserLang : 'es';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false // Importante para React 18+
    }
  });

export default i18n;
