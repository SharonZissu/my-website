import styled from "styled-components";

export const ContactMe = styled.section`
  /* height: 100vh; */
  background-color: #0e0c0f;
  position: relative;
`;

export const TopImageContainer = styled.div`
  margin-bottom: -1rem;
  @media (max-width: 415px) {
    margin-bottom: -4rem;
    margin-left: -3rem;
  }
`;

export const LeftImageContainer = styled.div`
  position: absolute;
  top: 65%;
  left: -9.5rem;
  @media (max-width: 415px) {
    display: none;
  }
`;
