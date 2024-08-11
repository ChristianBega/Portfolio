import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export interface NavigationOptions {
  path: string;
  data?: object;
}

export interface ButtonProps {
  variant: "contained" | "outlined" | "circular";
  backgroundColor?: keyof DefaultTheme["colors"];
  backgroundColorHover?: keyof DefaultTheme["colors"];
  backgroundGradient?: keyof DefaultTheme["gradients"];
  backgroundGradientHover?: keyof DefaultTheme["gradients"];
  boxShadow?: keyof DefaultTheme["shadows"];
  textColor?: keyof DefaultTheme["colors"];
  borderColor?: keyof DefaultTheme["colors"];
  borderColorHover?: keyof DefaultTheme["colors"];
  size: "sm" | "md" | "lg";
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  children?: ReactNode;
  mt?: string;
  navigationOptions?: NavigationOptions;
  buttonStyles?: object;
}
