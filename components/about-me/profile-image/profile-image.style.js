import styled from "styled-components";

export const Image = styled.div`
  width: 30rem;
  height: 38.1rem;
  outline: 1rem solid white;
  position: relative;
  z-index: 5;

  :before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 1rem;
    left: -1rem;
    border: 1rem solid #d8bf25;
    z-index: 0;
  }
`;
