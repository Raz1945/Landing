import { useTranslation } from "react-i18next"

export const AboutPresentation = () => {
  const {t} = useTranslation();

  return (
    <div className="about__presentation-container">
      <p className="about__presentation">{t('about.presentation')}</p>
    </div>

  )
}
