import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/reset.styles.css";
import { ThemeProvider } from "styled-components";
import { router } from "./routes.tsx";
import { BrowserRouter } from "react-router-dom";

// Styles
import { theme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/global.styles.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
