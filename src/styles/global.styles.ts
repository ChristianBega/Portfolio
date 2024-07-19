import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
export const GlobalStyle = createGlobalStyle`
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
