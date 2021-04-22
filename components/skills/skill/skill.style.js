import styled from "styled-components";

export const Skill = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  padding: 0 3rem 0 12rem;
  margin: 1.6rem 0;
  line-height: 2;
  @media (max-width: 415px) {
    padding: 0 3rem;
  }
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
  height: 0.3rem;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: ${({ percentage }) => `${percentage}%`};
    top: 0;
    left: 0;
    /* background-color: white; */
    background-color: ${({ bgColor }) =>
      bgColor === "#d8bf25" ? "white" : "#b7b7b7"};
  }
`;
