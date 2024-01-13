import React from "react";
import "./myskill.css";

import { uiUX, strategy, reactLogo, frontDev } from "../Image";

function MySkill() {
  // Data for Skills Card
  const developerSkills = [
    {
      skill: "Full Stack Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,ea adipisicing elit. Reprehenderit,ea!",
      image: frontDev,
    },
    {
      skill: "Front End Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,ea adipisicing elit. Reprehenderit,ea!",
      image: frontDev,
    },
    {
      skill: "UI & UX Design",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,ea adipisicing elit. Reprehenderit,ea!",
      image: uiUX,
    },
  ];

  const frontendSkills = [
    {
      skill: "Front End Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,ea adipisicing elit. Reprehenderit,ea!",
      image: frontDev,
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
      image: reactLogo,
    },
    {
      skill: "Strategy & Direction",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,ea adipisicing elit. Reprehenderit,ea!",
      image: strategy,
    },
  ];

  // Creating Cards with skills data
  const developerSkillsCards = developerSkills.map((data, index) => (
    <div key={index} className="skill-card flex-col">
      <div className="img flex-row">
        <img src={data.image} alt="skills" />
      </div>
      <h3>{data.skill}</h3>
      <p className="extra-small">{data.description}</p>
    </div>
  ));
  const fronendSkillsCards = frontendSkills.map((data, index) => (
    <div key={index} className="skill-card flex-col">
      <div className="img flex-row">
        <img src={data.image} alt="skills" />
      </div>
      <h3>{data.skill}</h3>
      <p className="extra-small">{data.description}</p>
    </div>
  ));

  return (
    <div id="Skills" className="myskill flex-col container section-padding-2">
      <div className="title flex-col">
        <h4>My Skills</h4>
        <h2>My Expertises</h2>
      </div>

      <div className="skills-con flex-row">{developerSkillsCards}</div>
      <div className="skills-con flex-row">{fronendSkillsCards}</div>
    </div>
  );
}

export default MySkill;
