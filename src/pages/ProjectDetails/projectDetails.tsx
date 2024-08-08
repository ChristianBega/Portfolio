import Typography from "../../components/Typography/typography";
import React from "react";
import { useLocation } from "react-router-dom";
import ProjectPreview from "./components/projectPreview/projectPreview";
import { theme } from "../../styles/theme";

const ProjectDetails: React.FC = () => {
  const { state } = useLocation();
  const { title, description, deployedLink, repoLink, imageUrl } = state;
  // title, desc, github, deployed, image
  return (
    <div
      style={{
        marginTop: "100px",
        maxWidth: theme.breakpoints.navigation,
        marginInline: "auto",
      }}
    >
      <ProjectPreview title={title} description={description} repoLink={repoLink} deployedLink={deployedLink} imageUrl={imageUrl} />
      <Typography component={"h1"}>projectDetails Summary - tech, summary, role (text blocks)</Typography>
    </div>
  );
};

export default ProjectDetails;
