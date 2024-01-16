import React from "react";
import "./project.css";

import {
  github,
  arrow,
  charity,
  dashboard,
  dobu,
  ecommerce,
  quizzical,
} from "../Image";
import ScrollAnimation from "../../ScrollAnimation";

function Project() {
  // Projects Data for Projects Card
  const projectsData = [
    {
      title: "React Quizzical App",
      description:
        "🤹‍♀️Quizzical App is a dynamic React application that challenges users with a variety of quizzes sourced from an external quiz API.",
      codeUrl: "https://github.com/Rayy-007/React-Quizzical-App-by-Khant",
      websiteURl: "https://react-quizzical-app-khant.netlify.app/",
      image: quizzical,
    },
    {
      title: "DoBu Martial Arts",
      description:
        "🏋️‍♀️DoBu Martial Arts Project is a visually appealing website crafted entirely with my own design.",
      codeUrl: "https://github.com/Rayy-007/DoBu-Martial-arts-project",
      websiteURl: "https://dobumartialarts.netlify.app/",
      image: dobu,
    },
    {
      title: "Dashboard Website",
      description:
        "🎨Dashboard Simple Project is a sleek and modern web application designed as an admin dashboard.",
      codeUrl: "https://github.com/Rayy-007/dashboard-simple-project",
      websiteURl: "https://dashboard-simple-project.netlify.app/",
      image: dashboard,
    },
    {
      title: "Charity Organization Website",
      description:
        "⚡ Full-stack development project for MerryMeal - Charity Organization.",
      codeUrl: "https://github.com/Rayy-007/meals-on-wheel-project",
      websiteURl: "https://charity-organization-by-khant.netlify.app/",
      image: charity,
    },
    {
      title: "Ecommerce Project",
      description:
        "🛒This Ecommerce Project is a comprehensive web application focused on building a responsive ecommerce website.",
      codeUrl: "https://github.com/Rayy-007/Ecommerce-Website-By-Khant",
      websiteURl: "https://multi-page-ecommerce-by-khant.netlify.app/",
      image: ecommerce,
    },
  ];

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

  return (
    <div id="Projects" className="projects container section-padding-2">
      <div className="top flex-row">
        <div className="title flex-col">
          <ScrollAnimation>
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

      <div className="projects-con">{recentProjectsCard}</div>
      <div className="projects-con">{projectsCard}</div>
    </div>
  );
}

export default Project;
