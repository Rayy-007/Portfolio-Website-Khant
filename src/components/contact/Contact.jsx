import React, { useEffect } from "react";
import "./contact.css";
import ScrollAnimation from "../../ScrollAnimation";

function Contact() {
  // Clean the form input
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Reset all forms on the page
      const forms = document.getElementsByTagName("form");
      for (const form of forms) {
        form.reset();
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div id="Contact" className="contact flex-col container section-padding-2">
      <div className="title flex-col">
        <ScrollAnimation>
          <h4>Feel free to reach out by sending an email.</h4>
        </ScrollAnimation>
        <ScrollAnimation>
          <h2>Contact me</h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className="extra-small">
            Interested in hiring me or collaborating on a project? I look
            forward to hearing from you!
          </p>
        </ScrollAnimation>
      </div>

      <form
        name="contact"
        method="post"
        action="https://formspree.io/f/mzbnzvnq"
        className="form"
      >
        <div className="field">
          <label className="extra-small" htmlFor="first-name">
            <ScrollAnimation>First Name</ScrollAnimation>
          </label>

          <input required type="text" id="first-name" name="name" />
        </div>

        <div className="field">
          <label className="extra-small" htmlFor="last-name">
            <ScrollAnimation>Last Name (Optional)</ScrollAnimation>
          </label>
          <input type="text" id="last-name" name="last-name" />
        </div>

        <div className="field">
          <label className="extra-small" htmlFor="email">
            <ScrollAnimation>Email</ScrollAnimation>
          </label>
          <input required type="email" id="email" name="email" />
        </div>

        <div className="field ">
          <label className="extra-small" htmlFor="topic">
            <ScrollAnimation>Why would you like to contact me!</ScrollAnimation>
          </label>
          <div className="select-input">
            <select required id="topic" name="topic">
              <option value="">Selece One</option>
              <option value="hire">Interested in hiring me</option>
              <option value="collaborate">Collaborating on a project</option>
              <option value="learn">Learn with me</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label className="extra-small" htmlFor="message">
            <ScrollAnimation>
              What are your thoughts on my website? I'd love to hear your
              feedback, whether it's positive or constructive.
            </ScrollAnimation>
          </label>
          <textarea
            required
            id="message"
            placeholder="I value your opinion!"
            name="message"
          ></textarea>
        </div>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
