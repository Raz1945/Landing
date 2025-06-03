import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Services.css';

export const Services = ({ route }) => {
  const servicesRef = useRef(null);
  const listItemsRef = useRef([]);
  const { t } = useTranslation();

  // Manejo apropiado de los Ref
  useEffect(() => {
    // 1. Guardar los valores actuales en variables
    const servicesNode = servicesRef.current;
    const listItemsNodes = [...listItemsRef.current]; // Copia del array

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // 2. Usar las variables capturadas
    if (servicesNode) observer.observe(servicesNode);
    listItemsNodes.forEach(item => item && observer.observe(item));

    return () => {
      // 3. En el cleanup, usar las variables capturadas
      if (servicesNode) observer.unobserve(servicesNode);
      listItemsNodes.forEach(item => item && observer.unobserve(item));
    };
  }, []);

  // Obtener las tarjetas de servicios desde las traducciones
  const servicesCards = t('services.cards', { returnObjects: true });

  return (
    <section id={route} className="services" ref={servicesRef}>
      <article className="services__content">

        <div className="services__text-wrapper">
          <h1>{t('services.title')}</h1>
          <h2>{t('services.subtitle')}</h2>
        </div>

        <ul className="services__list">
          {servicesCards.map((card, index) => (
            <li
              key={index}
              ref={el => listItemsRef.current[index] = el}
            >
              <strong>{card.icon} {card.title}</strong>
              <p>{card.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};