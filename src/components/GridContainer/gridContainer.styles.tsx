import { theme } from "../../styles/theme";
import styled from "styled-components";
import { GridContainerProps } from "./types";
import { MediaQueries } from "utils/useMediaQueries/types";

export const StyledGridContainer = styled.div<GridContainerProps & MediaQueries>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: ${theme.breakpoints.navigation};
  margin-inline: auto;
  grid-gap: ${(props) => (props.spacing ? props.theme.spacing(props.spacing) : `0`)};
  margin-bottom: 92px;
  ${({ isSm }) =>
    isSm &&
    `
    margin-bottom: 0px !important;
  `};
`;
