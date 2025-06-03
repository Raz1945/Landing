import { AboutTechs } from "./components/AboutTechs";
import { AboutHeading } from "./components/AboutHeading";
import { AboutPresentation } from "./components/AboutPresentation";
import { AboutContacts } from "./components/AboutContacts";
import "../../styles/About.css"

export const About = ({ route }) => {
  return (
    <section id={route} className="about">
      <article className="about__content">
        <div className="about__text-wrapper">
          <AboutHeading />
          <AboutPresentation />
        </div>
        <div className="about__subcontent">
          <AboutContacts />
          <AboutTechs />
        </div>
      </article>
    </section>
  );
};