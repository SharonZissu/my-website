import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; //1rem = 10px
  /* font-size: 75%; //1rem = 12px */
  /* font-size: 81.25%; //1rem = 13px */
  /* zoom: 100%; */
}
body {
  line-height: 1.6;
  min-height: 100vh;
  font-family: "Hammersmith One", sans-serif;

}

section {
  padding: 10rem 0 10rem 40rem;

}

`;
