import React from "react";
import { StyledProjectCardBackgroundBlur, StyledProjectImage, StyledProjectImageContainer, StyledProjectImageFrame } from "./index.styles";
import useMediaQueries from "../../../utils/useMediaQueries/useMediaQueries";
import { ProjectImageProps } from "./types";

const ProjectImage: React.FC<ProjectImageProps> = ({ children }) => {
  const { isLg } = useMediaQueries();
  return (
    <StyledProjectImageContainer isLg={isLg}>
      <StyledProjectCardBackgroundBlur isLg={isLg} />
      {isLg && children}
      <StyledProjectImage
        isLg={isLg}
        src={isLg ? "project-image-overland-laptop.svg" : "project-image-overland-mobile.svg"}
        alt="Project card Iframe background"
      />
      <StyledProjectImageFrame isLg={isLg} src={isLg ? "laptop-iframe.svg" : "iphone-iframe.svg"} alt="Project card Iframe background" />
    </StyledProjectImageContainer>
  );
};

export default ProjectImage;
