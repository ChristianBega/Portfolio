import styled, { css } from "styled-components";
import { StyledTextBlockContainerProps } from "./types";
import { theme } from "../../styles/theme";

export const StyledTextBlockContainer = styled.div<StyledTextBlockContainerProps>`
  padding-inline: 1rem;
  ${(props) => css({ ...props.containerStyles })}
`;

export const StyledTextBlockTagList = styled.ul`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem !important;
`;
export const StyledTextBlockTag = styled.li`
  color: #fff;
  display: inline;
  padding: 0.25rem 1rem;
  border-radius: 8px;
  background-color: ${theme.colors.color_5_rgba};
  color: ${theme.colors.color_5};
`;
