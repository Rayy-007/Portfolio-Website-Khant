import React from "react";
import "./navbar.css";
import logo from "../../assets/logo1.png";

function Navbar() {
  return (
    <div className="navbar">
      <a className="logo" href="#home">
        <img src={logo} alt="Logo" />
        <h4>Khant</h4>
      </a>

      <ul className="links">
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
    </div>
  );
}

export default Navbar;
