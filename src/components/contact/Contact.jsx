import React, { useEffect, useState } from "react";
import "./contact.css";
import ScrollAnimation from "../utils/ScrollAnimation";
import { FaViber, FaTelegram } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

function Contact() {
  const [isGiveMeMail, setIsGiveMeMail] = useState(false);

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
        <ScrollAnimation extraAnimation={true}>
          <h4>Feel free to reach out by sending an email.</h4>
          <h2>Contact me</h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className="extra-small">
            Interested in hiring me or collaborating on a project? I look
            forward to hearing from you!
          </p>
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <button
          className="btn btn-outline"
          onClick={() => setIsGiveMeMail((prev) => !prev)}
        >
          Show {isGiveMeMail ? "Contact From" : "Contact Info"}
        </button>
      </ScrollAnimation>

      {isGiveMeMail ? (
        <ScrollAnimation>
          <p className="reach-me">
            <p>
              <ImMail4 /> min384223@gmail.com
            </p>
            <p>
              <FaViber /> | <FaTelegram /> +959791883158
            </p>
          </p>
        </ScrollAnimation>
      ) : (
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
              <ScrollAnimation>
                Why would you like to contact me!
              </ScrollAnimation>
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
      )}
    </div>
  );
}

export default Contact;
