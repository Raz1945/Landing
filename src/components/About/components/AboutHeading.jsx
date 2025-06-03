import { useTranslation } from "react-i18next"

export const AboutHeading = () => {
  const {t} = useTranslation();

  return (
    <div className="about__heading-container">
      <h1 className="about__heading-title">{t('about.title')}</h1>
      <h1 className="about__heading-name">{t('about.heading')}</h1>
      <hr className="about-line" />
      <p className="about__heading-dev">{t('about.subheading')}</p>
    </div>
  )
}
