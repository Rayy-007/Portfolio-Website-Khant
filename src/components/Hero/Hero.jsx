import { minKhantImage, shadow,blurBackground, pillarShape, textBox, pillarShapteLight } from "../Image";
import './hero.css';
import ScrollAnimation from "../utils/ScrollAnimation";
import { FaViber } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import SplitText from "./SplitText";
import { useEffect, useRef } from "react";
import gsap from "gsap";


export default function Hero({theme}) {
    const softwareRef = useRef(null);
    const frontendRef = useRef(null);
    const smallTitleRef = useRef(null);
    const meRef = useRef(null);
    const textBoxRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
      gsap.fromTo(
        softwareRef.current,
        { x: 100, opacity: 0 },  
        { x: 0, opacity: 1, duration: 2, ease: "power3.out" }
      );

      gsap.fromTo(
        frontendRef.current,
        { x: -100, opacity: 0 },    
        { x: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        smallTitleRef.current,
        { y: -100, opacity: 0 },    
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        meRef.current,
        { y: 100, opacity: 0.8, scale: 0.8, filter: "blur(8px)" },    
        { y: 0, opacity: 1, duration: 0.8, scale: 1, filter: "blur(0px)", ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        textBoxRef.current,
        { y: 100, opacity: 0 },    
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        arrowRef.current,
        { x: 100, opacity: 0 },    
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }, []);

  return (
    <div id="Home" className="Hero">
      <section  className="hero-con section-padding-1">

          <div className="mid-con">
            <h3 ref={smallTitleRef} className="hero-small-title">IAM</h3>
            {/* <h1 className="hero-title">MIN KHANT</h1> */}
            <SplitText
              text="MIN KHANT"
              className=" hero-title text-2xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <img ref={meRef} className="hero-img" src={minKhantImage}  alt="Photo of Min Khant" />
            {/* <img className="arrow" src={arrowShape} alt="Arrow Shape" /> */}
            <svg
                ref={arrowRef}
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
            <h4 ref={softwareRef} className="software">Software Engineer</h4>
            <h4 ref={frontendRef}  className="frontend">Frontend Developer</h4>
            <img className="shadow" src={shadow} alt="Shadow" />  
          </div>
            {
              theme === "dark" ? 
                <img className="pillars" src={pillarShape} alt="Pillar Shape" /> : 
                <img className="pillars" src={pillarShapteLight} alt="Pillar Shape" />
              }
              {/* <img className="pillars" src={pillarShapteLight} alt="Pillar Shape" /> */}
            <img ref={textBoxRef} className="text-box" src={textBox} alt="Meet the developer - Min Khant" />
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