import * as Styled from "./courses.style";
import Course from "../course/course";
import { onlineCourses, inProgressCourses } from "../../../helpers/courses";

function Courses() {
  return (
    <>
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

      <Styled.H3>In Progress...</Styled.H3>
      <Styled.InProgressCourses>
        {inProgressCourses.map(({ name, by, hours, imgName, link }, i) => (
          <Course
            key={i}
            name={name}
            by={by}
            hours={hours}
            imgName={imgName}
            link={link}
          />
        ))}
      </Styled.InProgressCourses>
    </>
  );
}

export default Courses;
