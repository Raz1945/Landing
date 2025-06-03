import { useTranslation } from "react-i18next";

export const HeroContext = () => {
  const { t } = useTranslation();

  return (
    <div className="hero__text-wrapper">
      <h1>
        {t('hero.title')}<br />
        <span className="hero__role">{t('hero.subtitle')}</span>
      </h1>
      <h2>{t('hero.description')}</h2>
    </div>
  );
};
