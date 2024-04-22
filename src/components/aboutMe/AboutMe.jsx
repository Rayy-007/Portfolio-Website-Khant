import React from "react";
import "./aboutme.css";
import { aboutMe } from "../Image";
import ScrollAnimation from "../utils/ScrollAnimation";
import AgeCounter from "./AgeCounter";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

function AboutMe() {
  return (
    <div id="AboutMe" className="about flex-row container section-padding-1">
      <div className="about__img flex-row">
        <ScrollAnimation>
          <img src={aboutMe} alt="Photo of Me" />
        </ScrollAnimation>
      </div>

      <div className="about__content">
        <ScrollAnimation extraAnimation={true}>
          <h4>About</h4>
          <h2>About Me</h2>
        </ScrollAnimation>

        <div className="description">
          <ScrollAnimation>
            <p>
              Hey, I'm Min Khant, a <AgeCounter /> software engineer from
              Mandalay, Myanmar. Currently pursuing a Pearson Level 5 Higher
              National Diploma in Computer Sciences at EduCLaaS Academy, Lithan
              University, I'm on a journey to transform ideas into digital
              experiences.
            </p>
          </ScrollAnimation>
          <p className="extra-small">
            <ScrollAnimation>
              <li>
                🚀 Proficient in ReactJS, NextJs, TypeScirpt, JavaScript,
                Tailwind, Bootstrap, jQuery, REST APIs, Firebase, Java, MySQL,
                MongoDb
              </li>
            </ScrollAnimation>
            <ScrollAnimation>
              <li>
                💻 Skilled in creating stunning UI/UX design and developing
                fully responsive website
              </li>
            </ScrollAnimation>
            <ScrollAnimation>
              <li>
                🌟 Beyond the code, I'm a dedicated professional thriving in
                collaborative environments. I thrive under pressure, constantly
                seeking to enhance my skills and stay ahead in the dynamic world
                of web development.
              </li>
            </ScrollAnimation>
          </p>
        </div>
        <ScrollAnimation>
          <div className="cta-about">
            <a
              href="https://www.linkedin.com/in/min-khant-0a0546232/"
              className="btn btn-primary more-about"
              target="_blank"
            >
              <FaLinkedin className="linkedin-icon" />
              More About Me
            </a>
            <a
              href="https://www.youtube.com/watch?v=zGPVPszalTA&t=13s"
              className="btn btn-outline more-about "
              target="_blank"
            >
              <FaYoutube />
              Introduction Video
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default AboutMe;
