import Title from "../title/title";
import EducationCards from "./education-cards/education-cards";

import * as Styled from "./education.style";

function Education() {
  return (
    <Styled.Container>
      <Title
        title="Education"
        before={"E"}
        top={-1}
        description="Life without knowledge is death in disguise"
      />
      <EducationCards />
    </Styled.Container>
  );
}

export default Education;
