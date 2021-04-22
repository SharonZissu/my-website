import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-image: linear-gradient(to right, #111111 52.05%, #d8bf25 52.1%);
  position: relative;
  @media (max-width: 415px) {
    background-image: linear-gradient(to bottom, #d8bf25 32.05%, #111111 32.1%);
    /* background-image: linear-gradient(to bottom, #111111 32.05%, #d8bf25 32.1%); */
    overflow-y: hidden;
  }
`;

export const Image = styled.div`
  position: relative;
  height: 100rem;
  width: 59.1rem;
  left: -20rem;
  top: -6rem;

  @media (max-width: 415px) {
    height: 550px;
    width: 325px;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
  }
`;
