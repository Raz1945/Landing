
export const ProjectTitle = ({title }) => {
  return (
    <div className='project__content'>
      <h1
        aria-label={`See more about ${title} in a new tab`}
        className="project__title"
      >
        {title}
      </h1>
    </div>
  )
}
