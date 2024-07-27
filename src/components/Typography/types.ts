import { HTMLAttributes, ReactNode } from "react";

export type TypographyVariant = "button_text" | "navigation_text";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  component: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  variant?: TypographyVariant;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  children?: ReactNode;
}
