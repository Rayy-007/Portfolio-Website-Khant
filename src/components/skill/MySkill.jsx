import React from "react";
import "./myskill.css";
import {
  uiUX,
  strategy,
  reactLogo,
  frontDev,
  nextjs,
  javascript,
  tailwind,
  jquery,
  sass,
  bootstrap,
  springboot,
  java,
  mysql,
  mongodb,
  firebase,
  figma,
  prototype,
  wireframe,
  fullstack,
} from "../Image";

function MySkill() {
  // Data for Skills Card
  const developerSkills = [
    {
      skill: "Full Stack Development",
      description:
        "I enjoy 🤗 the challenge of crafting both front-end and back-end solutions to create seamless website experiences.",
      image: fullstack,
    },
    {
      skill: "Front End Development",
      description:
        "Proficient in front-end development 😎, I specialize in crafting engaging and responsive user interfaces.",
      image: frontDev,
    },
    {
      skill: "UI & UX Design",
      description:
        "I'm excited 🤩 about opportunities that allow me to bring creativity and user-centric design to the forefront.",
      image: uiUX,
    },
  ];

  const frontendSkills = [
    {
      skill: "Ract Js",
      image: reactLogo,
      level: "97%",
    },
    {
      skill: "Next Js",
      image: nextjs,
      level: "88%",
    },
    {
      skill: "Tailwind",
      image: tailwind,
      level: "80%",
    },
    {
      skill: "Bootstrap",
      image: bootstrap,
      level: "79%",
    },
    {
      skill: "JQuery",
      image: jquery,
      level: "68%",
    },
    {
      skill: "Sass",
      image: sass,
      level: "65%",
    },
  ];

  const uiuxSkills = [
    {
      skill: "Figma",
      image: figma,
      level: "87%",
    },
    {
      skill: "Wireframe",
      image: wireframe,
      level: "80%",
    },
    {
      skill: "Prototype",
      image: prototype,
      level: "84%",
    },
  ];

  const backendSkills = [
    {
      skill: "Springboot",
      image: springboot,
      level: "81%",
    },
    {
      skill: "Java",
      image: java,
      level: "75%",
    },
    {
      skill: "Mysql",
      image: mysql,
      level: "84%",
    },
    {
      skill: "Firebase",
      image: firebase,
      level: "89%",
    },
    {
      skill: "Mongodb",
      image: mongodb,
      level: "61%",
    },
  ];

  // Creating Cards with skills data
  const developerSkillsCards = developerSkills.map((data, index) => (
    <div key={index} className="skill-card flex-col">
      <div className="img flex-row">
        <img src={data.image} alt="skills" />
      </div>
      <h3>{data.skill}</h3>
      <p>{data.description}</p>
    </div>
  ));

  const fronendSkillsCards = frontendSkills.map((data, index) => (
    <div key={index} className="skill-card  flex-col">
      <div className="img flex-row">
        <img src={data.image} alt="skills" />
      </div>
      <h4>{data.skill}</h4>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: data.level }}></div>
        <div className="tooltip">{data.level}</div>
      </div>
    </div>
  ));

  const backendSkillsCards = backendSkills.map((data, index) => (
    <div key={index} className="skill-card  flex-col">
      <div className="img flex-row">
        <img src={data.image} alt="skills" />
      </div>
      <h4>{data.skill}</h4>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: data.level }}></div>
        <div className="tooltip">{data.level}</div>
      </div>
    </div>
  ));

  const uiuxSkillsCards = uiuxSkills.map((data, index) => (
    <div key={index} className="skill-card  flex-col">
      <div className="img flex-row">
        <img src={data.image} alt="skills" />
      </div>
      <h4>{data.skill}</h4>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: data.level }}></div>
        <div className="tooltip">{data.level}</div>
      </div>
    </div>
  ));

  return (
    <>
      <div id="Skills" className="myskill flex-col container section-padding-2">
        <div className="title flex-col">
          <h4>My Skills</h4>
          <h2>My Expertises</h2>
        </div>

        <div className="skills-con flex-row">{developerSkillsCards}</div>
        <div className="small">
          <h4>Frontend Skills</h4>
          <div className="skills-con flex-row">{fronendSkillsCards}</div>
        </div>
        <div className="small">
          <h4>UIUX Skills</h4>
          <div className="skills-con flex-row">{uiuxSkillsCards}</div>
        </div>
        <div className="small">
          <h4>Backend Skills</h4>
          <div className="skills-con flex-row">{backendSkillsCards}</div>
        </div>
      </div>
    </>
  );
}

export default MySkill;
