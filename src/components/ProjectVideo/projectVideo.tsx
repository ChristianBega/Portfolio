import React from "react";
import { StyledProjectCardBackgroundBlur, StyledProjectImageFrame, StyledProjectVideoContainer, StyledVideo } from "./projectVideo.styles";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import { CombinedProjectVideoProps } from "./types";

const ProjectVideo: React.FC<CombinedProjectVideoProps> = ({ children, videoUrl, includeBgOrb, includeBgWrapper }) => {
  const { isXs, is600, isSm, isLg, isMd } = useMediaQueries();
  return (
    <StyledProjectVideoContainer includeBgWrapper={includeBgWrapper} isMd={isMd}>
      {includeBgOrb && <StyledProjectCardBackgroundBlur isXs={isXs} is600={is600} isSm={isSm} isLg={isLg} isMd={isMd} />}
      {isMd && children}
      <StyledVideo includeBgWrapper={includeBgWrapper} isLg={isLg} isSm={isSm} isMd={isMd} src={videoUrl} />
      <StyledProjectImageFrame
        includeBgWrapper={includeBgWrapper}
        isMd={isMd}
        isSm={isSm}
        isLg={isLg}
        src={isSm ? "laptop-iframe.svg" : "iphone-iframe.svg"}
        alt="Project card Iframe background"
      />
    </StyledProjectVideoContainer>
  );
};

export default ProjectVideo;
