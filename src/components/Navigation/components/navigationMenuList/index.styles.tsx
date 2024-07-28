import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNavigationMenuList = styled(motion.ul)`
  color: #fff;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
`;
export const StyledNavigationMenuListItem = styled(motion.li)`
  color: #fff;
  width: 100%;
  list-style: none;
  display: flex !important;
  justify-content: center;
  &:not(:first-child) {
    margin-top: 1rem;
  }
`;
