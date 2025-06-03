import { HeroContext } from "./components/HeroContext";
import { HeroImg } from "./components/HeroImg";
import '../../styles/Hero.css';

export const Hero = ({ route }) => {
  return (
    <section id={route} className="hero">
      <article className="hero__content">
        <HeroContext />
        <HeroImg />
      </article>
    </section>
  );
};
