import Skill from "../skill/skill";
import * as Styled from "./skills-box.style";

function SkillsBox({ title, items, bgColor, height }) {
  return (
    <Styled.SkillsBox bgColor={bgColor} height={height}>
      <Styled.Title bgColor={bgColor}>{title}</Styled.Title>
      {items.map((item) => (
        <Skill
          key={item.id}
          name={item.name}
          percentage={item.percentage}
          bgColor={bgColor}
        />
      ))}
    </Styled.SkillsBox>
  );
}

export default SkillsBox;
