import * as Styled from "./info-box.style";
import Heading from "../heading/heading";
import Hello from "../hello/hello";
import Button from "../../button/button";
import Links from "../../links/links";
import { Flex } from "../../flex/flex.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function InfoBox() {
  return (
    <Styled.Container>
      <Hello />
      <Heading />
      <Flex
        mt={[5, 2]}
        mb={[0]}
        ml={[7]}
        direction={["row", "column"]}
        align={["center"]}
        justify={["space-between"]}
        width={["80%"]}
      >
        <a target="_blank" href="/files/resume.pdf" download>
          <Button>
            <FontAwesomeIcon icon={faDownload} />
            <span>Download CV</span>
          </Button>
        </a>
        <Links />
      </Flex>
    </Styled.Container>
  );
}
export default InfoBox;
