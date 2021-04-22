import styled from "styled-components";

export const Course = styled.div`
  /* width: 24rem; */
  /* height: 13.5rem; */
  width: 30rem;
  height: 16.9rem;
  margin: 1.6rem;
  position: relative;
  transition: all 0.4s;
  z-index: 1;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  @media (max-width: 415px) {
    width: 185px;
    height: 101px;
    margin: 1.2rem;
  }
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
  }
  &:hover {
    transform: scale(1.1);
    @media (max-width: 415px) {
      transform: scale(1.05);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  z-index: 5;
  width: 30rem;
  height: 16.9rem;
  @media (max-width: 415px) {
    width: 185px;
    height: 101px;
  }
`;
