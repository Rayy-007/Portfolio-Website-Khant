import React from "react";
import "./header.css";
import { Me } from "../Image";

import ScrollAnimation from "../utils/ScrollAnimation";

function Header() {
  return (
    <>
      <div id="Home" className="header section-padding-1">
        <div className="container  header-container flex-row">
          <div className="header-left flex-col">
            <ScrollAnimation>
              <h4>Hey, I am Min Khant</h4>
            </ScrollAnimation>
            <ScrollAnimation>
              <h1>
                <span>
                  <span className="title-small">I am </span> Front-End{" "}
                  <span className="title-small">Developer and</span> UI/UX{" "}
                  <span className="title-small">Designer.</span>{" "}
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="small">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
                magnam.
              </p>
            </ScrollAnimation>
            <a className="btn btn-primary" href="#Contact">
              Get In Touch
            </a>
          </div>

          <div className="header-right">
            <ScrollAnimation>
              <img src={Me} alt="Photo of Me" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
