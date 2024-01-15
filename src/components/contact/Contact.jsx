import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div id="Contact" className="contact flex-col container section-padding-2">
      <div className="title">
        <h4>Feel free to reach out by sending an email.</h4>
        <h2>Contact me</h2>
        <p className="extra-small">
          Interested in hiring me or collaborating on a project? I look forward
          to hearing from you!
        </p>
      </div>

      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/.netlify/functions/sendEmail"
        className="form"
      >
        <div className="field">
          <label className="extra-small" htmlFor="first-name">
            First Name
          </label>
          <input required type="text" id="first-name" name="name" />
        </div>

        <div className="field">
          <label className="extra-small" htmlFor="last-name">
            Last Name (Optional)
          </label>
          <input type="text" id="last-name" name="last-name" />
        </div>

        <div className="field">
          <label className="extra-small" htmlFor="email">
            Email
          </label>
          <input required type="email" id="email" name="email" />
        </div>

        <div className="field ">
          <label className="extra-small" htmlFor="topic">
            Why would you like to contact me!
          </label>
          <div className="select-input">
            <select id="topic" name="topic">
              <option value="hire">Interested in hiring me</option>
              <option value="collaborate">Collaborating on a project</option>
              <option value="learn">Learn with me</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label className="extra-small" htmlFor="message">
            What are your thoughts on my website? I'd love to hear your
            feedback, whether it's positive or constructive.
          </label>
          <textarea
            id="message"
            placeholder="I value your opinion!"
            name="message"
          ></textarea>
        </div>

        <input required type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
