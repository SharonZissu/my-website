import * as Styled from "./navigation.style";
import { Flex } from "../flex/flex.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faGraduationCap,
  faStar,
  faTasks,
  faFutbol,
  faPhoneSquareAlt,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const LINKS = [
  { name: "About", icon: faAddressCard },
  { name: "Education", icon: faGraduationCap },
  { name: "Skills", icon: faStar },
  { name: "Courses", icon: faLaptopCode },
  { name: "Projects", icon: faTasks },
  { name: "Career", icon: faFutbol },
  { name: "Contact", icon: faPhoneSquareAlt },
];
function Navigation() {
  return (
    <Styled.Navigation>
      <Styled.Links>
        {LINKS.map(({ name, icon }) => (
          <Flex
            key={name}
            width={["100%"]}
            align={["center"]}
            justify={["center"]}
            borderBottom="1px solid rgba(0, 0, 0, 0.1)"
            p={[1]}
          >
            <FontAwesomeIcon size="2x" icon={icon} color="white" />
            <Styled.Link>{name}</Styled.Link>
          </Flex>
        ))}

        {/* <Styled.Link>Education</Styled.Link>
        <Styled.Link>Skills</Styled.Link>
        <Styled.Link>Courses</Styled.Link>
        <Styled.Link>Projects</Styled.Link>
        <Styled.Link>Carrer</Styled.Link>
        <Styled.Link>Contact</Styled.Link> */}
      </Styled.Links>
    </Styled.Navigation>
  );
}

export default Navigation;
