import styled from "styled-components";
// import { theme } from "../../styles/theme";

export const StyledNavigationWrapper = styled.div`
  position: sticky;
  top: 0;

  padding: 1rem;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;
