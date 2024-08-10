import React from "react";
import { StyledProjectCardBackgroundBlur, StyledProjectImage, StyledProjectImageContainer, StyledProjectImageFrame } from "./projectImage.styles";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import { CombinedProjectImageProps } from "./types";

const ProjectImage: React.FC<CombinedProjectImageProps> = ({ children, imageUrl, includeBgOrb, includeBgWrapper }) => {
  const { isXs, is600, isSm, isLg, isMd } = useMediaQueries();
  return (
    <StyledProjectImageContainer includeBgWrapper={includeBgWrapper} isMd={isMd}>
      {includeBgOrb && <StyledProjectCardBackgroundBlur isXs={isXs} is600={is600} isSm={isSm} isLg={isLg} isMd={isMd} />}
      {isMd && children}
      <StyledProjectImage
        includeBgWrapper={includeBgWrapper}
        isLg={isLg}
        isSm={isSm}
        isMd={isMd}
        src={imageUrl}
        alt="Project card Iframe background"
      />
      <StyledProjectImageFrame
        includeBgWrapper={includeBgWrapper}
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
