import Title from "../title/title";
import EducationCards from "./education-cards/education-cards";

import * as Styled from "./education.style";

function Education() {
  return (
    <Styled.Container>
      <Title
        title="Education"
        before={"E"}
        top={-2}
        description={"A sentence about education, A sentence about education."}
      />
      <EducationCards />
    </Styled.Container>
  );
}

export default Education;
