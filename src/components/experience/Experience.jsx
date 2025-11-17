import './experience.css'
import ScrollAnimation from "../utils/ScrollAnimation";

export default function Experience() {

  return (
    <section id="Experience" className="experience flex-col container section-padding-2">
        <div className="title">
          <ScrollAnimation extraAnimation={true}>
            <h4>My Experience</h4>
            <h2>Experience</h2>
          </ScrollAnimation>
        </div>

      <div className="timeline">
        {/* 1 */}
        <div className="exp-item">
            <div className="exp-date">May 2024 – Present</div>
            <div className="exp-role">Software Engineer</div>
            <div className="exp-company">Bhea Technologies Pte Ltd</div>
            <ul className="exp-details">
                <li>Engineered and customized full‑stack client projects using WordPress, PHP, and JavaScript.</li>
                <li>Developed and integrated custom CRM (SugarCRM) with complex automation and API workflows.</li>
            </ul>
        </div>

        {/* 2 */}
        <div className="exp-item">
          <div className="exp-date">Feb 2023 – June 2023</div>
          <div className="exp-role">WordPress Developer</div>
          <div className="exp-company">Soloasiax Travel Blog Website</div>
          <ul className="exp-details">
            <li>Designed and developed a responsive travel blogging website using WordPress.</li>
            <li>Delivered high‑quality UI/UX with strong client satisfaction.</li>
          </ul>
        </div>

        {/* 3 */}
        <div className="exp-item">
          <div className="exp-date">Feb 2024 – May 2024</div>
          <div className="exp-role">Frontend Developer Intern</div>
          <div className="exp-company">Myanmar Cyber Youths Organization</div>
          <ul className="exp-details">
            <li>Developed responsive frontend layouts and integrated APIs using React, Next.js, and TypeScript.</li>
          </ul>
        </div>

        {/* 4 */}
        <div className="exp-item">
          <div className="exp-date">March 2024 – Present</div>
          <div className="exp-role">Frontend Development Tutor</div>
          <div className="exp-company">Skills Hub Academy</div>
          <ul className="exp-details">
            <li>Teaching frontend development: HTML, CSS, JS, TypeScript, React, Tailwind, Bootstrap, Git, and GitHub.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}