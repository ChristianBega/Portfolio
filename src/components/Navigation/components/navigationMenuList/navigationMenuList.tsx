import React from "react";
import { StyledNavigationMenuList, StyledNavigationMenuListItem } from "./index.styles";
import Typography from "../../../../components/Typography/typography";
import { MenuListItemProps, NavigationMenuListProps } from "./types";
import { navigationLinkVariants } from "../../animations/navigationMenuList";

const menuListItems: MenuListItemProps[] = [
  { label: "Home", path: "" },
  { label: "About", path: "" },
  { label: "Services", path: "" },
  { label: "Contact", path: "" },
];

const NavigationMenuList: React.FC<NavigationMenuListProps> = ({ isOpen }) => {
  return (
    <StyledNavigationMenuList
      role="list"
      id="navigation-menu"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={navigationLinkVariants}
    >
      {menuListItems.map(({ path, label }, index) => (
        <StyledNavigationMenuListItem variants={navigationLinkVariants} key={index}>
          <Typography component="p" variant="navigation_text">
            {label}
          </Typography>
        </StyledNavigationMenuListItem>
      ))}
    </StyledNavigationMenuList>
  );
};

export default NavigationMenuList;
