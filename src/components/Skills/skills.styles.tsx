import styled, { css } from "styled-components";
import { StyledTextBlockContainerProps } from "./types";

export const StyledTextBlockContainer = styled.div<StyledTextBlockContainerProps>`
  ${(props) => css({ ...props.containerStyles })}
`;
