import React from "react";
import { ProjectPreviewProps } from "./types";
import Typography from "../../../../components/Typography/typography";
import TextBlock from "../../../../components/TextBlock/textBlock";
import Icon from "../../../../components/Icon/icon";
import { textBlockProjectDetailStylesDesktop, textBlockProjectDetailStylesMobile } from "../../projectDetails.styles";
import ProjectImage from "../../../../components/ProjectImage/projectImage";
import GridContainer from "../../../../components/GridContainer/gridContainer";
import GridItem from "../../../../components/GridItem/gridItem";
import useMediaQueries from "../../../../utils/useMediaQueries/useMediaQueries";

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ title, description, imageUrl, repoLink, deployedLink }) => {
  const { isSm } = useMediaQueries();
  return (
    <GridContainer>
      <GridItem order={isSm ? 1 : 0}>
        <ProjectImage imageUrl={imageUrl} />
      </GridItem>
      <GridItem order={isSm ? 0 : 1}>
        <TextBlock containerStyles={isSm ? textBlockProjectDetailStylesDesktop : textBlockProjectDetailStylesMobile}>
          <Typography component="h2">{title}</Typography>
          <Typography component="p">{description}</Typography>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
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
