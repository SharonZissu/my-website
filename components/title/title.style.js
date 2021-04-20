import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: ${({ width }) => (width ? `${width}rem` : "55rem")};
  height: 11.6rem;

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
  }

  & :after {
    content: "";
    position: absolute;
    width: 30rem;
    height: 0.3rem;
    bottom: 0.5rem;
    left: ${({ width }) => (width ? "85%" : "60%")};
    background-color: ${({ width }) => (width ? "white" : "#b7b7b7")};
  }
`;
export const Title = styled.h1`
  /* font-size: 6rem; */
  font-size: 8rem;
  font-family: "Hammersmith One", sans-serif;
  color: ${({ color }) => (color ? "white" : "#b7b7b7")};
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: ${({ color }) => (color ? "white" : "#5e5e5e")};
  font-size: 2.2rem;
  position: relative;
  right: ${({ color }) => (color ? "-63.5rem" : "-32.5rem")};
  width: 82rem;
  font-family: "Hammersmith One", sans-serif;
`;
