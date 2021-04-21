import styled from "styled-components";
export const Career = styled.section`
  /* height: 100vh; */
  background-color: #0e0c0f;
  position: relative;
  background-image: linear-gradient(
      rgba(14, 12, 15, 0.92),
      rgba(14, 12, 15, 0.92)
    ),
    url("/images/career/football3.png") !important;
  background-size: cover;
`;

export const Image = styled.div`
  width: 42.1rem;
  height: 30rem;
  outline: 1rem solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 5;
  bottom: -4rem;

  :before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0.96rem;
    right: -0.96rem;
    border: 1rem solid rgba(216, 191, 37, 0.4);
    z-index: 0;
  }
`;

export const Summary = styled.p`
  font-size: 2.4rem;
  color: white;
  width: 50%;
  margin-right: 4rem;
  margin-top: -2rem;
  position: relative;
  z-index: 50;
  /* text-align: end; */
  /* text-align: center; */
  /* margin: 15rem auto 0 auto; */
`;
