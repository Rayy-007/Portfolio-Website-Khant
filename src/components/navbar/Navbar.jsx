import React from "react";
import { ImCross } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";
import "./navbar.css";
import { KhantLogo, KhantLogoText } from "../Image";
import { useTheme } from "../utils/ThemeProvider";

function Navbar() {
  const [open, setOpen] = React.useState(false); // For Mobile Navbar is open or not
  const [active, setActive] = React.useState("#Home"); // For determing the active the Navbar Link
  const { theme, toggleTheme } = useTheme();

  // Opened Navbar Sytling
  const styles = {
    transform: open && `translateX(0%)`,
  };

  //  Navbar Links Name
  const navLinksName = [
    "Home",
    "Skills",
    "AboutMe",
    "Projects",
    "Testimonials",
  ];

  // Creating Dynamic Active Nabar Links
  const navLinks = navLinksName.map((link) => (
    <li key={link}>
      <a
        className={active == `#${link}` ? "active" : ""}
        href={`#${link}`}
        onClick={() => setActive(`#${link}`)}
      >
        {link}
      </a>
    </li>
  ));

  return (
    <div className="nav-con">
      <div className="navbar flex-row container">
        <a className="logo flex-row" href="/">
          <img className="logo-icon" src={KhantLogo} alt="Logo" />
          <img className="logo-text" src={KhantLogoText} alt="KhantLogo" />
        </a>

        <ul style={styles} className="links flex-row">
          {navLinks}
          <div className="theme-toggler">
            <input
              type="checkbox"
              className="toggler"
              id="checkbox"
              onClick={toggleTheme}
            />
            <label htmlFor="checkbox" className="toggler-label">
              <b className="moon">🌕</b>
              <b className="sun">🌑</b>
              <span
                className="ball"
                style={
                  theme === "light"
                    ? { transform: "translateX(0px)" }
                    : { transform: "translateX(24px)" }
                }
              ></span>
            </label>
          </div>
        </ul>

        <div className="cta">
          <a href="#Contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        {/* Mobile Close and Menu */}
        <TiThMenuOutline onClick={() => setOpen(true)} className="menu" />

        {open && <ImCross onClick={() => setOpen(false)} className="close" />}
      </div>
    </div>
  );
}

export default Navbar;
