import React from "react";
import { ProjectPreviewProps } from "./types";
import Typography from "../../../../components/Typography/typography";
import TextBlock from "../../../../components/TextBlock/textBlock";
import Button from "../../../../components/Button/button";
import Icon from "../../../../components/Icon/icon";
import { textBlockProjectDetailStyles } from "../../index.styles";
import Image from "../../../../components/Image/image";
//  repoLink, deployedLink,
const ProjectPreview: React.FC<ProjectPreviewProps> = ({ title, description, imageUrl }) => {
  return (
    <div>
      <TextBlock
        containerStyles={textBlockProjectDetailStyles}
        title={<Typography component="h2">{title}</Typography>}
        paragraph={<Typography component="p">{description}</Typography>}
        icons={[
          <Button
            variant="contained"
            backgroundColor="transparent"
            size="md"
            iconStart={<Icon src="github-icon.svg" size="16px" alt="Right arrow icon"></Icon>}
            iconEnd={<Icon src="arrow-icon-purple.svg" size="16px" alt="Right arrow icon"></Icon>}
          >
            GitHub
          </Button>,
          <Button
            variant="contained"
            backgroundColor="transparent"
            size="md"
            iconStart={<Icon src="website-icon.svg" size="16px" alt="Right arrow icon"></Icon>}
            iconEnd={<Icon src="arrow-icon-purple.svg" size="16px" alt="Right arrow icon"></Icon>}
          >
            Website
          </Button>,
        ]}
      />

      <Image src={imageUrl} alt={title} height="467px" />
    </div>
  );
};

export default ProjectPreview;
