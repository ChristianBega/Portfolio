import React from "react";
import { ProjectPreviewProps } from "./types";
import Typography from "../../../../components/Typography/typography";
import TextBlock from "../../../../components/TextBlock/textBlock";
import Button from "../../../../components/Button/button";
import Icon from "../../../../components/Icon/icon";
import { textBlockProjectDetailStyles } from "../../projectDetails.styles";
import Image from "../../../../components/Image/image";
import ProjectImage from "../../../../components/ProjectImage/projectImage";
//  repoLink, deployedLink,
const ProjectPreview: React.FC<ProjectPreviewProps> = ({ title, description, imageUrl }) => {
  return (
    <div>
      <TextBlock containerStyles={textBlockProjectDetailStyles}>
        <Typography component="h2">{title}</Typography>
        <Typography component="p">{description}</Typography>
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
          <Button
            variant="contained"
            backgroundColor="transparent"
            size="md"
            iconStart={<Icon src="github-icon.svg" size="16px" alt="Right arrow icon"></Icon>}
            iconEnd={<Icon src="arrow-icon-purple.svg" size="16px" alt="Right arrow icon"></Icon>}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            backgroundColor="transparent"
            size="md"
            iconStart={<Icon src="website-icon.svg" size="16px" alt="Right arrow icon"></Icon>}
            iconEnd={<Icon src="arrow-icon-purple.svg" size="16px" alt="Right arrow icon"></Icon>}
          >
            Website
          </Button>
        </div>
      </TextBlock>
      <ProjectImage imageUrl={imageUrl} />
      {/* <Image src={imageUrl} alt={title} height="467px" /> */}
    </div>
  );
};

export default ProjectPreview;
