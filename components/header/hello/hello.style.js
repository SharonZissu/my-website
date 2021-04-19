import styled from "styled-components";

export const Container = styled.div`
  width: 8.4rem;
  height: 3.6rem;
  background-color: #d8bf25;
  border-radius: 0.8rem;
  font-size: 2rem;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 0 2rem 2rem;
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
`;
