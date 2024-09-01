import styled from "styled-components";
import { theme } from "../../styles/theme";
import { MediaQueries } from "utils/useMediaQueries/types";

export const StyledFooter = styled("nav")<MediaQueries>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: ${theme.breakpoints.navigation};
  margin: 10rem auto auto auto;
  position: relative;
  background-color: #000416;
  .footer-content-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    ${({ isSm }) =>
      isSm &&
      `
    justify-content: space-between;
    flex-direction: row;
      `};

    .footer-content-children {
      width: 175px;
      justify-content: center;
    }
  }
`;

export const StyledEclipseBg = styled.div`
  border: 2px solid #0038ff;
  position: absolute;
  height: 400px;
  width: 200%;
  border-radius: 50%;
  top: -20px;
  z-index: -1;
  top: -100px;
  z-index: -1;
  background-color: #000416;
`;

export const StyledFooterWrapper = styled.div`
  overflow: hidden;
`;

export const StyledEclipseBgOrb = styled.div<MediaQueries>`
  background: #415def;
  height: 150px;
  width: 150px;
  filter: blur(120px);
  -webkit-filter: blur(120px);
  transform: translate(-50%);
  position: absolute;
  left: 50%;
  z-index: -2;
  ${({ isSm }) =>
    isSm &&
    `
    background: #415def;
    height: 150px;
    width: 450px;
    filter: blur(150px);
    -webkit-filter: blur(150px);
      `}
  ${({ isMd }) =>
    isMd &&
    `
    width: 650px;
      `}
`;
