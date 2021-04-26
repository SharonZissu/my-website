import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-image: linear-gradient(to right, #111111 52.05%, #d8bf25 52.1%);
  position: relative;
  @media (max-width: 415px) {
    /* background-image: linear-gradient(to bottom, #d8bf25 32.05%, #111111 32.1%); */
    background-image: initial;

    /* background-image: linear-gradient(to bottom, #111111 37.85%, #d8bf25 37.9%); */
    margin: 2.5rem;
    background-color: #111111;
    /* background-image: radial-gradient(#d8bf25, #111111); */
    outline: 0.6rem solid #af9b22;
    /* border: 1rem solid #111111; */
    box-shadow: 15px 15px rgba(255, 255, 255, 0.35);
    overflow-y: hidden;
    z-index: 2000 !important;
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
    left: 42%;
    /* top: 52%; */
    top: 345px;
    transform: translate(-50%, -50%);
  }
`;
