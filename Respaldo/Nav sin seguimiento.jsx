import { useEffect, useState } from "react";
import { NavbarItemNav } from "./src/components/Navbar/components/NavbarItemNav";
import '../../styles/Navbar.css';

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);


  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "1":
          window.location.hash = "#hero";
          break;
        case "2":
          window.location.hash = "#services";
          break;
        case "3":
          window.location.hash = "#projects";
          break;
        case "4":
          window.location.hash = "#about_me";
          break;
        default:
          break;
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
              <NavbarItemNav route='hero' num='01' text='hero' />
              <NavbarItemNav route='services' num='02' text='servicios' />
              <NavbarItemNav route='projects' num='03' text='projects' />
              <NavbarItemNav route='about_me' num='04' text='sobre mi' />
            </ul>
          </div>
        </div>
      </nav>

      {/* Boton hamburguesa */}
      <button
        aria-label={isMobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        className={`hamburger ${isMobileOpen ? "open" : ""}`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <span aria-hidden="true">✖</span>
        ) : (
          <span aria-hidden="true">☰</span>
        )}
      </button>


      {/* Overlay circular animado */}
      <div className={`mobile__overlay ${isMobileOpen ? "open" : ""}`}>
        <div className={`mobile__menu ${isMobileOpen ? "open" : ""}`}>
          <ul>
            <NavbarItemNav route="hero" text="Hero" onClick={() => setIsMobileOpen(false)} />
            <NavbarItemNav route="services" text="Servicios" onClick={() => setIsMobileOpen(false)} />
            <NavbarItemNav route="projects" text="Projectos" onClick={() => setIsMobileOpen(false)} />
            <NavbarItemNav route="about_me" text="Sobre mí" onClick={() => setIsMobileOpen(false)} />
          </ul>
        </div>
      </div>

    </>
  );
};
