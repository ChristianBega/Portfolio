import styled from "styled-components";
import { IconProps } from "./types";

export const StyledIcon = styled.img<IconProps>`
  width: ${({ size }) => size || "16px"};
  height: ${({ size }) => size || "16px"};
  ${({ cta }) =>
    cta &&
    `
    cursor : pointer;
    &:hover {
    transform : scale(1.1)
    }
      `};
`;
