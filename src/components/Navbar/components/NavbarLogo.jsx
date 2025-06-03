import { NavLink } from "react-router-dom";

export const NavbarLogo = ({ text, img }) => {
  return (
    <>
      <div>
        <NavLink
          to={`/`}
          className="nav__logo"
        >
          <picture>
            <img className="nav__avatar" src={img} width="48" height="48" alt="Profile Image"></img>
          </picture>
          <span className='nav__title'>{text}</span>
        </NavLink>
      </div>
    </>
  );
}
