import Title from "../title/title";
import Courses from "./courses/courses";
import * as Styled from "./online-courses.style";

function OnlineCourses() {
  return (
    <Styled.OnlineCourses id="courses">
      <Title
        title="Online Courses"
        before={"O"}
        top={1}
        description="Confidence comes from discipline and training"
        width={75}
      />
      <Courses />
    </Styled.OnlineCourses>
  );
}

export default OnlineCourses;
