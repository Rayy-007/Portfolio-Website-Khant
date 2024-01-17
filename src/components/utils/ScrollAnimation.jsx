// ScrollAnimation.js
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation();
  const secondControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      secondControls.start({ left: "100%" });
    }
  }, [controls, inView]);

  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 70 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        animate={secondControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--primary-color)",
          borderRadius: "5px",
          zIndex: 777,
        }}
      />
    </div>
  );
};

export default ScrollAnimation;
