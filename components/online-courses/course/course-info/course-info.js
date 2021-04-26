import * as Styled from "./course-info.style";
import { Flex } from "../../../flex/flex.style";
import Image from "next/image";

function CourseInfo({ name, by, hours, imgName, link }) {
  return (
    <Styled.CourseInfo>
      <Styled.By>{by}</Styled.By>
      <Styled.Name>{name}</Styled.Name>
      <Flex justify={["space-between"]} align={["center"]} width={["100%"]}>
        <Styled.Hours>Total Hours: {hours}</Styled.Hours>
        <Styled.UdmeyIconContainer>
          <a target="_blank" href={link}>
            <Image
              src="/images/logos/udemy-logo.png"
              alt="udmey logo"
              height={24}
              width={30}
            />
          </a>
        </Styled.UdmeyIconContainer>
      </Flex>
    </Styled.CourseInfo>
  );
}

export default CourseInfo;
