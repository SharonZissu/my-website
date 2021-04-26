import styled, { css } from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  li:nth-child(2) svg {
    color: #af9b22;
  }
`;

export const Icon = styled.li`
  list-style: none;
  position: relative;
  transition: all 0.4s;
  svg {
    font-size: 2.4rem;
    color: white;
  }

  & :not(:last-child) {
    margin-right: 2.6rem;
  }

  ${({ icon }) =>
    icon &&
    css`
      :hover::after {
        content: "054-4666355";
        position: absolute;
        /* height: ; */
        /* width: 15rem; */
        bottom: -5rem;
        left: -5rem;
        color: white;
        background-color: #d8bf25;
        font-size: 2rem;
        width: 14rem;
        text-align: center;
        padding: 0.2rem 0.6rem;
        font-weight: bold;
        box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
      }
    `}
`;
