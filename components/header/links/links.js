import * as Styled from "./links.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Links() {
  return (
    <Styled.Container>
      <Styled.Icon>
        <FontAwesomeIcon icon={faFacebookF} />
      </Styled.Icon>
      <Styled.Icon>
        <FontAwesomeIcon icon={faEnvelope} />
      </Styled.Icon>
      <Styled.Icon>
        <FontAwesomeIcon icon={faGithub} />
      </Styled.Icon>
      <Styled.Icon>
        <FontAwesomeIcon icon={faPhoneAlt} />
      </Styled.Icon>
      <Styled.Icon>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Styled.Icon>
    </Styled.Container>
  );
}

export default Links;
