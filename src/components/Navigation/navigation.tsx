import Icon from "../../components/Icon/icon";
import React from "react";
import { StyledNavigation, StyledNavigationWrapper } from "./index.styles.tsx";
import Typography from "../../components/Typography/typography.tsx";
const Navigation: React.FC = () => {
  return (
    <StyledNavigationWrapper>
      <StyledNavigation>
        {/* <span style={{ backgroundColor: "red", position: "absolute", zIndex: -1, right: "50%" }}>aafafaf</span> */}
        <Typography component="p" variant="navigation_text">
          Christian Bega
        </Typography>
        <Icon src="menu.svg" alt="Closed Menu Icon" size="32px"></Icon>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
