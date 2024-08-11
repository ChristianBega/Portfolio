import Typography from "../../components/Typography/typography";
import React from "react";
import { useLocation } from "react-router-dom";
import ProjectPreview from "./components/projectPreview/projectPreview";
import TextBlock from "../../components/TextBlock/textBlock";
import Button from "../../components/Button/button";
import Icon from "../../components/Icon/icon";
import { buttonStylesBackButton } from "./projectDetails.styles";
import { theme } from "../../styles/theme";

const ProjectDetails: React.FC = () => {
  const { state } = useLocation();
  const { title, description, longDescription, deployedLink, repoLink, imageUrl, technology, role } = state;
  return (
    <div
      style={{
        marginTop: "100px",
        marginInline: "auto",
        maxWidth: theme.breakpoints.navigation,
        position: "relative",
      }}
    >
      <Button
        buttonStyles={buttonStylesBackButton}
        navigationOptions={{ path: "/" }}
        variant="circular"
        size="md"
        iconStart={<Icon alt="Back arrow" src="back-arrow.svg" size="24px"></Icon>}
      ></Button>
      <ProjectPreview title={title} description={description} repoLink={repoLink} deployedLink={deployedLink} imageUrl={imageUrl} />
      <TextBlock techTag={technology} mb="40px">
        <Typography component="h3" mb="20px">
          Technologies
        </Typography>
      </TextBlock>
      <TextBlock mb="40px">
        <Typography component="h3" mb="20px">
          Summary
        </Typography>
        <Typography component="p" justifyContent="center">
          {longDescription}
        </Typography>
      </TextBlock>
      <TextBlock mb="40px" roles={role}>
        <Typography component="h3" mb="20px">
          Role
        </Typography>
        {/* build list component instead of passing roles prop to render list */}
      </TextBlock>
    </div>
  );
};

export default ProjectDetails;
