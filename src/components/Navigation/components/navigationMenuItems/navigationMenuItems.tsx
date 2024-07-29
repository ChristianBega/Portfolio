import React from "react";
import { StyledNavigationMenuListItem } from "./index.styles";
import Typography from "../../../../components/Typography/typography";
import Icon from "../../../../components/Icon/icon";
import { NavigationMenuItemsProps } from "./types";
import { navigationLinkVariants } from "../../animations/navigationMenuList";

const NavigationMenuItems: React.FC<NavigationMenuItemsProps> = ({ items, isMd, variant }) => {
  return (
    <>
      {items.map(({ path, label }, index) => (
        <StyledNavigationMenuListItem key={index} isMd={isMd} variants={variant || navigationLinkVariants}>
          <Typography component="a" route={path} variant="link_text" iconEnd={<Icon src="arrow-icon-purple.svg" alt="Example Icon" size="12px" />}>
            {label}
          </Typography>
        </StyledNavigationMenuListItem>
      ))}
    </>
  );
};

export default NavigationMenuItems;
