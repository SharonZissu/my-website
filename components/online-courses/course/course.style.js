import styled from "styled-components";

export const Course = styled.div`
  width: 24rem;
  height: 13.5rem;
  margin: 1rem;
  background-color: red;
  position: relative;
  transition: all 0.4s;
  z-index: 1;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  & ::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(216, 191, 37, 0.5);
    z-index: 13;
  }
  & :hover div:nth-child(2) {
    opacity: 1 !important;
    visibility: visible !important;
    /* z-index: 9 !important; */
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  z-index: 5;
  /* transition: all 0.4s; */
  /* & ::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(216, 191, 37, 0.6);
    z-index: 5;
  }
  &:hover::after {
    visibility: hidden;
    opacity: 0;
  }
  &:hover {
    z-index: 0;
  } */
`;
