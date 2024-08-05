import React from "react";
import { StyledProjectCardBackgroundBlur, StyledProjectImage, StyledProjectImageContainer, StyledProjectImageFrame } from "./index.styles";
import useMediaQueries from "../../../utils/useMediaQueries/useMediaQueries";
import { ProjectImageProps } from "./types";

const ProjectImage: React.FC<ProjectImageProps> = ({ children, imageUrl }) => {
  const { isXs, is600, isSm, isLg, isMd } = useMediaQueries();
  return (
    <StyledProjectImageContainer isMd={isMd}>
      <StyledProjectCardBackgroundBlur isXs={isXs} is600={is600} isSm={isSm} isLg={isLg} isMd={isMd} />
      {isMd && children}
      <StyledProjectImage
        isLg={isLg}
        isSm={isSm}
        isMd={isMd}
        src={imageUrl}
        // src={isSm ? "project-image-overland-laptop.svg" : "project-image-overland-mobile.svg"}
        alt="Project card Iframe background"
      />
      <StyledProjectImageFrame
        isMd={isMd}
        isSm={isSm}
        isLg={isLg}
        src={isSm ? "laptop-iframe.svg" : "iphone-iframe.svg"}
        alt="Project card Iframe background"
      />
    </StyledProjectImageContainer>
  );
};

export default ProjectImage;
