import React from "react";
import {
  Navbar,
  Header,
  MySkill,
  AboutMe,
  Project,
  Testimonial,
  Contact,
  Footer,
} from "./components/index";
import { useTheme } from "./components/utils/ThemeProvider";

function App() {
  const { theme } = useTheme();
  return (
    <div data-theme={theme === "light" ? "light" : "dark"}>
      <Navbar />
      <Header />
      <div className="normal-bg">
        <MySkill />
        <AboutMe />
        <Project />
      </div>
      <Testimonial />
      <div className="normal-bg">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
