import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div id="Contact" className="contact container section-padding-2">
      <div className="title">
        <h4>Get In Touch</h4>
        <h2>Contact me</h2>
        <p className="extra-small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div className="form">
        <div className="field">
          <label className="extra-small" htmlFor="first-name">
            First Name
          </label>
          <input type="text" id="first-name" />
        </div>
        <div className="field">
          <label className="extra-small" htmlFor="last-name">
            Last Name
          </label>
          <input type="text" id="last-name" />
        </div>
        <div className="field">
          <label className="extra-small" htmlFor="email">
            Email
          </label>
          <input type="text" id="email" />
        </div>
        <div className="field">
          <label className="extra-small" htmlFor="ph-number">
            Phone Number
          </label>
          <input type="text" id="ph-number" />
        </div>
        <div className="field">
          <label className="extra-small" htmlFor="topic">
            Choose a topic
          </label>
          <select id="topic">
            <option value="">Select One..</option>
          </select>
        </div>
        <div className="field">
          <label className="extra-small" htmlFor="message">
            Message
          </label>
          <textarea id="message" placeholder="Type your message..."></textarea>
        </div>
        <div className="field accept">
          <input type="checkbox" id="accept" />
          <label className="extra-small" htmlFor="accept">
            I accept the terms
          </label>
        </div>
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}

export default Contact;
