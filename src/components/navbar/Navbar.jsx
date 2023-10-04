import React from "react";
import { ImCross } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";
import "./navbar.css";
import logo from "../../assets/logo1.png";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const styles = {
    transform: open && `translateX(0%)`,
  };

  return (
    <div className="navbar">
      <a className="logo" href="#home">
        <img src={logo} alt="Logo" />
        <h4>Khant</h4>
      </a>

      <ul style={styles} className="links">
        <li>
          <a className="active" href="#header">
            Home
          </a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
      </ul>

      <div className="cta">
        <button className="btn btn-outline">Contact Me</button>
      </div>

      {/* Mobile Close and Menu */}
      <TiThMenuOutline onClick={() => setOpen(true)} className="menu" />

      {open && <ImCross onClick={() => setOpen(false)} className="close" />}
    </div>
  );
}

export default Navbar;
