import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  margin: ${({ margin }) => margin && margin};
  margin-top: ${({ mt }) => `${mt}rem`};
  margin-left: ${({ ml }) => `${ml}rem`};
  width: ${({ width }) => width};
  padding: ${({ p }) => `${p}rem`};
  padding-left: ${({ pl }) => `${pl}rem`};
  padding-right: ${({ pr }) => `${pr}rem`};
  padding-top: ${({ pt }) => `${pt}rem`};
  padding-bottom: ${({ pb }) => `${pb}rem`};
  text-align: ${({ textAlign }) => textAlign};
  position: ${({ position }) => position};
  left: ${({ left }) => `${left}rem`};
`;
