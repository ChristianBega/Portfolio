import { HTMLAttributes, ReactNode } from "react";

export type TypographyVariant = "button_text" | "link_text" | "logo_text" | "tag_text";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  component: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  variant?: TypographyVariant;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  children?: ReactNode | string;
  keyWords?: string[];
  route?: string;
  href?: string;
  justifyContent?: string;
  mb?: string;
  to?: string;
  scroll?: object;
}
