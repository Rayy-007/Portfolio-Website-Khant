
import { arrow, rhea } from "../Image";
import "../aboutMe/aboutme.css"
import ScrollAnimation from "../utils/ScrollAnimation";
import "./project.css";


function FeaturedProject () {
    return (
        <div  className="about-con flex-row">
        <div className="about__img feature flex-row">
          {/* <ScrollAnimation> */}
            <img src={rhea} alt="Featured Project - Rhea by Min Khant" />
          {/* </ScrollAnimation> */}
        </div>

        <div className="about__content project-card">
          <ScrollAnimation extraAnimation={true}>
            <h4>Rhea.co.in</h4>
            <h3>Corporate Agency Website</h3>
          </ScrollAnimation>

          <div className="description content">
            <ScrollAnimation>
              <p className="about-desc">
                Crafted the entire website design and color theme for Rhea, focusing on modern 
                UI consistency and responsive layout. Delivered a clean, professional look aligned 
                with brand identity.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
                <div className="languages-con">
                    <div className="language-badge">
                        WordPress
                    </div>
                    <div className="language-badge">
                        UI/UX Design
                    </div>
                    <div className="language-badge">
                        Responsive Design
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation>
                <div className="view-con">
                    <a
                        href="https://rhea.co.in/"
                        target="_blank"
                        className="view  flex-row"
                        >
                        View Website <img src={arrow} alt="Arrow" />
                    </a>
                </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
}

export default FeaturedProject;