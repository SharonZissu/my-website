import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  margin-top: ${({ mt }) => `${mt}rem`};
  margin-left: ${({ ml }) => `${ml}rem`};
  width: ${({ width }) => width};
  padding: ${({ p }) => `${p}rem`};
`;
