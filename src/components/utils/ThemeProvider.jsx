import React, { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeValues = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

// const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const color = preference ? "dark" : preference === null ? "dark" : "light";

//   // Define animation variants
//   const containerVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: { opacity: 1, x: 0 },
//   };
{
  /* <motion.div
  initial="hidden"
  animate="visible"
  variants={containerVariants}
  style={{
    background: "rgba(26, 22, 37, 0.199)",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }}
/> */
}
