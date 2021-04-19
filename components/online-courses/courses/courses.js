import * as Styled from "./courses.style";
import Course from "../course/course";
import { onlineCourses } from "../../../helpers/courses";

function Courses() {
  return (
    <Styled.Courses>
      {onlineCourses.map(({ name, by, hours, imgName, link }, i) => (
        <Course
          key={i}
          name={name}
          by={by}
          hours={hours}
          imgName={imgName}
          link={link}
        />
      ))}
    </Styled.Courses>
  );
}

export default Courses;
