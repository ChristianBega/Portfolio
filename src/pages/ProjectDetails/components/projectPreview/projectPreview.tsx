import React from "react";
import { ProjectPreviewProps } from "./types";
import Typography from "../../../../components/Typography/typography";

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ title, description, repoLink, deployedLink, imageUrl }) => {
  return (
    <div>
      <Typography component="h1">{title}</Typography>
      <Typography component="h2">{description}</Typography>
      <Typography component="h4">{repoLink}</Typography>
      <Typography component="h4">{deployedLink}</Typography>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default ProjectPreview;
