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
*:before, *:after { content: ''; }

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
  background-color: #d8bf25;
 /* @media (max-width: 450px) {
  position:absolute;

 } */
}

section {
  padding: 10rem 0 10rem 40rem;
  /* width: 100vw; */
  position: relative;


  :not(:first-child) {
    z-index: 500;
  }
  @media (max-width: 415px) {
    padding: 1rem 0 5rem 0;
    overflow-x: hidden;
  }
}

a {
  text-decoration: none;
}

/* img {
  max-width: 100%;
  height: auto;
} */

hr {
  border: 0;
  margin: 1.35em auto;
  max-width: 100%;
  background-position: 50%;
  box-sizing: border-box;
}
`;
