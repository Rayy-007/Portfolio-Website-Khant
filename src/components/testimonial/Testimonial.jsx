import React from "react";
import "./testimonial.css";

import { stars, person1, person2, person3 } from "../Image";

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
      <img className="stars" src={stars} alt="Stars" />

      <p className="extra-small">{data.feedback}</p>

      <div className="customer flex-row">
        <img src={data.image} alt="User" />
        <div className="customer-info">
          <h4>{data.name}</h4>
          <p>{data.job}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div id="Testimonials" className="testimonial">
      <div className=" testimonial-container flex-col container section-padding-2">
        <div className="title">
          <h4>Client Feedback</h4>
          <h2>Customer testimonials</h2>
        </div>

        <div className="cards flex-row">{testimonialsCard}</div>
      </div>
    </div>
  );
}

export default Testtmonial;
