import styled from "styled-components";

export const SkillsBox = styled.div`
  width: 40rem;
  height: ${({ height }) => `${height}rem`};
  background-color: ${({ bgColor }) => bgColor};
`;

export const Title = styled.h3`
  font-size: 2rem;
  color: ${({ bgColor }) => (bgColor === "#d8bf25" ? "white" : "#b7b7b7")};
  margin: 3rem 0 0 2.4rem;
`;
