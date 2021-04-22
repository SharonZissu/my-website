import styled from "styled-components";

export const Navigation = styled.nav`
  height: 100%;
  width: 26rem;
  background-color: #af9b22;
  position: absolute;
  left: 6rem;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 415px) {
    display: none;
  }
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
  font-size: 1.7rem;
  font-family: "Hammersmith One", sans-serif;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;
