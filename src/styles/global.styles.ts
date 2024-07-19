import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import CustomFont_H1 from "../fonts/AlegreyaSansSC-Regular.ttf";
export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'CustomFont_H1';
    src: url(${CustomFont_H1}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

html {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

body {
  background-color: ${theme.colors.background};
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}
`;
