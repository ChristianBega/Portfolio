import React from "react";
import { Route, Routes } from "react-router-dom";
// Components
import Navigation from "./components/Navigation/navigation";
// Pages
import ProjectDetails from "./pages/ProjectDetails/projectDetails";
import Home from "./pages/Home/home";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project-details" element={<ProjectDetails />}></Route>
      </Routes>
    </>
  );
};

export default App;
