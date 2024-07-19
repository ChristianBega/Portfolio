import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/reset.styles.css";
import { ThemeProvider } from "styled-components";

// Styles
import { theme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/global.styles.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
