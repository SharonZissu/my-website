import * as Styled from "./heading.style";

function Heading() {
  return (
    <Styled.Container>
      <Styled.Span>I'm</Styled.Span>
      <Styled.Title>
        <Styled.Span color="#d8bf25">Sharon </Styled.Span>
        <Styled.Span>Zissu</Styled.Span>
      </Styled.Title>
      <Styled.Position fontSize={3}>FullStack Developer</Styled.Position>
    </Styled.Container>
  );
}

export default Heading;
