import { HTMLAttributes } from "react";

export type TypographyVariant = "button_text";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  component: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  variant?: TypographyVariant;
}
