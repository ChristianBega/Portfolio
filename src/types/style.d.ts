import "styled-components";

declare module "styled-components" {
  //^  Defines the structure & types of the defaultTheme.
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text_primary: string;
      text_secondary: string;
      border: string;
      accent: string;
      success: string;
      warning: string;
      error: string;
      info: string;
      color_light: string;
      color_link: string;
      color_1: string;
      color_2: string;
      color_3: string;
      color_4: string;
      color_5: string;
      color_5_rgba: string;
      color_6: string;
      color_7: string;
      color_8: string;
      color_9: string;
      transparent: string;
      none: string;
    };
    gradients: {
      button_gradient: string;
      button_gradient_2: string;
      link_hover_gradient: string;
    };

    typography: {
      fontFamilyButton: string;
      fontFamilyHeader: string;
      fontFamily: string;
      h1: TypographyStyle;
      h2: TypographyStyle;
      h3: TypographyStyle;
      h4: TypographyStyle;
      h5: TypographyStyle;
      h6: TypographyStyle;
      p: TypographyStyle;
      span: TypographyStyle;
      button_text: TypographyStyle;
      link_text: TypographyStyle;
      logo_text: TypographyStyle;
      tag_text: TypographyStyle;
    };
    buttons: {
      contained: ButtonStyles;
      outlined: ButtonStyles;
      circular: ButtonStyles;
    };
    spacing: (factor: number) => string;
    border: {};
    shadows: {
      button_shadow: string;
      button_shadow_transparent: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      navigation: string;
    };
  }

  //^ Defines the structure & types of the typography styles and responsive settings.
  export interface TypographyStyle {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    margin?: string;
    textTransform?: string;
    letterSpacing?: number;
    fontFamily?: string;
    borderBottomHover?: string;
    display?: string;
    paddingHover?: string;
    backgroundHover?: string;
    color?: string;
    colorHover?: string;
    textShadowHover?: string;
    cursor?: string;
    responsive?: {
      [key in keyof DefaultTheme["breakpoints"]]?: {
        fontSize: string;
      };
    };
  }

  //^ Defines the structure & types of the button styles
  export interface ButtonStyles {
    backgroundColor: keyof DefaultTheme["colors"];
    backgroundColorHover: keyof DefaultTheme["colors"];
    borderColor: keyof DefaultTheme["colors"];
    borderColorHover: keyof DefaultTheme["colors"];
    color: keyof DefaultTheme["colors"];
    padding?: string;
  }
}
