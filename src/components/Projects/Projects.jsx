import { useTranslation } from "react-i18next";
import { images } from "../../assets/images";
import { ProjectCard } from "./components/ProjectCard";
import '../../styles/Projects.css'

export const Projects = ({ route }) => {
  const {t} = useTranslation();

  const projects = t('projects.items', { returnObjects: true });

  return (
    <section id={route} className="projects">
        <article className='projects__content'>
          
          <div className="projects__text-wrapper">
            <h1>{t('projects.title')}</h1>
            <hr className="projects-line" />
          </div>

          <ul className='projects__list'>
            {projects.map(projects =>(
              <ProjectCard
                key={projects.title}
                imgSrc={images[projects.imgKey]}
                alt={projects.alt}
                title={projects.title}
                title_description={projects.title_description}
                description={projects.description}
                linkTo={projects.linkTo}
                linkToCode={projects.linkToCode}
              />
            ))}
          </ul>
        </article>
    </section>
  );
};
