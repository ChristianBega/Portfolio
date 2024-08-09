import Button from "../../components/Button/button";
import TextBlock from "../../components/TextBlock/textBlock";
import Typography from "../../components/Typography/typography";
import Icon from "../../components/Icon/icon";
import React from "react";
import ProjectImage from "./projectImage/projectImage";
import { textBlockProjectCardStylesDeskTop, textBlockProjectCardStylesMobile } from "./projectImage/projectImage.styles";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import { MediaQueries } from "utils/useMediaQueries/types";
import { ProjectCardProps } from "./types";

const renderProjectTextBlock: React.FC<MediaQueries & ProjectCardProps> = ({ isMd, data }) => (
  <TextBlock containerStyles={isMd ? textBlockProjectCardStylesDeskTop : textBlockProjectCardStylesMobile} tag={[data.projectTag]}>
    <Typography component="h3" mb="32px">
      {data.title}
    </Typography>
    <Typography component="p">{data.description}</Typography>
    <div>
      <Button
        component={"link"}
        data={data}
        mt={"24px"}
        variant="contained"
        backgroundGradient="button_gradient"
        size="md"
        iconEnd={<Icon src="arrow-icon-purple.svg" alt="Example Icon" size="12px" />}
      >
        View Project
      </Button>
    </div>
  </TextBlock>
);

const ProjectCard: React.FC<MediaQueries & ProjectCardProps> = ({ data }) => {
  const { isMd } = useMediaQueries();
  return (
    <div style={{ marginBottom: "80px", border: "1px solid orange" }}>
      <ProjectImage imageUrl={data.imageUrl}>{renderProjectTextBlock({ isMd, data })}</ProjectImage>
      {!isMd && renderProjectTextBlock({ isMd, data })}
    </div>
  );
};

export default ProjectCard;
