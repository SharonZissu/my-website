import * as Styled from "./arrow-up.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function ArrowUp() {
  return (
    <Styled.ArrowUp>
      <Link to="header" smooth={true}>
        <FontAwesomeIcon icon={faArrowUp} size="7x" color="#d8bf25" />
      </Link>
    </Styled.ArrowUp>
  );
}

export default ArrowUp;
