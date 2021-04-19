import styled from "styled-components";

export const Years = styled.div`
  height: 100%;
  width: 6rem;
  background-color: #898989;
  position: relative;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(-90deg) translate(-50%, -50%);
    transform-origin: 0 0;
    text-align: center;
    font-size: 2.6rem;
    width: 20rem;
    letter-spacing: 0.2rem;
    font-weight: bold;
    color: white;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 40rem;
  height: 20rem;
  margin-bottom: 3rem;
  :nth-child(2n + 1) {
    margin-right: 2rem;
  }
  :nth-child(2) div:first-child {
    background-color: #d8bf25;
  }
  :nth-child(2) h3:first-child {
    color: #d8bf25;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  color: #b7b7b7;
`;
export const Location = styled.span`
  color: #a9a8a8;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;
export const Summary = styled.p`
  color: #b7b7b7;
  font-size: 1.4rem;
`;
