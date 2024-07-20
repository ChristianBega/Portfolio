import "styled-components";

declare module "styled-components" {
  //^  Defines the structure & types of the defaultTheme.
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      border: string;
      accent: string;
      success: string;
      warning: string;
      error: string;
      info: string;
      color_1: string;
      color_2: string;
      color_3: string;
      color_4: string;
      color_5: string;
      color_6: string;
      color_7: string;
    };
    gradients: {
      button_gradient: string;
    };
    typography: {
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
    };
    spacing: (factor: number) => string;
    border: {};
    shadows: {};
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }

  //^ Defines the structure & types of the typography styles and responsive settings.
  export interface TypographyStyle {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    margin?: string;
    responsive?: {
      [key in keyof DefaultTheme["breakpoints"]]?: {
        fontSize: string;
      };
    };
  }
}
