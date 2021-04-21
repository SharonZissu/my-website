import styled, { css } from "styled-components";

const inputStyles = css`
  width: 65rem;
  margin-bottom: 1.4rem;
  padding: 2rem 4rem;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: "Hammersmith One", sans-serif;
  background-color: #eee;
  border: none;
  border-radius: 1px;
  position: relative;
  z-index: 3;
  color: #5e5e5e;
  :focus {
    outline: none;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const Textarea = styled.textarea`
  ${inputStyles}
  margin-bottom: 4rem;
`;

export const Button = styled.button`
  width: 65rem;
  padding: 2rem 4rem;
  font-size: 2.2rem;
  color: white;
  font-weight: bold;
  background-color: #d8bf25;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  border-radius: 1px;
`;
