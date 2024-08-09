import styled from "styled-components";
import { MediaQueries } from "utils/useMediaQueries/types";

export const StyledHeroSection = styled.section<MediaQueries>`
  position: relative;
  /* height: 530px; */
  width: 100%;
  z-index: 1;
  margin-bottom: 92px;
  ${({ isMd }) =>
    isMd &&
    `
    height: 826px;
      `};
`;
export const textBlockHeroStyles = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "center",
  marginTop: "100px",
};
