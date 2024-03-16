import React, { useState } from "react";
import "./project.css";

import { github, arrow } from "../Image";
import ScrollAnimation from "../utils/ScrollAnimation";
import { projectsData } from "./projectsData";

function Project() {
  const [projectTabMenu, setProjectTabMenu] = useState("all");

  const recentProjectsCard = projectsData.slice(0, 2).map((data, index) => (
    <div key={index} className=" recent project-card">
      <img src={data.image} alt="React Project Image" />

      <div className="content">
        <ScrollAnimation>
          <h3>{data.title}</h3>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className="extra-small">{data.description}</p>
        </ScrollAnimation>
        <div className="view-con">
          <a href={data.codeUrl} target="_blank" className="view  flex-row">
            View Sourcecode <img src={arrow} alt="Arrow" />
          </a>
          <a href={data.websiteURl} target="_blank" className="view  flex-row">
            View Website <img src={arrow} alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  ));

  const projectsCard = projectsData.slice(2).map((data, index) => (
    <div key={index} className="project-card">
      <img src={data.image} alt="React Project Image" />
      <div className="content">
        <ScrollAnimation>
          <h3>{data.title}</h3>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className="extra-small">{data.description}</p>
        </ScrollAnimation>
        <div className="view-con">
          <a href={data.codeUrl} target="_blank" className="view  flex-row">
            View Sourcecode <img src={arrow} alt="Arrow" />
          </a>
          <a href={data.websiteURl} target="_blank" className="view  flex-row">
            View Website <img src={arrow} alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  ));

  const calculateTabMoverPosition = () => {
    if (projectTabMenu === "all") return "0%";
    if (projectTabMenu === "website") return "25%";
    if (projectTabMenu === "app") return "50%";
    if (projectTabMenu === "uiux") return "75%";
    return "0%";
  };

  return (
    <div id="Projects" className="projects container section-padding-2">
      <div className="top flex-row">
        <div className="title flex-col">
          <ScrollAnimation extraAnimation={true}>
            <h4>Recent Projects</h4>
            <h2>My Projects</h2>
          </ScrollAnimation>
        </div>
        <a
          className="flex-row git_btn btn-primary"
          href="https://github.com/Rayy-007"
          target="blank"
        >
          <img src={github} alt="Git Hub Logo" />
          <p className="extra-small"> Visit My GitHub</p>
        </a>
      </div>

      <div className="project-tab">
        <ul>
          <div
            className="tab-mover"
            style={{ left: calculateTabMoverPosition() }}
          ></div>
          <li
            className={projectTabMenu === "all" ? "active" : ""}
            onClick={() => setProjectTabMenu("all")}
          >
            All
          </li>
          <li
            className={projectTabMenu === "website" ? "active" : ""}
            onClick={() => setProjectTabMenu("website")}
          >
            Websites
          </li>
          <li
            className={projectTabMenu === "app" ? "active" : ""}
            onClick={() => setProjectTabMenu("app")}
          >
            App
          </li>
          <li
            className={projectTabMenu === "uiux" ? "active" : ""}
            onClick={() => setProjectTabMenu("uiux")}
          >
            UI/UX
          </li>
        </ul>
      </div>

      <div className="projects-con">{recentProjectsCard}</div>
      <div className="projects-con">{projectsCard}</div>
      <a
        href="https://github.com/Rayy-007"
        target="_blank"
        className="btn-outline btn more-projects"
      >
        More Projects
      </a>
    </div>
  );
}

export default Project;

// ? GitHub API Tested
// const [repoDetails, setRepoDetails] = useState(null);
// useEffect(() => {
//   const fetchRepoDetails = async () => {
//     try {
//       const response = await fetch(import.meta.env.VITE_GITHUB_codeUrl);

//       if (!response.ok) {
//         throw new Error("Failed to fetch repository details");
//       }

//       const data = await response.json();
//       setRepoDetails(data);
//       // console.log(data[0].owner.avatar_codeUrl);
//       console.log(data[0].topics);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchRepoDetails();
// }, []);

// Creating the Projects Card
