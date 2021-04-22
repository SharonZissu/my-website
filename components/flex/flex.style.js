import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction && direction[0]};
  align-items: ${({ align }) => align && align[0]};
  justify-content: ${({ justify }) => justify && justify[0]};
  margin: ${({ margin }) => margin && margin[0]};
  margin-top: ${({ mt }) => mt && `${mt[0]}rem`};
  margin-left: ${({ ml }) => ml && `${ml[0]}rem`};
  margin-bottom: ${({ mb }) => mb && `${mb[0]}rem`};
  width: ${({ width }) => width && width[0]};
  padding: ${({ p }) => p && `${p[0]}rem`};
  padding-left: ${({ pl }) => pl && `${pl[0]}rem`};
  padding-right: ${({ pr }) => pr && `${pr[0]}rem`};
  padding-top: ${({ pt }) => pt && `${pt[0]}rem`};
  padding-bottom: ${({ pb }) => pb && `${pb[0]}rem`};
  text-align: ${({ textAlign }) => textAlign && textAlign[0]};
  position: ${({ position }) => position && position[0]};
  left: ${({ left }) => left && `${left[0]}rem`};

  @media (max-width: 415px) {
    flex-direction: ${({ direction }) => direction && direction[1]};
    align-items: ${({ align }) => align && align[1]};
    justify-content: ${({ justify }) => justify && justify[1]};
    margin: ${({ margin }) => margin && margin[1]};
    margin-top: ${({ mt }) => mt && `${mt[1]}rem`};
    margin-left: ${({ ml }) => ml && `${ml[1]}rem`};
    margin-bottom: ${({ mb }) => mb && `${mb[1]}rem`};
    width: ${({ width }) => width && width[1]};
    padding: ${({ p }) => p && `${p[1]}rem`};
    padding-left: ${({ pl }) => pl && `${pl[1]}rem`};
    padding-right: ${({ pr }) => pr && `${pr[1]}rem`};
    padding-top: ${({ pt }) => pt && `${pt[1]}rem`};
    padding-bottom: ${({ pb }) => pb && `${pb[1]}rem`};
    text-align: ${({ textAlign }) => textAlign && textAlign[1]};
    position: ${({ position }) => position && position[1]};
    left: ${({ left }) => left && `${left[1]}rem`};
  }
`;
