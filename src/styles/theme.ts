export const theme = {
  colors: {
    primary: "#667EFF",
    secondary: "#324EE7",
    background: "#000416",
    text: "#FFFFFF",
    border: "#FFFFFF",
    accent: "#3760EE", // used has a background orb on skills section

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
  },
  gradients: {
    // ! Setup later when we start using gradients these are all the colors
    // 1A and 1B
    // 1A. #FF0808, #8125F5, #6D42FF
    // 1B. #FCD650, #FF6F6F
    // 2A and 2B
    // 2A. #08E1FF, #8125F5, #6D42FF
    // 2B. #5450FC, #FF6F6F
    // 3A and 3B
    // 3A. #54FC50, #6FA8FF
    // 3B. #00FF29, #8125F5

    // ! Setup later when we start using gradients these are all the colors
    // footer gradient for "eclipse"
    // 0038FF, 000F43, 070707

    // neon_blob_gradient_1A: "linear-gradient(0deg, _ 0%, _ 100%)",
    // neon_blob_gradient_1B: "linear-gradient(0deg, _ 0%, _ 100%)",
    // neon_blob_gradient_2A: "linear-gradient(0deg, _ 0%, _ 100%)",
    // neon_blob_gradient_2B: "linear-gradient(0deg, _ 0%, _ 100%)",
    // neon_blob_gradient_2A: "linear-gradient(0deg, _ 0%, _ 100%)",
    // neon_blob_gradient_2B: "linear-gradient(0deg, _ 0%, _ 100%)",
    button_gradient: "linear-gradient(90deg, #324EE7 0%, #667EFF 100%)",
  },
  typography: {
    fontFamilyHeader: "CustomFont_H1",
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "48px",
      // fontSize: "64px",

      fontWeight: 700,
      lineHeight: 1.2,
      margin: "0 0 1rem 0",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.3,
      margin: "0 0 1rem 0",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.4,
      margin: "0 0 1rem 0",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.5,
      margin: "0 0 1rem 0",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1.6,
      margin: "0 0 1rem 0",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.7,
      margin: "0 0 1rem 0",
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
