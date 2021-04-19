import EducationCard from "../education-card/education-card";
import * as Styled from "./education-cards.style";

const DUMMY_CARDS = [
  {
    id: 1,
    years: [2020],
    title: "React & Redux Course",
    location: "SQLink",
    summary:
      "After studying React independently, I decided to take a course with a Hebrew lecturer to get stronger and sharpen some topics. The course was during the Corona period and was held at Zoom for 3 months (40 hours).",
  },
  {
    id: 2,
    years: [2017, 2020],
    title: "B.Sc. Computer Science",
    location: "Holon Institute of Technology",
    summary:
      "At the age of 23, I decided to pursue a bachelor’s degree in computer science while becoming a professional football player. The degree gave me important theoretical knowledge and I really enjoyed it as part of my studies.",
  },
  {
    id: 3,
    years: [2008, 2011],
    title: "Computer Class",
    location: "Kugel High School",
    summary:
      "I always connected to computers. In high school, I decided to enroll in the computer science major and enjoyed every moment. My matriculation average was 110.",
  },
  {
    id: 4,
    years: ["Present"],
    title: "Online Courses",
    location: "Udmey",
    summary:
      "During the final year of my degree, I decided to start studying web development independently. I acquired most of my practical knowledge through a variety of online courses.",
  },
];

function EducationCards({ educationCards }) {
  return (
    <Styled.Cards>
      {DUMMY_CARDS.map((card) => (
        <EducationCard
          key={card.id}
          title={card.title}
          years={card.years}
          location={card.location}
          summary={card.summary}
        />
      ))}
    </Styled.Cards>
  );
}

export default EducationCards;
