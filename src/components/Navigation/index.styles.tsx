import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledNavigationProps } from "./types";

export const StyledNavigationWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 1rem;
  z-index: 1000;
`;

export const StyledNavigation = styled(motion.nav)<StyledNavigationProps>`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-height: 60px;
  max-height: 361px;
  ${({ isMd }) =>
    isMd &&
    `
    min-height: 78px;
      `}
`;

export const StyledNavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledNavigationBar = styled.div<StyledNavigationProps>`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  max-height: 60px;
  ${({ isMd }) =>
    isMd &&
    `
    max-height: 78px;
      `}
`;
