import styled from "styled-components";

export const Skill = styled.div`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0 9rem;
  margin: 1rem 0;
  line-height: 2;
`;

export const Name = styled.h5`
  color: ${({ bgColor }) => (bgColor === "#d8bf25" ? "white" : "#b7b7b7")};
`;

export const PercentageNumber = styled.span`
  color: white;
`;

export const PercentageLine = styled.div`
  background-color: #0e0c0f;
  width: 100%;
  height: 0.2rem;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: ${({ percentage }) => `${percentage}%`};
    top: 0;
    left: 0;
    background-color: white;
  }
`;
