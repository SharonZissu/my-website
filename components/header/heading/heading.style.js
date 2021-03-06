import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  letter-spacing: 0.2rem;
  margin-left: 7rem;
  @media (max-width: 415px) {
    margin: 0 auto;
  }
`;
export const Title = styled.h1`
  text-transform: uppercase;
  line-height: 1;
`;
export const Span = styled.span`
  color: ${({ color }) => (color ? color : "white")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "8rem")};
  font-weight: bold;
  @media (max-width: 415px) {
    font-size: ${({ fontSize }) =>
      fontSize ? `${fontSize - 0.5}rem` : "4.5rem"};
  }
`;

export const Position = styled(Span)`
  letter-spacing: 1rem;
  font-weight: initial;
  @media (max-width: 415px) {
    letter-spacing: 0.6rem;
  }
`;
