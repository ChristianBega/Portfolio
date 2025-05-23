import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#667EFF",
    secondary: "#324EE7",
    background: "#000416",
    text_primary: "rgba(255,255,255,.6)",
    text_secondary: "rgba(255,255,255, 1)",
    border: "#FFFFFF",
    accent: "#3760EE",
    success: "#39FF14",
    warning: "#FFD700",
    error: "#FF073A",
    info: "#0CF",
    color_light: "rgba(255,255,255, 0.1)",
    color_link: "#E9DEFF",
    color_1: "#667EFF",
    color_2: "#324EE7",
    color_3: "#415DEF",
    color_4: "#1A56F0",
    color_5: "#3941FF",
    color_5_rgba: "rgba(57, 64, 255, 0.1)",
    color_6: "#0038FF",
    color_7: "#3D2DF7",
    color_8: "#000F43",
    color_9: "#070B1D",
    transparent: "rgba(0,0,0,0)",
    none: "none",
  },
  gradients: {
    button_gradient: "linear-gradient(0deg, #667EFF 0%, #324EE7  100%)",
    button_gradient_2: "linear-gradient(0deg, #FF073A 0%, #39FF14 100%)",
    link_hover_gradient: "linear-gradient(to-top, rgba(255,255,255, 0) 0%, rgba(255,255,255, 1) 100%)",
  },
  typography: {
    fontFamilyButton: "CustomFont_Button",
    fontFamilyHeader: "CustomFont_H1",
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "50px",
      fontWeight: 400,
      lineHeight: 1.3,
      margin: "0 0 .5rem 0",
      responsive: {
        lg: {
          fontSize: "96px",
        },
      },
    },
    h2: {
      fontSize: "40px",
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
      fontSize: "32px",
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
    button_text: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.3,
      responsive: {
        lg: {
          fontSize: "14px",
        },
      },
    },
    link_text: {
      fontFamily: "CustomFont_Button",
      fontSize: "14px",
      color: "#E9DEFF",
      textTransform: "uppercase",
      fontWeight: 500,
      lineHeight: 1.3,
      cursor: "pointer",
      borderBottomHover: "1px solid #fff",
      paddingHover: "12px",
      backgroundHover: "linear-gradient(180deg, rgba(255,255,255, .01) 0%, rgba(255,255,255, .1) 90%)",
      colorHover: "#fff",
      display: "flex",
      responsive: {
        lg: {
          fontSize: "14px",
        },
      },
    },
    logo_text: {
      display: "flex",
      fontFamily: "CustomFont_Button",
      fontSize: "16px",
      letterSpacing: 0.1,
      textTransform: "uppercase",
      fontWeight: 500,
      lineHeight: 1.3,
      color: "#fff",
      cursor: "pointer",
      textShadowHover: "1px 1px 8px #fff",
      responsive: {
        lg: {
          fontSize: "16px",
        },
      },
    },
    tag_text: {
      fontFamily: "CustomFont_Button",
      color: "color_5_rgba",
      fontWeight: 800,
      fontSize: "12px",
      lineHeight: 1.3,
      letterSpacing: 0.1,
      textTransform: "capitalize",
    },
  },
  buttons: {
    contained: {
      backgroundColor: "primary",
      backgroundColorHover: "color_9",
      borderColor: "transparent",
      borderColorHover: "primary",
      color: "text_secondary",
    },
    outlined: {
      backgroundColor: "color_9",
      backgroundColorHover: "primary",
      borderColor: "primary",
      borderColorHover: "transparent",
      color: "text_secondary",
    },
    circular: {
      backgroundColor: "color_9",
      backgroundColorHover: "primary",
      borderColor: "primary",
      borderColorHover: "transparent",
      color: "text_secondary",
      padding: "8px",
      borderRadius: "50%",
    },
    replay: {
      backgroundColor: "transparent",
      backgroundColorHover: "transparent",
      borderColor: "transparent",
      borderColorHover: "transparent",
      color: "text_secondary",
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,
  border: {},
  shadows: {
    button_shadow:
      "0 0 19px 9px rgba(61, 45, 247, 0.1), 0 0 46.85px 0 rgba(49, 45, 247, 0.1), 0 0 25.48px 0 rgba(49, 45, 247, 0.1), 0 0 13px 0 rgba(73, 45, 247, 0.1), 0 0 6.52px 0 rgba(45, 41, 247, 0.1), 0 0 3.15px 0 rgba(45, 41, 247, 0.1);",
    button_shadow_transparent: "0 0 19px 9px rgba(255, 255, 255, 0), 0 0 46.85px 0 rgba(255, 255, 255, 0)",
    replay_button_shadow_transparent: " 0 0 10px 5px rgba(255, 255, 255, 0.2), 0 0 50px 8px rgba(255, 255, 255, .2)",
  },
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    navigation: "1310px",
    xl: "1440px",
    xxl: "1730px",
  },
};
