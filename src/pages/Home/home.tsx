import React from "react";
import Hero from "../../components/Hero/hero";
import AboutMe from "../../components/AboutMe/aboutMe";
// import Skills from "../../components/Skills/skills";
import GridContainer from "../../components/GridContainer/gridContainer";
import ProjectCards from "../../components/ProjectCards/projectCards";
import ContactForm from "../../components/ContactForm/contact";
// import { FormspreeProvider } from "@formspree/react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <GridContainer id="main-grid-container" spacing={2}>
        {/* <Skills /> */}
        <AboutMe />
        <ProjectCards />
        <ContactForm />
      </GridContainer>
    </>
  );
};

export default Home;
// 193 & 70
