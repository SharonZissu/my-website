import Title from "../title/title";
import ProfileImage from "./profile-image/profile-image";
import Details from "./details/details";
import { Flex } from "../flex/flex.style";
import * as Styled from "./about-me.style";
import Navigation from "../navigation/navigation";
import { isIOS } from "react-device-detect";

function AboutMe() {
  return (
    <Styled.Container id="about">
      <Navigation />
      <Title
        isIOS={isIOS}
        title="About Me"
        before={"A"}
        top={-17}
        description="Failure will never overtake me if my determination to succeed is strong enough"
      />
      <Flex
        mt={[12, 4]}
        direction={["row", "column"]}
        align={["flex-start", "center"]}
        justify={["flex-start", "center"]}
      >
        <ProfileImage />
        <Details />
      </Flex>
    </Styled.Container>
  );
}

export default AboutMe;
