import Title from "../title/title";
import ProfileImage from "./profile-image/profile-image";
import Details from "./details/details";
import { Flex } from "../flex/flex.style";
import * as Styled from "./about-me.style";
import Navigation from "../navigation/navigation";

function AboutMe() {
  return (
    <Styled.Container>
      <Navigation />
      <Title title="About Me" before={"A"} top={-17} />
      <Flex mt={5} align="flex-start" justify="flex-start">
        <ProfileImage />
        <Details />
      </Flex>
    </Styled.Container>
  );
}

export default AboutMe;
