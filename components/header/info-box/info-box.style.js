import styled from "styled-components";

export const Container = styled.div`
  padding: 10rem 5rem 10rem 17rem;
  width: 94rem;
  height: 65rem;
  /* width: 87rem; */
  /* height: 67rem; */
  background-color: rgba(0, 0, 0, 0.55);
  position: absolute;
  top: 50%;
  left: 59.7%;
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
    height: 300px;
    width: 157%;
    top: 50%;
    bottom: -20%;
    left: -21%;
    transform: rotate(-15deg);
    padding: 0;
    /* align-items: center; */
    justify-content: center;
  }
`;

/* 
    height: 50%;
    width: 90%;
    top: auto;
    bottom: -20%;
    left: 50%;
    padding: 0;
*/
