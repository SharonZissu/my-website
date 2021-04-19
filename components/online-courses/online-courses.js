import Title from "../title/title";
import Courses from "./courses/courses";
import * as Styled from "./online-courses.style";

function OnlineCourses() {
  return (
    <Styled.OnlineCourses>
      <Title
        title="Online Courses"
        before={"O"}
        top={-0.5}
        description={"A sentence about education, A sentence about education."}
        width={55}
      />
      <Courses />
    </Styled.OnlineCourses>
  );
}

export default OnlineCourses;
