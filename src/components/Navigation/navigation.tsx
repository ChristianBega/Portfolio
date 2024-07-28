import React, { useState } from "react";
import Icon from "../../components/Icon/icon";
import Typography from "../../components/Typography/typography.tsx";
import { StyledNavigation, StyledNavigationBar, StyledNavigationContainer, StyledNavigationWrapper } from "./index.styles.tsx";
import NavigationMenuList from "./components/navigationMenuList/navigationMenuList.tsx";
import { navigationVariants } from "./animations/navigationAnimations.ts";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries.tsx";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isMd } = useMediaQueries();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavigationWrapper id="navigation-wrapper">
      <StyledNavigation id="navigation" initial="closed" animate={isOpen ? "open" : "closed"} variants={navigationVariants}>
        <StyledNavigationContainer id="navigation-container">
          <StyledNavigationBar id="navigation-bar">
            {isMd ? (
              <Typography component="p" variant="logo_text">
                Christian Bega
              </Typography>
            ) : (
              <>hello world</>
            )}
            <Icon id="menu-icon" onClick={toggleDropdown} src={isOpen ? "close-icon.svg" : "menu.svg"} alt="Navigation menu icon" size="32px" />
          </StyledNavigationBar>
          <NavigationMenuList isOpen={isOpen} />
        </StyledNavigationContainer>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
