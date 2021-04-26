import styled from "styled-components";

export const Container = styled.div`
  width: 9rem;
  height: 4.2rem;
  background-color: #d8bf25;
  border-radius: 0.8rem;
  font-size: 2.4rem;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 0 2rem 10rem;
  ::after {
    content: "";
    position: absolute;
    top: 90%;
    height: 0;
    width: 0;
    height: 0;
    border-left: -25px solid transparent;
    border-right: 15px solid transparent;
    border-top: 20px solid #d8bf25;
  }
  @media (max-width: 415px) {
    margin: 0 0 2rem 0rem;
    align-self: center;
  }
`;
