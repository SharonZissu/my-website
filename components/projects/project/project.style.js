import styled from "styled-components";

export const Project = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  left: ${({ left }) => `${left}rem`};
  position: ${({ position }) => position};
  :not(:last-child) {
    margin-right: 3rem;
  }
`;

export const ImageContainer = styled.div`
  height: ${({ type }) => (type === "iphone" ? "65rem" : "43.9rem")};
  width: ${({ type }) => (type === "iphone" ? "33rem" : "55rem")};
`;
export const Name = styled.h3`
  color: white;
  font-size: 2.8rem;
`;

export const Description = styled.p`
  /* color: white; */
  color: #b7b7b7;

  font-size: 2rem;
  width: 45rem;
`;

export const Technologie = styled.span`
  font-size: 1.8rem;
  color: #d8bf25;
  :not(:last-child) {
    margin-right: 2rem;
  }
`;
