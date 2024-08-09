// import styled from "styled-components";
// import { MediaQueries } from "utils/useMediaQueries/types";
// export const StyledProjectImageContainer = styled.div<MediaQueries>`
//   position: relative;
//   height: 430px;
//   width: 100%;
//   margin-bottom: 40px;
//   overflow: hidden;
//   background-color: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(20px);
//   -webkit-backdrop-filter: blur(20px);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   display: flex;
//   justify-content: center;
//   padding-top: 72px;
//   border-radius: 10.62px;
//   position: relative;
//   &::after {
//     content: "";
//     position: absolute;
//     height: 200px;
//     width: 100%;
//     bottom: 0;
//     background: rgba(0, 4, 22, 1);
//     background: linear-gradient(0deg, rgba(0, 4, 22, 1) 0%, rgba(0, 4, 22, 0) 100%);
//   }

//   ${({ isMd }) =>
//     isMd &&
//     `
//     padding-top : 0;
//     min-height : 720px;
//     flex-direction : column;
//     align-items: center;
//     justify-content : space-between;
//     `};
// `;

// export const StyledProjectImageFrame = styled.img<MediaQueries>`
//   max-width: 236.31px;
//   max-height: 487.75;
//   border-radius: 38.77px;
//   position: absolute;
//   z-index: -1;
//   ${({ isSm }) =>
//     isSm &&
//     `
//     top : 100px;
//     max-width : 525px;
//     max-height : 510.36px;
//     `};

//   ${({ isMd }) =>
//     isMd &&
//     `
//     max-width : 866px;
//     max-height : 1154.67px;
//     top : 252px;
//     `};
//   ${({ isLg }) =>
//     isLg &&
//     `
//     top : 300px;
//     `};
// `;

// export const StyledProjectImage = styled.img<MediaQueries>`
//   border-radius: 30px;
//   margin-top: 10px;
//   width: 216px;
//   height: 467.45px;
//   object-fit: cover;
//   ${({ isSm }) =>
//     isSm &&
//     `
//     margin-top: 91px;
//     border-radius: 5px;
//     width : 396px;
//     height : 315px;

//     `};
//   ${({ isMd }) =>
//     isMd &&
//     `
//     margin-top: -15px;
//     width : 658.83px;
//     height : 365.36px;
//     border-radius: 18px;
//     `};
//   ${({ isLg }) =>
//     isLg &&
//     `
//     margin-top: 10px;
//     `};
// `;

// export const StyledProjectCardBackgroundBlur = styled.div<MediaQueries>`
//   width: 375px;
//   height: 285px;
//   background: linear-gradient(180deg, #0066ff, #33cc33);
//   border-radius: 60% 100% 100% 90% / 100% 100% 50% 90%;
//   transform: rotate(10deg);
//   position: absolute;
//   filter: blur(70px);
//   -webkit-filter: blur(70px);
//   bottom: -20px;
//   left: -50px;
//   z-index: -1000;
//   ${({ isXs }) =>
//     isXs &&
//     `
//     width : 450px;
//     height : 300px;
//     `};

//   ${({ is600 }) =>
//     is600 &&
//     `
//     width : 500px;
//     height : 400px;
//     bottom : -100px;
//     left: 0px;

//     `};
//   ${({ isSm }) =>
//     isSm &&
//     `
//     width : 600px;
//     height : 400px;
//     bottom : -120px
//     `};

//   ${({ isMd }) =>
//     isMd &&
//     `
//     width : 600px;
//     height : 500px;
//     bottom: -150px;
//     left: 175px;
//     filter: blur(120px);
//     -webkit-filter: blur(120px);
//     `};
// `;

import styled from "styled-components";
import { MediaQueries } from "utils/useMediaQueries/types";

export const StyledProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto auto 40px auto;
`;

export const StyledProjectImageFrame = styled.img<MediaQueries>`
  width: 100%;
  height: 487.75px;
  ${({ isSm }) =>
    isSm &&
    `

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
`;

export const StyledProjectImage = styled.img<MediaQueries>`
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
    width : 490px;
    height : 316px;
    border-radius: 12px;
    top: 48.5%;
  `};
  ${({ isMd }) =>
    isMd &&
    ` 
    width : 600px;
    height : 387px;
    top : 68%;
    `};
  ${({ isLg }) =>
    isLg &&
    ` 
    width : 600px;
    height : 387px;
    top : 68.6%;
    `};
`;

export const textBlockProjectCardStylesMobile = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

export const textBlockProjectCardStylesDeskTop = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "48px 0 70px 0",
  maxWidth: "600px",
  textAlign: "center",
  margin: "auto",
};
