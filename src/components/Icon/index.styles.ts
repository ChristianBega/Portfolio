import styled from "styled-components";

export const StyledIcon = styled.img<{ size?: string }>`
  width: ${({ size }) => size || "16px"};
  height: ${({ size }) => size || "16px"};
  display: inline-block;
`;
