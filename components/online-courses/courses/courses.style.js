import styled from "styled-components";

export const Courses = styled.div`
  display: flex;
  /* width: 78rem; */
  width: 102rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10rem;
  margin-left: 24rem;
  @media (max-width: 415px) {
    margin-left: 0;
    width: 100%;
    margin-top: 20rem;
    margin-bottom: 5rem;
  }
`;

export const InProgressCourses = styled(Courses)`
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 0;
  padding-left: 1.6rem;
  @media (max-width: 415px) {
    padding-left: 0;
    width: 100%;
    margin-bottom: 3rem;
    align-items: center;
    justify-content: center;
  }
`;

export const H3 = styled.h3`
  color: white;
  font-size: 3rem;
  width: 78rem;
  margin: 2rem 0 2rem 27rem;
  @media (max-width: 415px) {
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;
