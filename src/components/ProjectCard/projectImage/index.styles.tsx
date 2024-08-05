import styled from "styled-components";
import { MediaQueries } from "utils/useMediaQueries/types";

export const StyledProjectImageContainer = styled.div<MediaQueries>`
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

  ${({ isLg }) =>
    isLg &&
    `
    padding-top : 0;
    min-height : 720px;
    flex-direction : column;
    align-items: center;
    justify-content : space-between;

    `};
`;

export const StyledProjectImageFrame = styled.img<MediaQueries>`
  max-width: 236.31px;
  max-height: 487.75;
  border-radius: 38.77px;
  position: absolute;
  z-index: -1;
  ${({ isLg }) =>
    isLg &&
    `
    max-width : 866px;
    max-height : 1154.67px;
    top : 300px;
    `};
`;

export const StyledProjectImage = styled.img<MediaQueries>`
  border-radius: 30px;
  margin-top: 10px;
  width: 216px;
  height: 467.45px;
  ${({ isLg }) =>
    isLg &&
    `
    width : 658.83px;
    height : 510.36px;
    border-radius: 18px;
    `};
`;

export const StyledProjectCardBackgroundBlur = styled.div<MediaQueries>`
  width: 375px;
  height: 250px;
  background: linear-gradient(180deg, #0066ff, #33cc33);
  border-radius: 60% 100% 100% 90% / 100% 100% 50% 90%;
  transform: rotate(10deg);
  position: absolute;
  filter: blur(40px);
  -webkit-filter: blur(40px);
  bottom: 0px;
  left: -50px;
  z-index: -100;
  ${({ isLg }) =>
    isLg &&
    `
    width : 600px;
    height : 500px;
    bottom: -150px;
    left: 175px;
    filter: blur(120px);
    -webkit-filter: blur(120px);
    `};
`;

export const textBlocProjectCardStylesMobile = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};
export const textBlocProjectCardStylesDeskTop = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "48px 0 70px 0",
  maxWidth: "800px",
  textAlign: "center",
};
