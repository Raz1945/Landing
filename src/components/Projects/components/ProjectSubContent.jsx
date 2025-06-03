
export const ProjectSubContent = ({ description, linkToCode, title }) => {
  return (
    <div className='project__subcontent'>
        <p className="project__description">
          {description}
          <a
            href={linkToCode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`See more about the code for ${title} in a new tab`}
            className="project__description-link"
          >

            <BiCodeBlock size={17} title='View Code' />

            <span className="project__description-text">
              View code
            </span>
          </a>
        </p>
    </div>
  )
}