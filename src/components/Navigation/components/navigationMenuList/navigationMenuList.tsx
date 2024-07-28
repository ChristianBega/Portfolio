import React from "react";
import { StyledNavigationMenuList, StyledNavigationMenuListItem } from "./index.styles";
import Typography from "../../../../components/Typography/typography";
import { MenuListItemProps, NavigationMenuListProps } from "./types";
import { navigationLinkVariants, desktopNavigationLinkVariants } from "../../animations/navigationMenuList";
import Icon from "../../../../components/Icon/icon";
import useMediaQueries from "../../../../utils/useMediaQueries/useMediaQueries";

const menuListItems: MenuListItemProps[] = [
  { label: "Home", path: "" },
  { label: "About", path: "" },
  { label: "Projects", path: "" },
  { label: "Contact", path: "" },
];

const NavigationMenuList: React.FC<NavigationMenuListProps> = ({ isOpen }) => {
  const { isMd } = useMediaQueries();

  return (
    <>
      {isMd ? (
        <StyledNavigationMenuList
          isMd={isMd}
          role="list"
          id="navigation-menu"
          initial="open"
          animate={isOpen ? "open" : "open"}
          variants={desktopNavigationLinkVariants}
        >
          {menuListItems.map(({ path, label }, index) => (
            <StyledNavigationMenuListItem isMd={isMd} variants={navigationLinkVariants} key={index}>
              <Typography component="p" variant="link_text" iconEnd={<Icon src="arrow-icon-purple.svg" alt="Example Icon" size="12px" />}>
                {label}
              </Typography>
            </StyledNavigationMenuListItem>
          ))}
        </StyledNavigationMenuList>
      ) : (
        <StyledNavigationMenuList
          role="list"
          id="navigation-menu"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={navigationLinkVariants}
        >
          {menuListItems.map(({ path, label }, index) => (
            <StyledNavigationMenuListItem variants={navigationLinkVariants} key={index} isMd={isMd}>
              <Typography component="p" variant="link_text" iconEnd={<Icon src="arrow-icon-purple.svg" alt="Example Icon" size="12px" />}>
                {label}
              </Typography>
            </StyledNavigationMenuListItem>
          ))}
        </StyledNavigationMenuList>
      )}
    </>
  );
};

export default NavigationMenuList;
