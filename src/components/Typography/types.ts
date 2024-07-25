import { HTMLAttributes } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  component: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}
