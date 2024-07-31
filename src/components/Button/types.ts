import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

//^ Defines the structure and types of the button props
export interface ButtonProps {
  variant: "contained" | "outlined";
  backgroundColor?: keyof DefaultTheme["colors"];
  backgroundColorHover?: keyof DefaultTheme["colors"];
  backgroundGradient?: keyof DefaultTheme["gradients"];
  backgroundGradientHover?: keyof DefaultTheme["gradients"];
  textColor?: keyof DefaultTheme["colors"];
  borderColor?: keyof DefaultTheme["colors"];
  borderColorHover?: keyof DefaultTheme["colors"];
  size: "sm" | "md" | "lg";
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  children?: ReactNode;
  mt?: string;
}
