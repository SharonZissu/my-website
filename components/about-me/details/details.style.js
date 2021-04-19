import styled from "styled-components";

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Hammersmith One", sans-serif;
  margin-left: 4rem;
  line-height: 1;
  position: relative;
  top: -1rem;
`;

export const Title = styled.h2`
  color: #d8bf25;
  text-transform: uppercase;
  font-size: 3rem;
`;

export const Position = styled.p`
  font-size: 2rem;
  color: #b7b7b7;
  margin: 0.4rem 0 2.6rem 0;
`;
export const Detail = styled.div`
  display: flex;
`;

export const Span = styled.span`
  color: #b7b7b7;
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: bold;
  line-height: 1.6;
`;

export const SpanNoBold = styled(Span)`
  font-weight: initial;
  color: #5e5e5e;
`;

export const Summary = styled.p`
  color: #5e5e5e;
  font-size: 1.4rem;
  margin-top: 4rem;
  line-height: 1.6;
  width: 60rem;
`;
