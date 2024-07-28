import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon/icon";
import Typography from "../../components/Typography/typography.tsx";
import { StyledNavigation, StyledNavigationBar, StyledNavigationContainer, StyledNavigationWrapper } from "./index.styles.tsx";
import NavigationMenuList from "./components/navigationMenuList/navigationMenuList.tsx";
import { navigationVariants } from "./animations/navigationAnimations.ts";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries.tsx";
import Button from "../../components/Button/button.tsx";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isMd } = useMediaQueries();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // ! quick fix to close menu when open on mobile and screen size changes to isMd breakpoint, need to find a better solution
  useEffect(() => {
    if (isMd) {
      setIsOpen(false);
    }
  }, [isMd]);
  return (
    <StyledNavigationWrapper id="navigation-wrapper">
      <StyledNavigation id="navigation" initial="closed" animate={isOpen ? "open" : "closed"} variants={navigationVariants}>
        <StyledNavigationContainer id="navigation-container">
          <StyledNavigationBar id="navigation-bar">
            <Typography component="a" variant="logo_text">
              Christian Bega
            </Typography>
            {isMd && <NavigationMenuList isOpen={isOpen} />}
            {isMd ? (
              <Button variant="outlined" size="sm" iconEnd={<Icon src="arrow-icon-purple.svg" alt="Example Icon" size="12px" />}>
                Let's Talk
              </Button>
            ) : (
              <Icon
                cta={true}
                id="menu-icon"
                onClick={toggleDropdown}
                src={isOpen ? "close-icon.svg" : "menu.svg"}
                alt="Navigation menu icon"
                size="32px"
              />
            )}
          </StyledNavigationBar>
          {!isMd && <NavigationMenuList isOpen={isOpen} />}
        </StyledNavigationContainer>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
