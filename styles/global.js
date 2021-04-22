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

*:focus{
  outline: none;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; //1rem = 10px
  overflow-x: hidden;
  @media (max-width: 415px) {
    font-size: 40%; //1rem = 6.4px
    width: 100vw;
 }
  
}
body {
  line-height: 1.6;
  min-height: 100vh;
  width: 100vw;
  font-family: "Hammersmith One", sans-serif;
 /* @media (max-width: 450px) {
  position:absolute;

 } */
}

section {
  padding: 10rem 0 10rem 40rem;
  /* width: 100vw; */
  @media (max-width: 415px) {
    padding: 10rem 0 5rem 0;
  overflow-x: hidden;

 }
}

/* img {
  max-width: 100%;
  height: auto;
} */

`;
