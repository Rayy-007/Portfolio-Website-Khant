import React from "react";
import "./myskill.css";
import {
  uiUX,
  frontDev,
  figma,
  prototype,
  wireframe,
  fullstack,
} from "../Image";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FaJava, FaNpm } from "react-icons/fa";
import {
  SiBootstrap,
  SiBun,
  SiDaisyui,
  SiFirebase,
  SiGit,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWebpack,
  SiWordpress,
} from "react-icons/si";

function MySkill() {
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
        <ScrollAnimation>{data.image}</ScrollAnimation>
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
        <ScrollAnimation>{data.image}</ScrollAnimation>
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

  const toolsSkillsCards = tools.map((data, index) => (
    <div key={index} className="skill-card  flex-col">
      <div className="img flex-row">
        <ScrollAnimation>{data.image}</ScrollAnimation>
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
        <div className="small">
          <ScrollAnimation>
            <h4>Development Tools</h4>
          </ScrollAnimation>
          <div className="skills-con flex-row">{toolsSkillsCards}</div>
        </div>
      </div>
    </>
  );
}

export default MySkill;

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
    image: <SiReact />,
    level: "99%",
  },
  {
    skill: "Next Js",
    image: <SiNextdotjs />,
    level: "80%",
  },
  {
    skill: "Tailwind",
    image: <SiTailwindcss />,
    level: "80%",
  },
  {
    skill: "TypeScript",
    image: <SiTypescript />,
    level: "80%",
  },
  {
    skill: "Bootstrap",
    image: <SiBootstrap />,
    level: "70%",
  },
  {
    skill: "Daisy UI",
    image: <SiDaisyui />,
    level: "70%",
  },
  {
    skill: "JQuery",
    image: <SiJquery />,
    level: "60%",
  },
];

const uiuxSkills = [
  {
    skill: "Figma",
    image: figma,
    level: "80%",
  },
  {
    skill: "Wireframe",
    image: wireframe,
    level: "80%",
  },
  {
    skill: "Prototype",
    image: prototype,
    level: "80%",
  },
];

const backendSkills = [
  {
    skill: "Springboot",
    image: <SiSpring />,
    level: "80%",
  },
  {
    skill: "Java",
    image: <FaJava />,
    level: "80%",
  },
  {
    skill: "Mysql",
    image: <SiMysql />,
    level: "80%",
  },
  {
    skill: "Firebase",
    image: <SiFirebase />,
    level: "90%",
  },
  {
    skill: "Mongodb",
    image: <SiMongodb />,
    level: "70%",
  },
];

const tools = [
  {
    skill: "Git & GitHub",
    image: <SiGit />,
    level: "90%",
  },
  {
    skill: "Netlify",
    image: <SiNetlify />,
    level: "90%",
  },
  {
    skill: "Vercel",
    image: <SiVercel />,
    level: "80%",
  },
  {
    skill: "Vite",
    image: <SiVite />,
    level: "90%",
  },
  {
    skill: "Webpack",
    image: <SiWebpack />,
    level: "80%",
  },
  {
    skill: "Bun",
    image: <SiBun />,
    level: "70%",
  },
  {
    skill: "NPM",
    image: <FaNpm />,
    level: "80%",
  },
  {
    skill: "Wordpress",
    image: <SiWordpress />,
    level: "80%",
  },
];
