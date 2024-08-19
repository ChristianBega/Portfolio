import Typography from "../../components/Typography/typography";
import React from "react";
import { useLocation } from "react-router-dom";
import ProjectPreview from "./components/projectPreview/projectPreview";
import TextBlock from "../../components/TextBlock/textBlock";
import Button from "../../components/Button/button";
import Icon from "../../components/Icon/icon";
import { buttonStylesBackButton, textBlockProjectDetailStyles } from "./projectDetails.styles";
import GridContainer from "../../components/GridContainer/gridContainer";
import GridItem from "../../components/GridItem/gridItem";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";

const ProjectDetails: React.FC = () => {
  const { state } = useLocation();
  const { title, description, longDescription, deployedLink, repoLink, videoUrl, technology, role } = state;
  const { isSm } = useMediaQueries();
  return (
    <GridContainer id="project-details" spacing={2} mt={isSm ? "120px" : "85px"}>
      <GridItem id="project-preview-section">
        <Button
          buttonStyles={buttonStylesBackButton}
          navigationOptions={{ path: "/" }}
          variant="circular"
          size="md"
          iconStart={<Icon alt="Back arrow" src="back-arrow.svg" size="24px"></Icon>}
        ></Button>
        <ProjectPreview title={title} description={description} repoLink={repoLink} deployedLink={deployedLink} videoUrl={videoUrl} />
      </GridItem>
      <GridItem mb="40px" id="technology">
        <TextBlock containerStyles={textBlockProjectDetailStyles} techTag={technology}>
          <Typography component="h3" mb="20px">
            Technologies
          </Typography>
        </TextBlock>
      </GridItem>
      <GridItem mb="40px" id="summary">
        <TextBlock containerStyles={textBlockProjectDetailStyles}>
          <Typography component="h3" mb="20px">
            Summary
          </Typography>
          <Typography component="p" justifyContent="center">
            {longDescription}
          </Typography>
        </TextBlock>
      </GridItem>
      <GridItem mb="40px" id="role">
        <TextBlock containerStyles={textBlockProjectDetailStyles} roles={role}>
          <Typography component="h3" mb="20px">
            Role
          </Typography>
          {/* build list component instead of passing roles prop to render list */}
        </TextBlock>
      </GridItem>
    </GridContainer>
  );
};

export default ProjectDetails;
