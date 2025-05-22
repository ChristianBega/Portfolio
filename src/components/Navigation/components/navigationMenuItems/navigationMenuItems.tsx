import React from "react";
import { StyledNavigationMenuListItem } from "./index.styles";
import Typography from "../../../../components/Typography/typography";
import Icon from "../../../../components/Icon/icon";
import { NavigationMenuItemsProps } from "./types";
import { navigationLinkVariants } from "../../animations/navigationMenuList";
import { HashLink } from "react-router-hash-link";

const NavigationMenuItems: React.FC<NavigationMenuItemsProps> = ({ items, isMd, variant, handleClose }) => {
  return (
    <>
      {items.map(({ path, label }, index) => (
        <StyledNavigationMenuListItem key={index} isMd={isMd} variants={variant || navigationLinkVariants}>
          <Typography
            handleClose={handleClose}
            // scroll={scrollWithOffset}
            component={HashLink}
            to={path}
            variant="link_text"
            iconEnd={<Icon src="arrow-icon-purple.svg" alt="Example Icon" size="12px" />}
          >
            {label}
          </Typography>
        </StyledNavigationMenuListItem>
      ))}
    </>
  );
};

export default NavigationMenuItems;
