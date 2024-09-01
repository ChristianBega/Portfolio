import React, { useEffect, useRef, useState } from "react";
import { StyledProjectCardBackgroundBlur, StyledProjectImageFrame, StyledProjectVideoContainer, StyledVideo } from "./projectVideo.styles";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import { CombinedProjectVideoProps } from "./types";
import { useInView } from "framer-motion";
import Icon from "../../components/Icon/icon";
import Button from "../../components/Button/button";

const ProjectVideo: React.FC<CombinedProjectVideoProps> = ({ children, videoUrl, includeBgOrb, includeBgWrapper, backgroundGradient }) => {
  const { isXs, is600, isSm, isLg, isMd } = useMediaQueries();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  const isInView = useInView(videoContainerRef);

  useEffect(() => {
    if (includeBgWrapper) return;
    if (isInView && videoRef.current && !videoEnded) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView, videoEnded]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Add an event listener for when the video ends
      videoElement.addEventListener("ended", () => setVideoEnded(true));
    }
    // Cleanup the event listener when the component unmounts
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", () => setVideoEnded(true));
      }
    };
  }, []);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setVideoEnded(false);
    }
  };
  return (
    <StyledProjectVideoContainer ref={videoContainerRef} includeBgWrapper={includeBgWrapper} isMd={isMd}>
      {includeBgOrb && (
        <StyledProjectCardBackgroundBlur backgroundGradient={backgroundGradient} isXs={isXs} is600={is600} isSm={isSm} isLg={isLg} isMd={isMd} />
      )}
      {isMd && children}
      <StyledVideo
        ref={videoRef}
        includeBgWrapper={includeBgWrapper}
        isLg={isLg}
        isSm={isSm}
        isMd={isMd}
        src={isSm ? videoUrl.desktop : videoUrl.mobile}
        muted
        // playsinline
        webkit-playsinline
      />
      <StyledProjectImageFrame
        includeBgWrapper={includeBgWrapper}
        isMd={isMd}
        isSm={isSm}
        isLg={isLg}
        src={isSm ? "laptop-iframe.svg" : "iphone-iframe.svg"}
        alt="Project card Iframe background"
      />
      {videoEnded && !includeBgWrapper && (
        <Button
          handleClick={handleReplay}
          boxShadow="button_shadow_transparent"
          variant="replay"
          size="sm"
          iconStart={<Icon src="replay-icon.svg" alt="replay video icon" size="50px"></Icon>}
          buttonStyles={{
            color: "#fff",
            padding: "10px 20px",
            backgroundColor: "rgba(0, 0, 0, 0.5) !important",
            backdropFilter: "blur(5px)",
            position: "absolute",
            top: isMd ? "49%" : isSm ? "49%" : "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            cursor: "pointer",
            height: isMd ? "400px" : isSm ? "330px" : "480px",
            width: isMd ? "604px" : isSm ? "492px" : "225px",
            borderRadius: isSm ? "12px 12px 0 0" : "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Button>
      )}
    </StyledProjectVideoContainer>
  );
};

export default ProjectVideo;
