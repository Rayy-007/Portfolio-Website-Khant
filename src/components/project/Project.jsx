import React, { useState, useRef } from "react";
import "./project.css";

import { github, arrow } from "../Image";
import ScrollAnimation from "../utils/ScrollAnimation";
import { projectsData } from "./projectsData";

function Project() {
  const [projectTabMenu, setProjectTabMenu] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(9);
  const [loading, setLoading] = useState(false);
  const projectSectionRef = useRef(null);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
      setLoading(false);
    }, 800);
  };
  const handleHide = () => {
    setVisibleProjects(6);
    projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProjectsData = projectsData.filter((projectData) => {
    if (projectTabMenu === "all") return true;
    return projectTabMenu === projectData.type;
  });

  const projectsCard = filteredProjectsData
    .slice(0, visibleProjects)
    .map((data, index) => (
      <div key={index} className="project-card">
        <img src={data.image} alt="React Project Image" />
        <div className="content">
          <ScrollAnimation>
            <h3>{data.title}</h3>
          </ScrollAnimation>
          <ScrollAnimation>
            <p className="extra-small">{data.description}</p>
            <div className="languages-con">
              {data.languages.map((language, index) => (
                <div key={index} className="language-badge">
                  {language}
                </div>
              ))}
            </div>
          </ScrollAnimation>
          {data.type !== "uiux" && (
            <div className="view-con">
              {
                data.codeUrl && 
                <a href={data.codeUrl} target="_blank" className="view  flex-row">
                View Sourcecode <img src={arrow} alt="Arrow" />
              </a>
              }
              {
                data.websiteURL && 
                <a
                href={data.websiteURL}
                target="_blank"
                className="view  flex-row"
                >
                  View Website <img src={arrow} alt="Arrow" />
                </a>
              }
            </div>
          )}
        </div>
      </div>
    ));

  const calculateTabMoverPosition = () => {
    if (projectTabMenu === "all") return "0%";
    if (projectTabMenu === "bhea") return "20%";
    if (projectTabMenu === "website") return "40%";
    if (projectTabMenu === "app") return "60%";
    if (projectTabMenu === "uiux") return "80%";
    return "0%";
  };

  return (
    <div
      ref={projectSectionRef}
      id="Projects"
      className="projects container section-padding-2"
    >
      <div className="top flex-row">
        <div className="title flex-col">
          <ScrollAnimation extraAnimation={true}>
            <h4>Projects</h4>
            <h2>My Experiences & Projects</h2>
            <p className="extra-small">Successfully built and launched 10+ complete websites across diverse industries.</p>
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
            className={projectTabMenu === "bhea" ? "active" : ""}
            onClick={() => setProjectTabMenu("bhea")}
          >
            Projects
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

      <div className="projects-con">{projectsCard}</div>
      {visibleProjects < filteredProjectsData.length ? (
        <button
          onClick={handleLoadMore}
          className="btn-outline btn more-projects"
        >
          {loading ? "Loading..." : "Load More Projects"}
        </button>
      ) : (
        <button onClick={handleHide} className="btn-outline btn more-projects">
          Hide Projects
        </button>
      )}
    </div>
  );
}

export default Project;

{
  /* <a
href="https://github.com/Rayy-007"
target="_blank"
className="btn-outline btn more-projects"
>
More Projects
</a> */
}
// ? Recent Projects TOP TWO
// <div className="projects-con">{recentProjectsCard}</div>
// const recentProjectsCard = filteredProjectsData
// .slice(0, 2)
// .map((data, index) => (
//   <div key={index} className=" recent project-card">
//     <img src={data.image} alt="React Project Image" />

//     <div className="content">
//       <ScrollAnimation>
//         <h3>{data.title}</h3>
//       </ScrollAnimation>
//       <ScrollAnimation>
//         <p className="extra-small">{data.description}</p>
//         <div className="languages-con">
//           {data.languages.map((language) => (
//             <div className="language-badge">{language}</div>
//           ))}
//         </div>
//       </ScrollAnimation>
//       <div className="view-con">
//         <a href={data.codeUrl} target="_blank" className="view  flex-row">
//           View Sourcecode <img src={arrow} alt="Arrow" />
//         </a>
//         <a
//           href={data.websiteURl}
//           target="_blank"
//           className="view  flex-row"
//         >
//           View Website <img src={arrow} alt="Arrow" />
//         </a>
//       </div>
//     </div>
//   </div>
// ));

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
