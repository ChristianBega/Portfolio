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
  scrollbar-width: none;  
  -ms-overflow-style: none;  
}

body {
  background-color: ${theme.colors.background};
  overflow: scroll;  
  height : 200vh;
}

button {
  background: none;
}

body::-webkit-scrollbar {
  display: none; 
}

body::-webkit-scrollbar-thumb {
  background-color: transparent;
}

body::-webkit-scrollbar-track {
  background-color: transparent;
}

`;
