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
  @media (max-width: 450px) {
    font-size: 50%; //1rem = 10px
    position:absolute;
    zoom: 50%;
 }
  
}
body {
  line-height: 1.6;
  min-height: 100vh;
  
  font-family: "Hammersmith One", sans-serif;
 @media (max-width: 450px) {
  position:absolute;

 }
}

section {
  padding: 10rem 0 10rem 40rem;
  width: 100%;
  
}

img {
  max-width: 100%;
  height: auto;
}

`;
