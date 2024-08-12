import React from "react";
import ProjectCard from "../../components/ProjectCard/projectCard";
import { featuredProjectsData } from "./generateProjectData";
import GridItem from "../../components/GridItem/gridItem";
import Typography from "../../components/Typography/typography";

const ProjectCards: React.FC = () => {
  return (
    <GridItem id="featured-projects" order={3}>
      <Typography component="h2" mb="48px">
        Projects
      </Typography>
      {featuredProjectsData.map((data, index) => (
        <ProjectCard data={data} key={index}></ProjectCard>
      ))}
    </GridItem>
  );
};

export default ProjectCards;
