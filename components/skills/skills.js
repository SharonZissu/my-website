import * as Styled from "./skills.style";
import Title from "../title/title";
import { Flex } from "../flex/flex.style";
import SkillsBox from "./skills-box/skills-box";

const PROFFESIONAL = [
  { id: 1, name: "HTML(5)", percentage: 85 },
  { id: 2, name: "CSS(3)", percentage: 95 },
  { id: 3, name: "JavaScript", percentage: 90 },
  { id: 4, name: "ReactJS", percentage: 95 },
  { id: 5, name: "NextJS", percentage: 85 },
  { id: 6, name: "Redux", percentage: 90 },
  { id: 7, name: "NodeJS", percentage: 80 },
  { id: 8, name: "MongoDB", percentage: 70 },
  { id: 9, name: "MySQL", percentage: 60 },
  { id: 10, name: "SocketIO", percentage: 70 },
];

const LANGUAGES = [
  { id: 1, name: "Hebrew (Native)", percentage: 100 },
  { id: 2, name: "English", percentage: 80 },
];

const SOFT = [
  { id: 1, name: "Communication", percentage: 95 },
  { id: 2, name: "Teamwork", percentage: 100 },
  { id: 3, name: "Problem-Solving", percentage: 90 },
  { id: 4, name: "Creativity", percentage: 95 },
  { id: 5, name: "Attention to Detail", percentage: 100 },
  { id: 6, name: "Leadership", percentage: 95 },
];

function Skills() {
  return (
    <Styled.Skills>
      <Title
        title="My Skills"
        before={"M"}
        top={-2}
        description={"A sentence about skills, A sentence about skills."}
      />
      <Flex mt={7} ml={17}>
        <SkillsBox
          title="Professional"
          items={PROFFESIONAL}
          bgColor="#111111"
        />
        <Flex direction="column">
          <SkillsBox title="Langauges" items={LANGUAGES} bgColor="#d8bf25" />
          <SkillsBox
            title="Soft"
            items={SOFT}
            bgColor="rgba(183, 183, 183, 0.1)"
            height={32}
          />
        </Flex>
      </Flex>
    </Styled.Skills>
  );
}

export default Skills;
