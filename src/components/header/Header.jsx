import React, { useState } from "react";
import "./header.css";
import { Me } from "../Image";
import { FaViber } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

import ScrollAnimation from "../utils/ScrollAnimation";
import Type from "./Type";

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
                    <Type />
                  </span>
                </h1>
              )}
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="objective small">
                I bring ideas to life through clean and user-friendly
                interfaces. Let's create something extraordinary together!
              </p>
              <div className="reach-me-home">
                <p>
                  <ImMail4 /> min384223@gmail.com
                </p>
                <p>
                  <FaViber /> +959791883158
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="resume">
                <a className="btn btn-primary" href="#Contact">
                  Get In Touch
                </a>
                <a
                  className="btn btn-outline"
                  href="/Resume-Min-Khant.pdf"
                  download="Min_Khant_Resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </ScrollAnimation>
          </div>

          <div className="header-right">
            <ScrollAnimation>
              <img src={Me} alt="Photo of Min Khant" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
