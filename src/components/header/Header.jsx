import React from "react";
import "./header.css";
import ImageMe from "../../assets/Me-1.png";

function Header() {
  return (
    <div id="Home" className="header section-padding-1">
      <div className="container  header-container flex-row">
        <div className="header-left flex-col">
          <h4>Hey, I am Min Khant</h4>
          <h1>
            <span>
              <span className="title-small">I am </span> Front-End{" "}
              <span className="title-small">Developer and</span> UI/UX{" "}
              <span className="title-small">Designer.</span>{" "}
            </span>
          </h1>

          <p className="small">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            magnam.
          </p>

          <a className="btn btn-primary" href="#Contact">
            Get In Touch
          </a>
        </div>

        <div className="header-right">
          <img src={ImageMe} alt="Photo of Me" />
        </div>
      </div>
    </div>
  );
}

export default Header;
