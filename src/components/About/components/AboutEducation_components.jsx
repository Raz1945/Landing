import aboutData from "../../../assets/aboutData";
const { education } = aboutData;

export const AboutEducationList = () => {
  return (
    <div className="about__education-list">
      <ul>
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </ul>
    </div>
  );
}

const EducationItem = ({ academy, dir, course, date, workload, knowledge, otherKnowledge = null }) => {
  return (
    <div className="education__item">
      <EducationTitle academy={academy} course={course} />
      <EducationSubTitle dir={dir} date={date} workload={workload} />
      <EducationKnowledge knowledge={knowledge} otherKnowledge={otherKnowledge} />
      <hr className="education__divider" />
    </div>
  );
}

const EducationTitle = ({ academy, course }) => {
  return (
    <div className="education__title">
      <span className="education__academy">{academy}</span>
      <p className="education__course"> - {course}</p>
    </div>
  );
}

const EducationSubTitle = ({ dir, date, workload }) => {
  return (
    <div className="education__subtitle">
      <p className="education__direction">{dir}</p>
      <p className="education__date">{date}</p>
      <p className="education__workload">{workload}</p>
    </div>
  );
}

const EducationKnowledge = ({ knowledge, otherKnowledge }) => {
  return (
    <div className="education__knowledge">
      <p className="education__knowledge-title">Knowledge:</p>

      <ul className="education__technology-list">
        {knowledge.map((tech, index) => (
          <li className="education__technology" key={index}>
            {index === knowledge.length - 1 ? tech : `${tech} |`}
          </li>
        ))}
      </ul>


      {otherKnowledge !== null && otherKnowledge.length > 0 && (
        <div className="education__other">
          <p className="education__other-title">Other knowledge:</p>
          <p className="education__other-list">{otherKnowledge.join(', ')}</p>
        </div>
      )}
    </div>
  );
}