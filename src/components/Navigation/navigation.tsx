// when i click the height animates
// but because of the styles on the styledNavigation with border-radius 100px (to make the original navbar a pill shape) when the height changes the border-radius doesn't look appealing and is animating.....
// how can i make this navigation more seemless and not so unappealing....

// When the user clicks on the menu icon --> menu icon changes to an close icon
// When the user clicks on the menu icon --> display the menu list

// keep the navigation visible with a transparent background
// when the user click to open/close animate a ::before pseudo element or animate another div

import React, { useState } from "react";
import Icon from "../../components/Icon/icon";
import Typography from "../../components/Typography/typography.tsx";
import {
  StyledNavigation,
  StyledNavigationBar,
  StyledNavigationContainer,
  StyledNavigationMenuList,
  StyledNavigationMenuListItem,
  StyledNavigationWrapper,
} from "./index.styles.tsx";

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

const navigationLinkVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
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
            <Icon onClick={toggleDropdown} src={isOpen ? "close-icon.svg" : "menu.svg"} alt="Navigation menu icon" size="32px" />
          </StyledNavigationBar>
          {/* move code to nav list component */}
          <StyledNavigationMenuList initial="closed" animate={isOpen ? "open" : "closed"} variants={navigationLinkVariants}>
            <StyledNavigationMenuListItem variants={navigationLinkVariants}>1</StyledNavigationMenuListItem>
            <StyledNavigationMenuListItem variants={navigationLinkVariants}>2</StyledNavigationMenuListItem>
            <StyledNavigationMenuListItem variants={navigationLinkVariants}>3</StyledNavigationMenuListItem>
            <StyledNavigationMenuListItem variants={navigationLinkVariants}>4</StyledNavigationMenuListItem>
          </StyledNavigationMenuList>
        </StyledNavigationContainer>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
