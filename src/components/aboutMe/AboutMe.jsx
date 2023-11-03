import React from "react";
import "./aboutme.css";
import { aboutMe } from "../Image";

function AboutMe() {
  return (
    <div id="AboutMe" className="about flex-row container section-padding-1">
      <div className="about__img flex-row">
        <img src={aboutMe} alt="Photo of Me" />
      </div>

      <div className="about__content">
        <h4>About</h4>
        <h2>About Me</h2>

        <div className="description">
          <p>
            Hi there! I'm Min Khant, a 21-years-old software engineer from
            Mandalay, Myanmar. I'm currently pursuing a Pearson Level 5 Higher
            National Diploma in Computer Sciences at EduCLaaS Academy, Lithan
            University. Prior to that, I successfully completed a Level 3 Higher
            National Certificate in Computer Sciences.
          </p>
          <p className="extra-small">
            <li>
              👨‍💻 Proficient in React.JS, JavaScript, HTML, CSS, Bootstrap,
              jQuery, REST APIs, Firebase, Java, MySQL, RDBMS
            </li>
            <li>
              ✨ Skilled in creating stunning UI/UX design and developing fully
              responsive website
            </li>
            <li>
              🔑 I am a dedicated, driven professional who thrives in
              collaborative environments and can handle pressure effectively. I
              am constantly eager to enhance my skills and stay up to date with
              the latest trends in web development.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
