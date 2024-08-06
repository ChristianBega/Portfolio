import React from "react";
import { Route, Routes } from "react-router-dom";
// Components
import Navigation from "./components/Navigation/navigation";
// Pages
import ProjectDetails from "./pages/ProjectDetails/projectDetails";
import Home from "./pages/Home/home";
import BackgroundGrid from "./components/Hero/components/backgroundGrid/backgroundGrid";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      {/* Refactor - move this from the hero to a global component that uses the image component */}
      <BackgroundGrid />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project-details" element={<ProjectDetails />}></Route>
      </Routes>
    </>
  );
};

export default App;
