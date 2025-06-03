import { useEffect, useState, useRef } from "react";
import { NavbarItemNav } from "./components/NavbarItemNav";
import '../../styles/Navbar.css';

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const observer = useRef(null);

  // Configuración del Intersection Observer
  useEffect(() => {
    const sections = ['hero', 'services', 'projects', 'about_me'];
    
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detecta cuando el centro del elemento está visible
      threshold: 0
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observar todas las secciones
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  // Manejo de teclado (opcional)
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "1": window.location.hash = "#hero"; break;
        case "2": window.location.hash = "#services"; break;
        case "3": window.location.hash = "#projects"; break;
        case "4": window.location.hash = "#about_me"; break;
        default: break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Navbar Desktop */}
      <nav aria-label="Menú de navegación principal" className="nav">
        <div className='nav__content'>
          <div className="nav__toggle">
            <ul className='nav__menu' id='nav-menu'>
              <NavbarItemNav 
                route='hero' 
                num='01' 
                text='hero' 
                isActive={activeSection === 'hero'} 
              />
              <NavbarItemNav 
                route='services' 
                num='02' 
                text='servicios' 
                isActive={activeSection === 'services'} 
              />
              <NavbarItemNav 
                route='projects' 
                num='03' 
                text='projects' 
                isActive={activeSection === 'projects'} 
              />
              <NavbarItemNav 
                route='about_me' 
                num='04' 
                text='sobre mi' 
                isActive={activeSection === 'about_me'} 
              />
            </ul>
          </div>
        </div>
      </nav>

      {/* Botón hamburguesa */}
      <button
        aria-label={isMobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        className={`hamburger ${isMobileOpen ? "open" : ""}`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? "✖" : "☰"}
      </button>

      {/* Menú móvil */}
      <div className={`mobile__overlay ${isMobileOpen ? "open" : ""}`}>
        <div className={`mobile__menu ${isMobileOpen ? "open" : ""}`}>
          <ul>
            <NavbarItemNav 
              route="hero" 
              text="Hero" 
              isActive={activeSection === 'hero'}
              onClick={() => setIsMobileOpen(false)} 
            />
            <NavbarItemNav 
              route="services" 
              text="Servicios" 
              isActive={activeSection === 'services'}
              onClick={() => setIsMobileOpen(false)} 
            />
            <NavbarItemNav 
              route="projects" 
              text="Projectos" 
              isActive={activeSection === 'projects'}
              onClick={() => setIsMobileOpen(false)} 
            />
            <NavbarItemNav 
              route="about_me" 
              text="Sobre mí" 
              isActive={activeSection === 'about_me'}
              onClick={() => setIsMobileOpen(false)} 
            />
          </ul>
        </div>
      </div>
    </>
  );
};