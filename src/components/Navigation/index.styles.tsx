import styled from "styled-components";
// import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

export const StyledNavigationWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 1rem;
`;

export const StyledNavigation = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-height: 361px;
`;

export const StyledNavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledNavigationBar = styled.div`
  display: flex;
  width: 100%;
  max-height: 60px;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;
