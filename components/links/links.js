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
        <a target="_blank" href="https://www.facebook.com/sharon.zissu/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </Styled.Icon>
      <Styled.Icon>
        <a href="mailto:sharonzissu10@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </Styled.Icon>
      <Styled.Icon>
        <a target="_blank" href="https://github.com/SharonZissu/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Styled.Icon>
      <Styled.Icon icon="phone">
        <FontAwesomeIcon icon={faPhoneAlt} />
      </Styled.Icon>
      <Styled.Icon>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sharon-zissu-9b9812187/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </Styled.Icon>
    </Styled.Container>
  );
}

export default Links;
