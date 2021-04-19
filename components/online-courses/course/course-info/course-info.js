import * as Styled from "./course-info.style";

function CourseInfo({ name, by, hours, imgName, link }) {
  return (
    <Styled.CourseInfo>
      <Styled.By>{by}</Styled.By>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Hours>Total Hours: {hours}</Styled.Hours>
    </Styled.CourseInfo>
  );
}

export default CourseInfo;
