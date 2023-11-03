import React from "react";
import "./project.css";

import { github, project, arrow } from "../Image";

function Project() {
  // Projects Data for Projects Card
  const projectsData = [
    {
      title: "React Quizzical App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      url: "https://github.com/Rayy-007/React-Quizzical-App-by-Khant",
      image: project,
    },
    {
      title: "React Quizzical App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      url: "https://github.com/Rayy-007/React-Quizzical-App-by-Khant",
      image: project,
    },
    {
      title: "React Quizzical App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      url: "https://github.com/Rayy-007/React-Quizzical-App-by-Khant",
      image: project,
    },
  ];

  // Creating the Projects Card
  const projectsCard = projectsData.map((data, index) => (
    <div key={index} className="project-card">
      <img src={data.image} alt="React Project Image" />
      <div className="content">
        <h3>{data.title}</h3>
        <p className="extra-small">{data.description}</p>
        <a href={data.url} className="flex-row">
          View in Githu <img src={arrow} alt="Arrow" />
        </a>
      </div>
    </div>
  ));

  return (
    <div id="Projects" className="projects container section-padding-2">
      <div className="top flex-row">
        <div className="title flex-col">
          <h4>Recent Projects</h4>
          <h2>My Projects</h2>
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

      <div className="projects-con">{projectsCard}</div>
    </div>
  );
}

export default Project;
