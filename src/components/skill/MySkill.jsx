import React from "react";
import "./myskill.css";
import {
  uiUX,
  reactLogo,
  frontDev,
  nextjs,
  javascript,
  typescript,
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
import ScrollAnimation from "../utils/ScrollAnimation";

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
        "Proficient in front-end development 🚀, I specialize in crafting engaging and responsive user interfaces.",
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
      skill: "TypeScript",
      image: typescript,
      level: "85%",
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
        <ScrollAnimation>
          <img src={data.image} alt="skills" />
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <h3>{data.skill}</h3>
      </ScrollAnimation>
      <ScrollAnimation>
        <p>{data.description}</p>
      </ScrollAnimation>
    </div>
  ));

  const fronendSkillsCards = frontendSkills.map((data, index) => (
    <div key={index} className="skill-card  flex-col">
      <div className="img flex-row">
        <ScrollAnimation>
          <img src={data.image} alt="skills" />
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <h4>{data.skill}</h4>
      </ScrollAnimation>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: data.level }}></div>
        <div className="tooltip">{data.level}</div>
      </div>
    </div>
  ));

  const backendSkillsCards = backendSkills.map((data, index) => (
    <div key={index} className="skill-card  flex-col">
      <div className="img flex-row">
        <ScrollAnimation>
          <img src={data.image} alt="skills" />
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <h4>{data.skill}</h4>
      </ScrollAnimation>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: data.level }}></div>
        <div className="tooltip">{data.level}</div>
      </div>
    </div>
  ));

  const uiuxSkillsCards = uiuxSkills.map((data, index) => (
    <div key={index} className="skill-card  flex-col">
      <div className="img flex-row">
        <ScrollAnimation>
          <img src={data.image} alt="skills" />
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <h4>{data.skill}</h4>
      </ScrollAnimation>
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
          <ScrollAnimation extraAnimation={true}>
            <h4>My Skills</h4>
            <h2>My Expertise</h2>
          </ScrollAnimation>
        </div>

        <div className="skills-con flex-row">{developerSkillsCards}</div>
        <div className="small">
          <ScrollAnimation>
            <h4>Frontend Skills</h4>
          </ScrollAnimation>
          <div className="skills-con flex-row">{fronendSkillsCards}</div>
        </div>
        <div className="small">
          <ScrollAnimation>
            <h4>UIUX Skills</h4>
          </ScrollAnimation>
          <div className="skills-con flex-row">{uiuxSkillsCards}</div>
        </div>
        <div className="small">
          <ScrollAnimation>
            <h4>Backend Skills</h4>
          </ScrollAnimation>
          <div className="skills-con flex-row">{backendSkillsCards}</div>
        </div>
      </div>
    </>
  );
}

export default MySkill;
