import Button from "../../components/Button/button";
import TextBlock from "../../components/TextBlock/textBlock";
import Typography from "../../components/Typography/typography";
import Icon from "../../components/Icon/icon";
import React from "react";
import ProjectImage from "./projectImage/projectImage";
import { textBlocProjectCardStylesDeskTop, textBlocProjectCardStylesMobile } from "./projectImage/index.styles";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import { MediaQueries } from "utils/useMediaQueries/types";
import { ProjectCardProps } from "./types";

const renderProjectTextBlock: React.FC<MediaQueries & ProjectCardProps> = ({ isMd, data }) => (
  <TextBlock
    containerStyles={isMd ? textBlocProjectCardStylesDeskTop : textBlocProjectCardStylesMobile}
    tag={[data.projectTag]}
    title={
      <Typography component="h3" mb="32px">
        {data.name}
      </Typography>
    }
    paragraph={<Typography component="p">{data.description}</Typography>}
    button={
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
    }
  />
);

const ProjectCard: React.FC<MediaQueries & ProjectCardProps> = ({ data }) => {
  const { isMd } = useMediaQueries();
  return (
    <div style={{ marginBottom: "80px" }}>
      <ProjectImage imageUrl={data.imageDemo}>{renderProjectTextBlock({ isMd, data })}</ProjectImage>
      {!isMd && renderProjectTextBlock({ isMd, data })}
    </div>
  );
};

export default ProjectCard;
