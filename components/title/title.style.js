import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  width: ${({ width }) => (width ? `${width}rem` : "55rem")};
  height: 11.6rem;

  //letter before the title
  & :before {
    content: "${({ before }) => before}";
    position: absolute;
    height: 100%;
    width: 100%;
    top: ${({ top }) => `${top}rem`};
    color: ${({ width }) =>
      width ? "rgba(216,191,37,0.7)" : "rgba(183, 183, 183, 0.1)"};
    font-size: 21rem;
    font-family: "Hammersmith One", sans-serif;
    font-weight: bold;
    @media (max-width: 415px) {
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
      top: -13rem;
      /* top: ${({ width }) => (width ? "-20rem" : "-13rem")}; */
    }
  }

  & :after {
    content: "";
    position: absolute;
    width: 30rem;
    height: 0.3rem;
    bottom: 0.5rem;
    left: ${({ width }) => (width ? "85%" : "60%")};
    background-color: ${({ width }) => (width ? "white" : "#b7b7b7")};
    border: 0;
    background-color: initial;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0)
    );
    @media (max-width: 415px) {
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      display: none;
      /* bottom: 4.5rem; //iphone */
      /* bottom: 9.6px; //samsung */

      /* bottom: ${({ top }) => (top ? "-5rem" : "4.5rem")}; */
    }
  }

  @media (max-width: 415px) {
    width: 100%;
    text-align: center;
    margin-top: 10rem;
    line-height: 1.1;
  }
`;
export const Title = styled.h1`
  /* font-size: 6rem; */
  font-size: 8rem;
  font-family: "Hammersmith One", sans-serif;
  color: ${({ color }) => (color ? "white" : "#b7b7b7")};
  text-transform: uppercase;
  position: relative;
  & :after {
    content: "";
    position: absolute;
    width: 30rem;
    height: 0.3rem;
    bottom: 0.5rem;
    left: ${({ width }) => (width ? "85%" : "60%")};
    background-color: ${({ width }) => (width ? "white" : "#b7b7b7")};
    border: 0;
    background-color: initial;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0)
    );
    @media (max-width: 415px) {
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      /* bottom: 4.5rem; //iphone */
      /* bottom: 9.6px; //samsung */

      /* bottom: ${({ top }) => (top ? "-5rem" : "4.5rem")}; */
    }
  }
  @media (max-width: 415px) {
    font-size: 7rem;
    /* width: ${({ color }) => (color ? "50%" : "100%")}; */
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
`;

export const Description = styled.p`
  color: ${({ color }) => (color ? "white" : "#5e5e5e")};
  font-size: 2.2rem;
  position: relative;
  right: ${({ color }) => (color ? "-63.5rem" : "-32.5rem")};
  width: 82rem;
  font-family: "Hammersmith One", sans-serif;
  @media (max-width: 415px) {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
    width: 80%;
  }
`;
