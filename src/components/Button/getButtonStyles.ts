import { DefaultTheme } from "styled-components";
import { ButtonProps } from "./types";

export const getButtonStyles = (props: ButtonProps & { theme: DefaultTheme }) => {
  const {
    theme,
    variant,
    backgroundColor,
    textColor,
    borderColor,
    backgroundGradient,
    borderColorHover,
    backgroundColorHover,
    backgroundGradientHover,
  } = props;
  const defaultStyles = theme.buttons[variant];

  const background = backgroundColor
    ? theme.colors[backgroundColor]
    : backgroundGradient
    ? theme.gradients[backgroundGradient]
    : theme.colors[defaultStyles.backgroundColor];

  const backgroundHover = backgroundColorHover
    ? backgroundColorHover
    : backgroundGradientHover
    ? theme.gradients[backgroundGradientHover]
    : theme.colors[defaultStyles.backgroundColorHover];

  const color = textColor ? theme.colors[textColor] : theme.colors[defaultStyles.color];

  const border = borderColor ? theme.colors[borderColor] : theme.colors[defaultStyles.borderColor];

  const borderHover = borderColorHover ? theme.colors[borderColorHover] : theme.colors[defaultStyles.borderColorHover];

  return {
    background,
    backgroundHover,
    color,
    border,
    borderHover,
  };
};
