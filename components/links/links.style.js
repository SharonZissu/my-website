import styled from "styled-components";

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
  svg {
    font-size: 2.4rem;
    color: white;
  }

  & :not(:last-child) {
    margin-right: 2.6rem;
  }
`;
