import React from "react";
import "./education.css";

import { stars, Lithan, Scrimba, Yadanabon, stars3, stars4 } from "../Image";
import ScrollAnimation from "../utils/ScrollAnimation";

function Education() {
  // Creating education cards
  const educationsCard = educationData.map((data, index) => (
    <div key={index} className="card flex-col education">
      <ScrollAnimation>
        <img className="stars" src={data.star} alt="Stars" />
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="edu">
          <p className="extra-small">Major - {data.study}</p>
          <p className="extra-small">Start date - {data.start}</p>
          <p className="extra-small">End date - {data.end}</p>
        </div>
      </ScrollAnimation>

      <div className="education flex-row">
        <ScrollAnimation>
          <img src={data.img} alt="User" />
        </ScrollAnimation>

        <div className="education-info">
          <ScrollAnimation>
            <h4>{data.name}</h4>
          </ScrollAnimation>
          <ScrollAnimation>
            <p>{data.study}</p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  ));

  return (
    <div id="Education" className="education">
      <div className=" education-container flex-col container section-padding-2">
        <div className="title">
          <ScrollAnimation extraAnimation={true}>
            <h4>My Education</h4>
            <h2>Educations</h2>
          </ScrollAnimation>
        </div>

        <div className="cards flex-row">{educationsCard}</div>
      </div>
    </div>
  );
}

export default Education;

const educationData = [
  {
    name: "EduClaaS Academy | Lithan",
    study: " Pearson BTEC Higher National Diploma (HND) in Computer Science",
    // start: "20.1.2022",
    start: "2022",
    end: "2025",
    img: Lithan,
    star: stars4,
  },
  {
    name: "Scrimba Academy - Self-paced online bootcamp",
    study: "Frontend Developer Career Path",
    // start: "26.2022",
    // end: "10.12.2023",
    start: "2022",
    end: "2023",
    img: Scrimba,
    star: stars,
  },
  {
    name: "Yadanabon University",
    study: "Bachelor of Arts (BA) in English",
    // start: "16.6.2018",
    start: "2018",
    end: "2025",
    img: Yadanabon,
    star: stars4,
  },
];
