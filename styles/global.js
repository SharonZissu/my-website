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
  /* background-color: #d8bf25; */
  /* background-image: radial-gradient(#af9b22, #d8bf25); */
  background-color: #000;
  background-image: repeating-linear-gradient(transparent, transparent 50px, rgba(216,191,37, .25) 50px,rgba(216,191,37, .25) 100px), repeating-linear-gradient(90deg, rgba(216,191,37, .25), rgba(216,191,37, .25) 50px, transparent 50px, transparent 100px), repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(255,255,255,.1) 4px, rgba(255,255,255,.1) 8px), repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,.1) 4px, rgba(255,255,255,.1) 8px), repeating-linear-gradient(transparent, transparent 20px, rgba(250,248,100, .2) 20px, rgba(250,248,100, .2) 21px, transparent 21px,transparent 29px, rgba(250,248,100, .2) 29px, rgba(250,248,100, .2) 30px, transparent 30px, transparent 50px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(250,248,100, .2) 20px, rgba(250,248,100, .2) 21px, transparent 21px,transparent 29px, rgba(250,248,100, .2) 29px, rgba(250,248,100, .2) 30px, transparent 30px, transparent 50px);
}
 
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
    padding: 50px 0 50px 0;
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
  margin: 0 auto 12rem auto;
  max-width: 90%;
  background-position: 50%;
  box-sizing: border-box;
}
`;
