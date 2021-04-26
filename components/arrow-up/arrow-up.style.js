import styled, { keyframes } from "styled-components";

const upAndDown = keyframes`
25%{
    transform: translateY(7px);
}
50% {
    transform: translateY(14px);
}
75% {
    transform: translateY(7px);
}
100% {
    transform: translateY(0);
}
`;

const upAndDownMobile = keyframes`
25%{
    transform: translateY(3px);
}
50% {
    transform: translateY(6px);
}
75% {
    transform: translateY(3px);
}
100% {
    transform: translateY(0);
}
`;
export const ArrowUp = styled.div`
  position: fixed;
  font-size: 8rem;
  bottom: 0;
  right: 0;
  z-index: 800;
  padding: 2rem 1rem;
  animation: ${upAndDown} 0.6s linear infinite;
  svg {
    cursor: pointer;
  }
  @media (max-width: 415px) {
    font-size: 3rem;
    animation: ${upAndDownMobile} 0.6s linear infinite;
  }
`;
