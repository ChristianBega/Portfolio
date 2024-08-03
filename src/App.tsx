import React from "react";
import Navigation from "./components/Navigation/navigation";
import Hero from "./components/Hero/hero";
import AboutMe from "./components/AboutMe/aboutMe";
import Skills from "./components/Skills/skills";
import GridContainer from "./components/GridContainer/gridContainer";
import ProjectCard from "./components/ProjectCard/projectCard";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <GridContainer spacing={2}>
        <Skills />
        <AboutMe />
      </GridContainer>
      <ProjectCard></ProjectCard>
    </>
  );
};

export default App;
