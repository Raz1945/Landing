import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoNodejs, BiLogoPython, BiLogoFlask, BiLogoPostgresql, BiLogoMongodb, BiLogoVisualStudio } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

// Función que mapea el nombre de la tecnología a su icono correspondiente
const mapTechnologyToIcon = (tech) => {
  const size = 18;
  const icons = {
    'HTML': <BiLogoHtml5 size={size} title={'HTML'} />,
    'CSS': <BiLogoCss3 size={size} title={'CSS'} />,
    'JavaScript': <BiLogoJavascript size={size} title={'JavaScript'} />,
    'TypeScript': <BiLogoTypescript size={size} title={'TypeScript'} />,
    'React': <BiLogoReact size={size} title={'React'} />,
    'Node.js': <BiLogoNodejs size={size} title={'Node.js'} />,
    'Python': <BiLogoPython size={size} title={'Python'} />,
    'Flask': <BiLogoFlask size={size} title={'Flask'} />,
    'PostgreSQL': <BiLogoPostgresql size={size} title={'PostgreSQL'} />,
    'MongoDB': <BiLogoMongodb size={size} title={'MongoDB'} />,
    'VisualBasic': <BiLogoVisualStudio size={size} title={'Visual Basic'} />,
  };
  
  return icons[tech] || null;
};

export const AboutTechsList = () => {
  const { t, ready } = useTranslation();

  // Espera a que las traducciones estén cargadas
  if (!ready) {
    return <div>Loading technologies...</div>;
  }

  // Obtiene las tecnologías como array
  const technologies = t('about.technologies', { returnObjects: true });

  // Verifica que sea un array (por si la traducción falla)
  if (!Array.isArray(technologies)) {
    console.error('Error: "about.technologies" should be an array.', technologies);
    return null;
  }

  return (
    <ul className="about__technologies-list">
      {technologies.map((tech, index) => (
        <li className="about__technologies" key={index}>
          {mapTechnologyToIcon(tech)}
          <span className='about__technologies-tech'>
            {tech}
          </span>
        </li>
      ))}
    </ul>
  );
};