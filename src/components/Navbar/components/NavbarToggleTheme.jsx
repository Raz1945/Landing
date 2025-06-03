export const NavbarToggleTheme = () => {
  //...
  return (
    <>
      <button className="iconbtn nav__themebtn" aria-expanded="true" aria-controls="theme-menu">
        {/* <span className="sr-only">toggle theme panel</span> */}
        <span className='nav__toggle-icon'>
          <img src="src\assets\mode.svg" alt="" />
        </span>
      </button>
    </>
  );
}
