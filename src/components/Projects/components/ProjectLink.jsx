export const ProjectLink = ({ linkTo, icon,text }) => {
  return (
    <div className='project__content'>

      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={``}
        className="project__description-link"
      >
        <BiCodeBlock size={17} title='View Code' />
        {icon}
        <span className="project__description-text">{text}</span>
      </a>

    </div>
  )
}
