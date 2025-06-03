import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/LanguageSwitcher.css"

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const handleLanguageChange = async (lang) => {
    try {
      await i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => handleLanguageChange('es')}
        className={`language-btn ${currentLanguage === 'es' ? 'active' : ''}`}
        aria-label="Cambiar a español"
        disabled={currentLanguage === 'es'}
      >
        ES
      </button>

      <button
        onClick={() => handleLanguageChange('en')}
        className={`language-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        aria-label="Switch to English"
        disabled={currentLanguage === 'en'}
      >
        EN
      </button>
    </div>
  );
};