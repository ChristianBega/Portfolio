import styled from "styled-components";
import { MediaQueries } from "utils/useMediaQueries/types";

export const StyledHeroSection = styled.section<MediaQueries>`
  position: relative;
  height: 530px;
  width: 100%;
  ${({ isMd }) =>
    isMd &&
    `
    height: 826px;
      `};
`;
