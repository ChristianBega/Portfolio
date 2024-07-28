import { StyledNavigationProps } from "components/Navigation/types";
import { motion } from "framer-motion";
import styled from "styled-components";

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
