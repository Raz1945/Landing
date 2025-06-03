import { useTranslation } from 'react-i18next';

export const useTranslate = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return { t, changeLanguage, currentLanguage: i18n.language };
};
