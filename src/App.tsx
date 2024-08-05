import React from "react";
import Navigation from "./components/Navigation/navigation";
import Hero from "./components/Hero/hero";
import AboutMe from "./components/AboutMe/aboutMe";
import Skills from "./components/Skills/skills";
import GridContainer from "./components/GridContainer/gridContainer";
import ProjectCard from "./components/ProjectCard/projectCard";
import { theme } from "./styles/theme";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <GridContainer spacing={2}>
        <Skills />
        <AboutMe />
      </GridContainer>
      <div style={{ padding: "1rem", maxWidth: theme.breakpoints.navigation, margin: "auto" }}>
        <ProjectCard></ProjectCard>
      </div>
    </>
  );
};

export default App;
