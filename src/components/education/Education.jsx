import React from "react";
import "./education.css";

import { stars, Lithan, Scrimba, Yadanabon, stars3, stars4 } from "../Image";
import ScrollAnimation from "../utils/ScrollAnimation";

function Education() {
  // Creating testimonial cards
  const testimonialsCard = educationData.map((data, index) => (
    <div key={index} className="card flex-col education">
      <ScrollAnimation>
        <img className="stars" src={data.star} alt="Stars" />
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="edu">
          <p className="extra-small">Major - {data.study}</p>
          <p className="extra-small">Start date - {data.start}</p>
          <p className="extra-small">End date -{data.end}</p>
        </div>
      </ScrollAnimation>

      <div className="customer flex-row">
        <ScrollAnimation>
          <img src={data.img} alt="User" />
        </ScrollAnimation>

        <div className="customer-info">
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
    <div id="Education" className="testimonial">
      <div className=" testimonial-container flex-col container section-padding-2">
        <div className="title">
          <ScrollAnimation extraAnimation={true}>
            <h4>My Education</h4>
            <h2>Educations</h2>
          </ScrollAnimation>
        </div>

        <div className="cards flex-row">{testimonialsCard}</div>
      </div>
    </div>
  );
}

export default Education;

const educationData = [
  {
    name: "EduClaaS Academy | Lithan",
    study: "Computer Science",
    start: "20.1.2022",
    end: "Ongoing",
    img: Lithan,
    star: stars4,
  },
  {
    name: "Scrimba Academy",
    study: "Frontend Development",
    start: "26.2.2023",
    end: "10.12.2023",
    img: Scrimba,
    star: stars,
  },
  {
    name: "Yadanabon University",
    study: "English Specialist",
    start: "16.6.2018",
    end: "Ongoing",
    img: Yadanabon,
    star: stars3,
  },
];
