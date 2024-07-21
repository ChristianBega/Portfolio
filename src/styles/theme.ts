import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#667EFF",
    secondary: "#324EE7",
    background: "#000416",
    text: "#FFFFFF",
    border: "#FFFFFF",
    accent: "#3760EE",
    success: "#39FF14",
    warning: "#FFD700",
    error: "#FF073A",
    info: "#0CF",
    color_1: "#667EFF",
    color_2: "#324EE7",
    color_3: "#415DEF",
    color_4: "#1A56F0",
    color_5: "#3941FF",
    color_6: "#0038FF",
    color_7: "#000F43",
    transparent: "transparent",
  },
  gradients: {
    button_gradient: "linear-gradient(0deg, #324EE7 0%, #667EFF 100%)",
  },
  typography: {
    fontFamilyButton: "CustomFont_Button",
    fontFamilyHeader: "CustomFont_H1",
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "56px",
      fontWeight: 700,
      lineHeight: 1.3,
      margin: "0 0 .5rem 0",
      responsive: {
        lg: {
          fontSize: "96px",
        },
      },
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: 1.3,
      margin: "0 0 .5rem 0",
      responsive: {
        lg: {
          fontSize: "64px",
        },
      },
    },
    h3: {
      fontSize: "37.25px",
      fontWeight: 700,
      lineHeight: 1.3,
      margin: "0 0 .5rem 0",
      responsive: {
        lg: {
          fontSize: "52px",
        },
      },
    },
    h4: {
      fontSize: "29px",
      fontWeight: 700,
      lineHeight: 1.3,
      margin: "0 0 .5rem 0",
      responsive: {
        lg: {
          fontSize: "32px",
        },
      },
    },
    h5: {
      fontSize: "22.5px",
      fontWeight: 700,
      lineHeight: 1.3,
      margin: "0 0 .5rem 0",
      responsive: {
        lg: {
          fontSize: "20px",
        },
      },
    },
    h6: {
      fontSize: "17.5px",
      fontWeight: 700,
      lineHeight: 1.3,
      margin: "0 0 .5rem 0",
      responsive: {
        lg: {
          fontSize: "16px",
        },
      },
    },
    p: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.3,
      responsive: {
        lg: {
          fontSize: "18px",
        },
      },
    },
    span: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.3,
      responsive: {
        lg: {
          fontSize: "16px",
        },
      },
    },
  },
  buttons: {
    contained: {
      backgroundColor: "primary",
      color: "text",
    },
    outlined: {
      backgroundColor: "transparent",
      borderColor: "primary",
      color: "primary",
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,
  border: {},
  shadows: {},
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    xl: "1440px",
  },
};
