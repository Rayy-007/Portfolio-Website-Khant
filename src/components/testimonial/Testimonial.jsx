import React from "react";
import "./testimonial.css";

import { stars, person1, person2, person3 } from "../Image";
import ScrollAnimation from "../utils/ScrollAnimation";

function Testtmonial() {
  // Testimonials Data of User
  const testimonialsData = [
    {
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      name: "Dianne Russell",
      job: "Starbucks",
      image: person1,
    },
    {
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      name: "Dianne Russell",
      job: "Starbucks",
      image: person2,
    },
    {
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      name: "Dianne Russell",
      job: "Starbucks",
      image: person3,
    },
  ];

  // Creating testimonial cards
  const testimonialsCard = testimonialsData.map((data, index) => (
    <div key={index} className="card flex-col">
      <ScrollAnimation>
        <img className="stars" src={stars} alt="Stars" />
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="extra-small">{data.feedback}</p>
      </ScrollAnimation>

      <div className="customer flex-row">
        <ScrollAnimation>
          <img src={data.image} alt="User" />
        </ScrollAnimation>

        <div className="customer-info">
          <ScrollAnimation>
            <h4>{data.name}</h4>
          </ScrollAnimation>
          <ScrollAnimation>
            <p>{data.job}</p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  ));

  return (
    <div id="Testimonials" className="testimonial">
      <div className=" testimonial-container flex-col container section-padding-2">
        <div className="title">
          <ScrollAnimation extraAnimation={true}>
            <h4>Client Feedback</h4>
            <h2>Customer testimonials</h2>
          </ScrollAnimation>
        </div>

        <div className="cards flex-row">{testimonialsCard}</div>
      </div>
    </div>
  );
}

export default Testtmonial;
