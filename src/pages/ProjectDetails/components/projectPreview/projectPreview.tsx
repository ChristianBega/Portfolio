import React from "react";
import { ProjectPreviewProps } from "./types";
import Typography from "../../../../components/Typography/typography";
import TextBlock from "../../../../components/TextBlock/textBlock";
import Icon from "../../../../components/Icon/icon";
import { textBlockProjectPreviewStylesDesktop, textBlockProjectPreviewStylesMobile } from "../../projectDetails.styles";
import ProjectImage from "../../../../components/ProjectVideo/projectVideo";
import GridContainer from "../../../../components/GridContainer/gridContainer";
import GridItem from "../../../../components/GridItem/gridItem";
import useMediaQueries from "../../../../utils/useMediaQueries/useMediaQueries";

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ title, description, videoUrl, repoLink, deployedLink }) => {
  const { isSm } = useMediaQueries();
  return (
    <GridContainer id="project-preview-section" mb={isSm ? "0" : "92px"}>
      <GridItem paddingX="0px" id="project-image-section" order={isSm ? 1 : 0}>
        <ProjectImage type="video" videoUrl={videoUrl} />
      </GridItem>
      <GridItem paddingX="0px" id="project-content-section" order={isSm ? 0 : 1}>
        <TextBlock containerStyles={isSm ? textBlockProjectPreviewStylesDesktop : textBlockProjectPreviewStylesMobile}>
          <Typography component="h2">{title}</Typography>
          <Typography component="p">{description}</Typography>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "20px" }}>
            <Typography
              component="a"
              href={repoLink}
              variant="link_text"
              iconStart={<Icon src="github-icon.svg" size="16px" alt="Right arrow icon"></Icon>}
              iconEnd={<Icon src="arrow-icon-purple.svg" size="16px" alt="Right arrow icon"></Icon>}
            >
              Github
            </Typography>
            <Typography
              component="a"
              href={deployedLink}
              variant="link_text"
              iconStart={<Icon src="website-icon.svg" size="16px" alt="Right arrow icon"></Icon>}
              iconEnd={<Icon src="arrow-icon-purple.svg" size="16px" alt="Right arrow icon"></Icon>}
            >
              Website
            </Typography>
          </div>
        </TextBlock>
      </GridItem>
    </GridContainer>
  );
};

export default ProjectPreview;
