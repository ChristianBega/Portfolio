import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledNavigationProps } from "../../types";

export const StyledNavigationMenuList = styled(motion.ul)<StyledNavigationProps>`
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  ${({ isMd }) =>
    isMd &&
    `
    display: flex !important;
    flex-direction: row;
    width: 550px;
    padding-top: 0rem;

      `}
`;
export const StyledNavigationMenuListItem = styled(motion.li)<StyledNavigationProps>`
  color: #fff;
  width: 100%;
  list-style: none;
  display: flex !important;
  justify-content: center;
  &:not(:first-child) {
    ${({ isMd }) =>
      isMd
        ? `
      margin-top: 0rem;
      `
        : `
      margin-top : 1.1rem;
      `}
  }
`;
