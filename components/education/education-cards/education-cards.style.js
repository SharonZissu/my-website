import styled from "styled-components";

export const Cards = styled.div`
  width: 102rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Hammersmith One", sans-serif;
  margin-left: 20rem;
  margin-top: 12rem;
  /* & div:nth-child(2) {
    background-color: #d8bf25;
  } */

  @media (max-width: 415px) {
    flex-direction: column;
    margin-left: 0;
    width: 100%;
    /* margin-top: 2rem; */
    margin-top: 25px;
  }
`;
