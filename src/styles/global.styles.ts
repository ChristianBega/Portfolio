import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import CustomFont_H1 from "../fonts/AlegreyaSansSC-Regular.ttf";
import CustomFont_Button from "../fonts/Montserrat-Regular.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'CustomFont_H1';
    src: url(${CustomFont_H1}) format('truetype');
    font-weight: normal;
    font-style: normal;
}


@font-face {
    font-family: 'CustomFont_Button';
    src: url(${CustomFont_Button}) format('truetype');
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

button {
  background: none;
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
