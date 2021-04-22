import styled from "styled-components";

export const Project = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  left: ${({ left }) => `${left}rem`};
  position: ${({ position }) => position};
  :not(:last-child) {
    margin-right: 3rem;
    @media (max-width: 415px) {
      margin-right: 0;
    }
  }
  @media (max-width: 415px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    left: 0;
    margin-bottom: 10rem;
  }
`;

export const ImageContainer = styled.div`
  height: ${({ type }) => (type === "iphone" ? "65rem" : "43.9rem")};
  width: ${({ type }) => (type === "iphone" ? "33rem" : "55rem")};
  @media (max-width: 415px) {
    width: ${({ type }) => (type === "iphone" ? "33rem" : "85%")};
    height: ${({ type }) => (type === "iphone" ? "65rem" : "280.95px")};
  }
`;
export const Name = styled.h3`
  color: white;
  font-size: 2.8rem;
  @media (max-width: 415px) {
    text-align: center;
    width: 100%;
  }
`;

export const Description = styled.p`
  /* color: white; */
  color: #b7b7b7;

  font-size: 2rem;
  width: 45rem;
  @media (max-width: 415px) {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-size: 2.4rem;
  }
`;

export const Technologie = styled.span`
  font-size: 1.8rem;
  color: #d8bf25;
  :not(:last-child) {
    margin-right: 2rem;
  }
  @media (max-width: 415px) {
    text-align: center;
    font-size: 2rem;
  }
`;
