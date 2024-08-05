import { theme } from "../../styles/theme";
import styled from "styled-components";
import { GridContainerProps } from "./types";

export const StyledGridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: ${theme.breakpoints.navigation};
  margin-inline: auto;
  grid-gap: ${(props) => (props.spacing ? props.theme.spacing(props.spacing) : `0`)};
  margin-bottom: 92px;
`;
