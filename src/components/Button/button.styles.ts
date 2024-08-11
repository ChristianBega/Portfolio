import { css } from "styled-components";
import { getButtonStyles } from "./getButtonStyles";
import { ButtonProps } from "./types";

const buttonStyles = css<ButtonProps>`
  position: relative;
  background: none;
  color: ${(props) => getButtonStyles(props).color};
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  line-height: 1;
  transition: all 1s ease;
  z-index: 1;

  margin-top: ${(props) => (props.mt ? props.mt : "none")};
  display: ${({ iconStart, iconEnd }) => (iconStart || iconEnd ? "flex" : "inline-block")};
  align-items: ${({ iconStart, iconEnd }) => (iconStart || iconEnd ? "center" : "initial")};
  justify-content: ${({ iconStart, iconEnd }) => (iconStart || iconEnd ? "center" : "initial")};

  border-radius: ${(props) => (props.size === "sm" ? "19px" : props.size === "md" ? "12px" : "100px")};
  font-size: ${(props) => (props.size === "sm" ? "14px" : props.size === "md" ? "16px" : "24px")};
  font-family: ${(props) => props.theme.typography.fontFamilyButton};
  box-shadow: ${(props) => (props.boxShadow ? props.theme.shadows[props.boxShadow] : props.theme.shadows.button_shadow)};

  padding: ${(props) =>
    props.variant === "circular"
      ? props.theme.buttons[props.variant].padding
      : props.size === "sm"
      ? "10px 14px"
      : props.size === "md"
      ? "13px 16px"
      : "12px 24px"};

  /* Hover Gradients */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: opacity 0.5s linear;
    border-radius: inherit;
  }
  &::before {
    border: ${(props) => `1px solid ${getButtonStyles(props).border}`};
    background-image: ${(props) =>
      props.backgroundGradient
        ? getButtonStyles(props).background
        : `linear-gradient(0deg, ${getButtonStyles(props).background} 0%, ${getButtonStyles(props).background} 100%)`};
    opacity: 1;
  }
  &::after {
    border: ${(props) => (props.variant === "outlined" ? "none" : `1px solid ${getButtonStyles(props).borderHover}`)};
    background-image: ${(props) =>
      props.backgroundGradientHover
        ? getButtonStyles(props).backgroundHover
        : `linear-gradient(0deg, ${getButtonStyles(props).backgroundHover} 0%, ${getButtonStyles(props).backgroundHover} 100%)`};
    opacity: 0;
  }
  &:hover::before {
    opacity: 0;
  }
  &:hover::after {
    opacity: 1;
  }
`;

export default buttonStyles;

// bgColor, bgColorHover
// borderColor, borderColorHover
// color
