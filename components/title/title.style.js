import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: ${({ width }) => (width ? `${width}rem` : "40rem")};
  height: 9.6rem;

  & :before {
    content: "${({ before }) => before}";
    position: absolute;
    height: 100%;
    width: 100%;
    top: ${({ top }) => `${top}rem`};
    color: ${({ width }) =>
      width ? "rgba(216,191,37,0.7)" : "rgba(183, 183, 183, 0.1)"};
    font-size: 19rem;
    font-family: "Hammersmith One", sans-serif;
    font-weight: bold;
  }

  & :after {
    content: "";
    position: absolute;
    width: 20rem;
    height: 0.2rem;
    bottom: 1rem;
    left: ${({ width }) => (width ? "85%" : "65%")};
    background-color: ${({ width }) => (width ? "white" : "#b7b7b7")};
  }
`;
export const Title = styled.h1`
  font-size: 6rem;
  font-family: "Hammersmith One", sans-serif;
  color: ${({ color }) => (color ? "white" : "#b7b7b7")};
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: ${({ color }) => (color ? "white" : "#5e5e5e")};

  font-size: 1.8rem;
  position: relative;
  bottom: -1rem;
  right: ${({ color }) => (color ? "-46.5rem" : "-25.5rem")};

  width: 50rem;
  font-family: "Hammersmith One", sans-serif;
`;
