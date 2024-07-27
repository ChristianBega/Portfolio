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
`;

export const StyledNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export const StyledNavigationBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

// move to nav list component

export const StyledNavigationMenuList = styled(motion.ul)`
  color: #fff;
`;
export const StyledNavigationMenuListItem = styled(motion.li)`
  color: #fff;
`;
