export const NavbarItemNav = ({ num, text, route, isActive, onClick = () => {} }) => {
  const handleClick = (e) => {
    onClick();
    if (window.location.hash === `#${route}`) {
      e.preventDefault();
      const element = document.getElementById(route);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li className="nav__item">
      <a
        href={`#${route}`}
        className={`nav__link ${isActive ? "nav__link-active" : ""}`}
        role="menuitem"
        onClick={handleClick}
      >
        {num && <span className="nav__num" aria-hidden="true">{num}</span>}
        <span className="nav__text" aria-hidden="true">{text}</span>
      </a>
    </li>
  );
};
