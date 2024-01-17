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
      <MySkill />
      <AboutMe />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
