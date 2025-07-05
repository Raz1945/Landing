import { BiCodeBlock } from "react-icons/bi";
import { BiLink } from "react-icons/bi";

import { useEffect, useRef } from "react";


export const ProjectCard = ({ imgSrc, title, title_description, description, linkTo, linkToCode }) => {
  const cardStyle = {
    backgroundImage: `url(${imgSrc})`,
  };


  // Refs para medir elementos
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // useEffect para evaluar si mostrar scroll o no
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const contentHeight = content.scrollHeight;
    const containerHeight = container.clientHeight;

    container.style.overflowY = contentHeight > containerHeight ? "auto" : "hidden";
  }, []);

  return (
    <li className="projects__list-item">
      {/* Card */}
      <div className="project__card" style={cardStyle}>

          {/* Titulo */}
          <div className="project__overlay"></div>
          <div className='project__title-wrapper'>
            <h1
              aria-label={`${title_description} ${title}`}
              className="project__title"
            >
              {title}
            </h1>
          </div>

          {/* Informacion de la Card */}
            {/* <div className="project__description"> */}
          <div className='project__subcontent'>
            <div className="project__scroll-wrapper" ref={containerRef}>
              <div className="project__description" ref={contentRef}>
                {/* Descripcion */}
                {description}
                <div className="priject__description-links">
                  {/*Link to Code */}
                  <a
                    href={linkToCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`See more about the code for ${title} in a new tab`}
                    className="project__description-link"
                  >
                    <BiCodeBlock size={17} title='View Code' />
                    <span className="project__description-text">View code</span>
                  </a>

                  {/*Link to Page */}
                  <a
                    href={linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`See more about ${title} in a new tab`}
                    className="project__description-link"
                  >
                    <BiLink size={17} title='View example page' />
                    <span className="project__description-text">View page</span>
                  </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </li>
  );
};
