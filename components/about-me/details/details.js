import * as Styled from "./details.style";

function Details() {
  return (
    <Styled.Details>
      <Styled.Title>Name: Sharon Zissu</Styled.Title>
      <Styled.Position>
        <i>FullStack Developer</i>
      </Styled.Position>
      <Styled.Detail>
        <Styled.Span>
          <u>
            <i>Age:</i>
          </u>
        </Styled.Span>
        <Styled.SpanNoBold>28.</Styled.SpanNoBold>
      </Styled.Detail>
      <Styled.Detail>
        <Styled.Span>
          <u>
            <i>Address:</i>
          </u>
        </Styled.Span>
        <Styled.SpanNoBold>Holon, Israel.</Styled.SpanNoBold>
      </Styled.Detail>

      <Styled.Detail>
        <Styled.Span>
          <u>
            <i>Degree:</i>
          </u>
        </Styled.Span>
        <Styled.SpanNoBold>B.Sc. Computer Science.</Styled.SpanNoBold>
      </Styled.Detail>
      <Styled.Detail>
        <Styled.Span>
          <u>
            <i>Interests:</i>
          </u>
        </Styled.Span>
        <Styled.SpanNoBold>
          sports, watching movies, traveling.
        </Styled.SpanNoBold>
      </Styled.Detail>
      <Styled.Detail>
        <Styled.Span>
          <u>
            <i>E-Mail:</i>
          </u>
        </Styled.Span>
        <Styled.SpanNoBold>sharonzissu10@gmail.com.</Styled.SpanNoBold>
      </Styled.Detail>

      <Styled.Summary>
        Highly motivated to succeed and wishing to enter the Hi-Tech industry.
        <br />
        With a Bachelor's degree in compuer science.
        <br /> Intuitive, deductive and self-taught with attention to details
        and accuracy.
        <br /> Excellent communication skills and interpersonal relations.
      </Styled.Summary>
    </Styled.Details>
  );
}

export default Details;
