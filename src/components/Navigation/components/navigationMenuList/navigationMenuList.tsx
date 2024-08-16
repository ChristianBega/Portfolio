import React from "react";
import { StyledNavigationMenuList } from "./index.styles";
import { NavigationMenuListProps } from "./types";
import { desktopNavigationLinkVariants, navigationLinkVariants } from "../../animations/navigationMenuList";
import useMediaQueries from "../../../../utils/useMediaQueries/useMediaQueries";
import NavigationMenuItems from "../navigationMenuItems/navigationMenuItems";

const menuListItems = [
  { label: "Home", path: "/#top" },
  { label: "About", path: "/#about-section" },
  { label: "Projects", path: "/#featured-projects-section" },
  { label: "Contact", path: "/#contact" },
];

const NavigationMenuList: React.FC<NavigationMenuListProps> = ({ isOpen }) => {
  const { isMd } = useMediaQueries();

  return (
    <StyledNavigationMenuList
      isMd={isMd}
      role="list"
      id="navigation-menu"
      initial={isMd ? "open" : "closed"}
      animate={isMd ? (isOpen ? "open" : "open") : isOpen ? "open" : "closed"}
      variants={isMd ? desktopNavigationLinkVariants : navigationLinkVariants}
    >
      <NavigationMenuItems items={menuListItems} isMd={isMd} variant={navigationLinkVariants} />
    </StyledNavigationMenuList>
  );
};

export default NavigationMenuList;
