import * as Styled from "./skill.style";
import { Flex } from "../../flex/flex.style";

function Skill({ name, percentage, bgColor, height }) {
  return (
    <Styled.Skill>
      <Flex justify={["space-between"]} width={["100%"]}>
        <Styled.Name bgColor={bgColor}>{name}</Styled.Name>
        <Styled.PercentageNumber>{percentage}%</Styled.PercentageNumber>
      </Flex>
      <Styled.PercentageLine
        percentage={percentage}
        bgColor={bgColor}
      ></Styled.PercentageLine>
    </Styled.Skill>
  );
}

export default Skill;
