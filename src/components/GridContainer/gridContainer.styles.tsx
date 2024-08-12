import { theme } from "../../styles/theme";
import styled from "styled-components";
import { GridContainerProps } from "./types";

export const StyledGridContainer = styled.section<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : theme.breakpoints.navigation)};
  margin-inline: auto;
  grid-gap: ${(props) => (props.spacing ? props.theme.spacing(props.spacing) : `0`)};
  margin-bottom: ${(props) => (props.mb ? props.mb : `92px`)};
  margin-top: ${(props) => (props.mt ? props.mt : `0`)};
`;
