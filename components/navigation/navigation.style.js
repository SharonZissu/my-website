import styled from "styled-components";

export const Navigation = styled.nav`
  height: 100%;
  width: 22rem;
  background-color: #af9b22;
  position: absolute;
  left: 4rem;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 100%;
`;

export const Link = styled.li`
  font-size: 1.4rem;
  font-family: "Hammersmith One", sans-serif;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;
