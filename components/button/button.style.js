import styled from "styled-components";

export const Button = styled.button`
  padding: 1.2rem 3rem;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#d8bf25")};
  color: white;
  font-size: 2.6rem;
  border: none;
  border-radius: 10rem;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
  font-family: "Hammersmith One", sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 2rem;
    @media (max-width: 415px) {
      margin-right: 0;
    }
  }
  @media (max-width: 415px) {
    padding: 1.4rem 2rem;
    margin-bottom: 3rem;
    span {
      width: 130px;
    }
  }
`;
