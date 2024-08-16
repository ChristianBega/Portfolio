import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon/icon";
import Typography from "../../components/Typography/typography.tsx";
import { StyledNavigation, StyledNavigationBar, StyledNavigationContainer, StyledNavigationWrapper } from "./navigation.styles.tsx";
import NavigationMenuList from "./components/navigationMenuList/navigationMenuList.tsx";
import { navigationVariants } from "./animations/navigationAnimations.ts";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries.tsx";
import Button from "../../components/Button/button.tsx";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isMd, isNavigation } = useMediaQueries();

  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
        if (isOpen) {
          setIsOpen(false);
        }
      } else if (scrollTop < lastScrollTop) {
        setScrollDirection("up");
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, isOpen]);
  // ! quick fix to close menu when open on mobile and screen size changes to isMd breakpoint, need to find a better solution
  useEffect(() => {
    if (isMd) {
      setIsOpen(false);
    }
  }, [isMd]);

  return (
    <StyledNavigationWrapper
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? "-400%" : "0%" }}
      transition={{ duration: 0.3 }}
      isNavigation={isNavigation}
      id="navigation-wrapper"
    >
      <StyledNavigation isMd={isMd} id="navigation" initial="closed" animate={isOpen ? "open" : "closed"} variants={navigationVariants}>
        <StyledNavigationContainer id="navigation-container">
          <StyledNavigationBar id="navigation-bar">
            <Typography route={"/"} component={Link} variant="logo_text">
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
          {!isMd && <NavigationMenuList isOpen={isOpen} handleClose={toggleDropdown} />}
        </StyledNavigationContainer>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
