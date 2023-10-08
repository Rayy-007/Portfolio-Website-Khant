import React from "react";
import { ImCross } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";
import "./navbar.css";
import logo from "../../assets/logo1.png";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("#Home");

  const styles = {
    transform: open && `translateX(0%)`,
  };

  const navLinksName = [
    "Home",
    "Skills",
    "AboutMe",
    "Projects",
    "Testimonials",
  ];

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
      <div className="navbar container">
        <a className="logo" href="#home">
          <img src={logo} alt="Logo" />
          <h4>Khant</h4>
        </a>

        <ul style={styles} className="links">
          {navLinks}
        </ul>

        <div className="cta">
          <a className="btn btn-outline">Contact Me</a>
        </div>

        {/* Mobile Close and Menu */}
        <TiThMenuOutline onClick={() => setOpen(true)} className="menu" />

        {open && <ImCross onClick={() => setOpen(false)} className="close" />}
      </div>
    </div>
  );
}

export default Navbar;
