import { minKhantImage, shadow,blurBackground, pillarShape, textBox, pillarShapteLight } from "../Image";
import './hero.css';
import ScrollAnimation from "../utils/ScrollAnimation";
import { FaViber } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

export default function DeveloperIntro({theme}) {
  return (
    <div id="Home" className="Hero">
      <section  className="hero-con section-padding-1">

          <div className="mid-con">
            <h3 className="hero-small-title">IAM</h3>
            <h1 className="hero-title">MIN KHANT</h1>
            <img className="hero-img" src={minKhantImage}  alt="Photo of Min Khant" />
            {/* <img className="arrow" src={arrowShape} alt="Arrow Shape" /> */}
            <svg
                className="arrow"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 84 C35 40, 80 20, 105 15"
                  stroke="currentColor"
                  stroke-width="6"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M9 75 L10 90 L30 85"
                  stroke="currentColor"
                  stroke-width="6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
            </svg>
            <h4 className="software">Software Engineer</h4>
            <h4 className="frontend">Frontend Developer</h4>
            <img className="shadow" src={shadow} alt="Shadow" />  
          </div>
            {
              theme === "dark" ? 
                <img className="pillars" src={pillarShape} alt="Pillar Shape" /> : 
                <img className="pillars" src={pillarShapteLight} alt="Pillar Shape" />
              }
              {/* <img className="pillars" src={pillarShapteLight} alt="Pillar Shape" /> */}
            <img className="text-box" src={textBox} alt="Meet the developer - Min Khant" />
      </section>
      <section className="hero-cta flex-col section-padding-1 ">
          {/* <img className="shadow bottom" src={shadow} alt="Shadow" /> */}
          <ScrollAnimation>
            <p className="objective small">
              I bring ideas to life through clean and user-friendly
              interfaces. Let's create something extraordinary together!
            </p>
            <div className="reach-me-home">
              <p>
                <ImMail4 /> min384223@gmail.com
              </p>
              <p>
                <FaViber /> +959791883158
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="resume">
              <a className="btn btn-primary" href="#Contact">
                Get In Touch
              </a>
              <a
                className="btn btn-outline"
                href="/MinKhant-Professional-Resume.pdf"
                download="Min_Khant_Professional_Resume.pdf"
              >
                Download Resume
              </a>
            </div>
          </ScrollAnimation>
      </section>
    </div>

  );
}