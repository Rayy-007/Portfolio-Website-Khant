import React from "react";
import "./aboutme.css";
import { aboutMe } from "../Image";
import ScrollAnimation from "../utils/ScrollAnimation";

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
              Hi there! I'm Min Khant, a 21-years-old software engineer from
              Mandalay, Myanmar. I'm currently pursuing a Pearson Level 5 Higher
              National Diploma in Computer Sciences at EduCLaaS Academy, Lithan
              University. Prior to that, I successfully completed a Level 3
              Higher National Certificate in Computer Sciences.
            </p>
          </ScrollAnimation>
          <p className="extra-small">
            <ScrollAnimation>
              <li>
                👨‍💻 Proficient in React.JS, JavaScript, HTML, CSS, Bootstrap,
                jQuery, REST APIs, Firebase, Java, MySQL, RDBMS
              </li>
            </ScrollAnimation>
            <ScrollAnimation>
              <li>
                ✨ Skilled in creating stunning UI/UX design and developing
                fully responsive website
              </li>
            </ScrollAnimation>
            <ScrollAnimation>
              <li>
                🔑 I am a dedicated, driven professional who thrives in
                collaborative environments and can handle pressure effectively.
                I am constantly eager to enhance my skills and stay up to date
                with the latest trends in web development.
              </li>
            </ScrollAnimation>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
