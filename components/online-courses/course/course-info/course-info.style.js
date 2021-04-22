import styled from "styled-components";

export const CourseInfo = styled.div`
  transition: all 0.4s;
  position: absolute;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 14;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  visibility: hidden;
  opacity: 0;
`;

export const By = styled.h3`
  color: #d8bf25;
  text-transform: uppercase;
  font-size: 1.4rem;
  @media (max-width: 415px) {
    font-size: 2.2rem;
  }
`;
export const Name = styled.h2`
  color: white;
  font-size: 1.7rem;
  text-align: center;
  @media (max-width: 415px) {
    font-size: 2.7rem;
  }
`;
export const Hours = styled.span`
  color: #d8bf25;
  font-size: 1.3rem;
  @media (max-width: 415px) {
    font-size: 2rem;
  }
`;

export const UdmeyIconContainer = styled.div``;
