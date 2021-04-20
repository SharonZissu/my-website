import styled from "styled-components";

export const SkillsBox = styled.div`
  width: 50rem;
  height: ${({ height }) => `${height}rem`};
  background-color: ${({ bgColor }) => bgColor};
  padding-bottom: 3rem;
`;

export const Title = styled.h3`
  font-size: 2.6rem;
  color: ${({ bgColor }) => (bgColor === "#d8bf25" ? "white" : "#b7b7b7")};
  margin: 3rem 0 0 2.4rem;
`;
