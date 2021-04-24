import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-image: linear-gradient(to right, #111111 52.05%, #d8bf25 52.1%);
  position: relative;
  @media (max-width: 415px) {
    /* background-image: linear-gradient(to bottom, #d8bf25 32.05%, #111111 32.1%); */
    /* background-image: initial; */
    background-image: linear-gradient(to bottom, #111111 37.85%, #d8bf25 37.9%);
    overflow-y: hidden;
  }
`;

export const Image = styled.div`
  position: relative;

  //first image
  /* height: 170rem;
  width: 127.5rem;
  left: -40.5rem;
  top: -15rem; */

  //second image
  /* height: 200rem;
  width: 150rem;
  left: -63rem;
  top: -30rem; */

  top: -20rem;
  height: 180rem;
  width: 135rem;
  left: -50rem;

  @media (max-width: 415px) {
    height: 800px;
    width: 600px;
    left: 47%;
    top: 48%;
    transform: translate(-50%, -50%);
  }
`;
