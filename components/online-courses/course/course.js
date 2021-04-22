import * as Styled from "./course.style";
import Image from "next/image";
import CourseInfo from "./course-info/course-info";

function Course(props) {
  return (
    <Styled.Course>
      <Styled.ImageContainer>
        <Image
          src={`/images/courses/${props.imgName}.png`}
          alt={`${props.name} course image`}
          // width={240}
          //   height={135}
          // width={300}
          // height={169}
          layout="fill"
        />
      </Styled.ImageContainer>
      <CourseInfo {...props} />
    </Styled.Course>
  );
}

export default Course;
