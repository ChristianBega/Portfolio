import Typography from "../../components/Typography/typography";
import React from "react";
import { useLocation } from "react-router-dom";
import ProjectPreview from "./components/projectPreview/projectPreview";

const ProjectDetails: React.FC = () => {
  const { state } = useLocation();
  console.log(state);
  const { name, description, link, repo, imageDemo } = state;
  // title, desc, github, deployed, image
  return (
    <div style={{ marginTop: "100px" }}>
      <ProjectPreview title={name} description={description} repoLink={repo} deployedLink={link} imageUrl={imageDemo} />
      {/* <Typography component={"h1"}>projectDetails Preview - back button, text block, image</Typography> */}
      <Typography component={"h1"}>projectDetails Summary - tech, summary, role (text blocks)</Typography>
    </div>
  );
};

export default ProjectDetails;
