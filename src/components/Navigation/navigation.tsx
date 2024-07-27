import React, { useState } from "react";
import Icon from "../../components/Icon/icon";
import Typography from "../../components/Typography/typography.tsx";
import { StyledNavigation, StyledNavigationBar, StyledNavigationContainer, StyledNavigationWrapper } from "./index.styles.tsx";
import NavigationMenuList from "./components/navigationMenuList/navigationMenuList.tsx";

const navigationVariants = {
  closed: {
    height: "60px",
    borderRadius: "100px",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.5,
    },
  },
  open: {
    borderRadius: "24px",
    height: "304px",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavigationWrapper id="navigation-wrapper">
      <StyledNavigation id="navigation" initial="closed" animate={isOpen ? "open" : "closed"} variants={navigationVariants}>
        <StyledNavigationContainer id="navigation-container">
          <StyledNavigationBar id="navigation-bar">
            <Typography component="p" variant="navigation_text">
              Christian Bega
            </Typography>
            <Icon id="menu-icon" onClick={toggleDropdown} src={isOpen ? "close-icon.svg" : "menu.svg"} alt="Navigation menu icon" size="32px" />
          </StyledNavigationBar>
          <NavigationMenuList isOpen={isOpen} />
        </StyledNavigationContainer>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
