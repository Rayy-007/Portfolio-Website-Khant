import React, { useState } from "react";
import "./header.css";
import { Me } from "../Image";

import ScrollAnimation from "../utils/ScrollAnimation";
import TypewriterEffect from "./Typewritereffect";

function Header() {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div id="Home" className="header section-padding-1">
        <div className="container  header-container flex-row">
          <div
            className="header-left flex-col"
            onMouseEnter={() => setIsHover((prev) => !prev)}
          >
            <ScrollAnimation>
              <h4>Hey, I am Min Khant</h4>
            </ScrollAnimation>
            <ScrollAnimation>
              {isHover ? (
                <h1>
                  <span>
                    <span className="title-small">I am </span> Front-End{" "}
                    <span className="title-small">Developer and</span> UI/UX{" "}
                    <span className="title-small">Designer.</span>{" "}
                  </span>
                </h1>
              ) : (
                <h1>
                  <span>
                    <span className="title-small">I am a </span>
                    <TypewriterEffect />
                  </span>
                </h1>
              )}
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="small">
                I bring ideas to life through clean and user-friendly
                interfaces. Let's create something extraordinary together!
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <a className="btn btn-primary" href="#Contact">
                Get In Touch
              </a>
            </ScrollAnimation>
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
