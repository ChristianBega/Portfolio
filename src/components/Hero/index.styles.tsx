import styled from "styled-components";
import { MediaQueries } from "utils/useMediaQueries/types";

export const StyledHeroSection = styled.section<MediaQueries>`
  position: relative;
  height: 530px;
  width: 100%;
  z-index: 1;
  ${({ isMd }) =>
    isMd &&
    `
    height: 826px;
      `};
`;

export const StyledHeroOrb = styled.div<MediaQueries>`
  position: absolute;
  background-color: #ffffff;
  height: 400px;
  width: 90px;
  border-radius: 80px;
  filter: blur(50px);
  -webkit-filter: blur(50px);
  z-index: -1000;
  border: 26px solid #1a56f0;
  box-shadow: 2px 2px 2px 10px #0048ff;
  opacity: 0.6;
  top: -280px;
  left: 50px;
  transform: rotate(-25deg);

  ${({ is400 }) =>
    is400 &&
    `
    height: 450px;
    left: 60px;
    transform: rotate(-35deg);
    `};

  ${({ is500 }) =>
    is500 &&
    `
    left: 70px;
    transform: rotate(-40deg);
    
    `};

  ${({ is600 }) =>
    is600 &&
    `
    top: -350px;
    left: 80px;
    transform: rotate(-45deg);
    height: 550px;

    
    `};

  ${({ is730 }) =>
    is730 &&
    `
    top: -465px;
    height: 750px;
    transform: rotate(-50deg);
    `};

  ${({ isMd }) =>
    isMd &&
    `
    filter: blur(75px);
    -webkit-filter: blur(75px);
    transform: rotate(-45deg);
    width: 100px;
    border: 26px solid #1a56f0;
    box-shadow: 2px 2px 2px 20px #1a56f0;
    height: 950px;
    top: -550px;
    `};
  ${({ isXl }) =>
    isXl &&
    `
    transform: rotate(-50deg);
    top: -850px;
    height: 1400px;

    `};
  ${({ isXXl }) =>
    isXXl &&
    `
    transform: rotate(-55deg);
    top: -1000px;
    height: 1600px;

    `};
`;
