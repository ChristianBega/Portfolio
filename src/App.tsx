import React from "react";
import Navigation from "./components/Navigation/navigation";
import Hero from "./components/Hero/hero";
import AboutMe from "./components/AboutMe/aboutMe";
import Skills from "./components/Skills/skills";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Skills />
      <AboutMe />
    </>
  );
};

export default App;
