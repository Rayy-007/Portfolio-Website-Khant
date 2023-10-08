import React from "react";
import "./myskill.css";
import frontEnd from "../../assets/front-dev.png";
import uiUX from "../../assets/ui-ux.png";
import strategy from "../../assets/strategy.png";
import reactJS from "../../assets/react-logo.png";

function MySkill() {
  const skillsData = [
    {
      skill: "Front End Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,ea adipisicing elit. Reprehenderit,ea!",
      image: frontEnd,
    },
    {
      skill: "UI & UX Design",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,ea adipisicing elit. Reprehenderit,ea!",
      image: uiUX,
    },
    {
      skill: "React JS Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,ea adipisicing elit. Reprehenderit,ea!",
      image: reactJS,
    },
    {
      skill: "Strategy & Direction",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,ea adipisicing elit. Reprehenderit,ea!",
      image: strategy,
    },
  ];

  const skillCards = skillsData.map((data, index) => (
    <div key={index} className="skill-card">
      <div className="img">
        <img src={data.image} alt="skills" />
      </div>
      <h3>{data.skill}</h3>
      <p className="extra-small">{data.description}</p>
    </div>
  ));

  return (
    <div id="Skills" className="myskill container section-padding-2">
      <div className="title">
        <h4>My Skills</h4>
        <h2>My Expertises</h2>
      </div>

      <div className="skills-con">{skillCards}</div>
    </div>
  );
}

export default MySkill;
