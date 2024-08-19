import styled from "styled-components";
import { MediaQueries } from "utils/useMediaQueries/types";
import { ProjectVideoContainerProps } from "./types";

export const StyledProjectVideoContainer = styled.div<ProjectVideoContainerProps & MediaQueries>`
  position: relative;
  width: 100%;
  margin: auto auto 40px auto;

  ${({ includeBgWrapper, isMd }) =>
    includeBgWrapper &&
    `
    position: relative;
    height: 430px;
    width: 100%;
    margin-bottom: 40px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    padding-top: 72px;
    border-radius: 10.62px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      height: 200px;
      width: 100%;
      bottom: 0;
      background: rgba(0, 4, 22, 1);
      background: linear-gradient(0deg, rgba(0, 4, 22, 1) 0%, rgba(0, 4, 22, 0) 100%);
    }
    ${
      isMd &&
      `
     height: 720px;
     flex-direction : column;
    `
    }
  `}
`;

export const StyledProjectImageFrame = styled.img<MediaQueries & ProjectVideoContainerProps>`
  width: 100%;
  height: 487.75px;
  max-width: 800px;
  margin: 1rem auto auto auto;
  ${({ isSm }) =>
    isSm &&
    `
    margin: auto;

  `};
  ${({ isMd }) =>
    isMd &&
    `
    height : auto;
  `};
  ${({ isLg }) =>
    isLg &&
    `
  `};
  ${({ includeBgWrapper, isMd }) =>
    includeBgWrapper &&
    `
    ${
      isMd &&
      `
      position : absolute;
      left : 50%;
      top : 83.5%;
      transform : translate(-50%,-50%)
    `
    }
  `}
`;

export const StyledVideo = styled.video<MediaQueries & ProjectVideoContainerProps>`
  height: 465px;
  width: 215px;
  border-radius: 30px;
  position: absolute;
  object-fit: cover;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ isSm }) =>
    isSm &&
    `
    width : 492px;
    height : 318px;
    border-radius: 12px 12px 0 0;
    top: 48.2%;
    z-index: -1;
  `};

  ${({ isMd }) =>
    isMd &&
    `
    width : 604px;
    height : 393px;
    top : 48.1%;
    `};

  ${({ isLg }) =>
    isLg &&
    ` 
    width : 604px;
    height : 394px;
    top : 48.2%;
    `};

  ${({ includeBgWrapper, isMd, isSm }) =>
    includeBgWrapper &&
    `
    top : 77.5%;
    ${
      isSm &&
      `
      top: 71.5%;
    `
    }   
    ${
      isMd &&
      `
      top: 77.5%;
      margin-top : 2rem;
    `
    } 
    `};
`;

export const StyledProjectCardBackgroundBlur = styled.div<MediaQueries>`
  width: 375px;
  height: 285px;
  background: linear-gradient(180deg, #0066ff, #33cc33);
  border-radius: 60% 100% 100% 90% / 100% 100% 50% 90%;
  transform: rotate(10deg);
  position: absolute;
  filter: blur(70px);
  -webkit-filter: blur(70px);
  bottom: -20px;
  left: -50px;
  z-index: -1000;
  ${({ isXs }) =>
    isXs &&
    `
    width : 450px;
    height : 300px;
    `};

  ${({ is600 }) =>
    is600 &&
    `
    width : 500px;
    height : 400px;
    bottom : -100px;
    left: 0px;

    `};
  ${({ isSm }) =>
    isSm &&
    `
    width : 600px;
    height : 400px;
    bottom : -120px
    `};

  ${({ isMd }) =>
    isMd &&
    `
    width : 600px;
    height : 500px;
    bottom: -150px;
    left: 175px;
    filter: blur(120px);
    -webkit-filter: blur(120px);
    `};
`;
