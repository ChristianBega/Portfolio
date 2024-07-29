interface MenuListItemProps {
  path: string;
  label: string;
}

export interface NavigationMenuItemsProps {
  items: MenuListItemProps[];
  isMd: boolean;
  variant?: any;
}
