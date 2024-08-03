import Button from "../../components/Button/button";
import TextBlock from "../../components/TextBlock/textBlock";
import Typography from "../../components/Typography/typography";
import Icon from "../../components/Icon/icon";
import React from "react";

const ProjectCard: React.FC = () => {
  return (
    <>
      <p>image card</p>
      <TextBlock
        tag={["Tag#1", "Tag#2"]}
        title={
          <Typography component="h3" mb="32px">
            Project Title
          </Typography>
        }
        paragraph={
          <Typography component="p">
            You can add what outcomes has this project brought after your design! For example, can show some real data.
          </Typography>
        }
        button={
          <Button
            mt={"24px"}
            variant="contained"
            backgroundGradient="button_gradient"
            size="md"
            iconEnd={<Icon src="arrow-icon-purple.svg" alt="Example Icon" size="12px" />}
          >
            View Project
          </Button>
        }
      />
    </>
  );
};

export default ProjectCard;
