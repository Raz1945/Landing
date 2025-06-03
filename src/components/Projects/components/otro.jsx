import { ProjectTitle } from "./ProjectTitle";
import { ProjectSubContent } from "./ProjectSubContent";

export const ProjectCard = ({ imgSrc, title, description, linkTo, linkToCode }) => {
  const cardStyle = {
    backgroundImage: `url(${imgSrc})`,
  };

  return (
    <li className="projects__list-item">

      <div className="project__card" style={cardStyle}>
        <div className="project__overlay"></div>
        <ProjectTitle linkTo={linkTo} title={title} />
        
        <ProjectSubContent description={description} linkToCode={linkToCode}  title={title} />
      </div>
    </li>
  );
};
