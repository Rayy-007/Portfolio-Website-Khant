import React, { useState, useEffect } from "react";

const Type = () => {
  const [text, setText] = useState("");
  const phrases = [
    "Frront-End Developer",
    "UII/UX Designer",
    "Paassionate Coder",
  ];
  const speed = 100; // Adjust the typing speed (in milliseconds)

  useEffect(() => {
    let index = 0;
    let charIndex = 0;

    const type = () => {
      if (index === phrases.length) {
        // Loop back to the first phrase
        index = 0;
      }

      if (charIndex < phrases[index].length) {
        setText((prevText) => prevText + phrases[index].charAt(charIndex));
        charIndex += 1;
        setTimeout(type, speed);
      } else {
        // Delay before erasing
        setTimeout(erase, 1000);
      }
    };

    const erase = () => {
      if (charIndex >= 0) {
        setText((prevText) => prevText.slice(0, -1));
        charIndex -= 1;
        setTimeout(erase, speed / 2);
      } else {
        // Move to the next phrase
        index += 1;
        setTimeout(type, speed / 2);
      }
    };

    // Start typing on mount
    type();

    // Clean up on unmount
    return () => {
      setText("");
      clearInterval();
    };
  }, []);

  return <span>{text}</span>;
};

export default Type;
