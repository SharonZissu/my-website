import * as Styled from "./title.style";

function Title({ isIOS, title, before, top, description, width }) {
  return (
    <Styled.Container isIOS={isIOS} before={before} top={top} width={width}>
      <Styled.Title color={width}>{title}</Styled.Title>
      {description && (
        <Styled.Description color={width}>"{description}"</Styled.Description>
      )}
    </Styled.Container>
  );
}

export default Title;
