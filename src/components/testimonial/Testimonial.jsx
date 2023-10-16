import React from "react";
import "./testimonial.css";
import person1 from "../../assets/person-1.png";
import stars from "../../assets/stars.png";

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
      image: person1,
    },
    {
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      name: "Dianne Russell",
      job: "Starbucks",
      image: person1,
    },
  ];

  // Creating testimonial cards
  const testimonialsCard = testimonialsData.map((data, index) => (
    <div key={index} className="card">
      <img className="stars" src={stars} alt="Stars" />
      <p className="extra-small">{data.feedback}</p>
      <div className="customer">
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
      <div className=" testimonial-container container section-padding-2">
        <div className="title">
          <h4>Client Feedback</h4>
          <h2>Customer testimonials</h2>
        </div>
        <div className="cards">{testimonialsCard}</div>
      </div>
    </div>
  );
}

export default Testtmonial;
