import styled from "styled-components";

export const Container = styled.div`
  padding: 10rem 5rem 10rem 17rem;
  width: 90rem;
  height: 65rem;
  /* width: 87rem; */
  /* height: 67rem; */
  background-color: rgba(0, 0, 0, 0.55);
  position: absolute;
  top: 50%;
  left: 58.5%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Hammersmith One", sans-serif;
  @media (max-width: 415px) {
    /* width: 47rem;
    height: 57rem; */
    /* width: 301px;
    height: 400px; */
    /* background-color: rgba(216, 191, 37, 0.75); */
    height: 40%;
    width: 80%;
    top: auto;
    bottom: -10%;
    left: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
  }
`;
