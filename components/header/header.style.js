import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-image: linear-gradient(to right, #111111 52.05%, #d8bf25 52.1%);
  position: relative;
  @media (max-width: 415px) {
    background-image: linear-gradient(to bottom, #d8bf25 32.05%, #111111 32.1%);
  }
`;

export const Image = styled.div`
  position: relative;
  left: -4rem;
  top: -3rem;
`;
