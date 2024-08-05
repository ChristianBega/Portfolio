import React from "react";
import { theme } from "../../styles/theme";
import ProjectCard from "../../components/ProjectCard/projectCard";
import { featuredProjectsData } from "./generateProjectData";

const ProjectCards: React.FC = () => {
  return (
    <div style={{ padding: "1rem", maxWidth: theme.breakpoints.navigation, margin: "auto" }}>
      {featuredProjectsData.map((data, index) => (
        <ProjectCard data={data} key={index}></ProjectCard>
      ))}
    </div>
  );
};

export default ProjectCards;
