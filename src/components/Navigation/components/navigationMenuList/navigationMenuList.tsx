import React from "react";
import { StyledNavigationMenuList, StyledNavigationMenuListItem } from "./index.styles";
import Typography from "../../../../components/Typography/typography";
import { MenuListItemProps, NavigationMenuListProps } from "./types";

const menuListItems: MenuListItemProps[] = [
  { label: "Home", path: "" },
  { label: "About", path: "" },
  { label: "Services", path: "" },
  { label: "Contact", path: "" },
];

const navigationLinkVariants = {
  closed: {
    display: "none",
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
  open: {
    display: "block",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};
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
