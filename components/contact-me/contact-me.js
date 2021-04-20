import * as Styled from "./contact-me.style";
import Title from "../title/title";

function ContactMe() {
  return (
    <Styled.ContactMe>
      <Title
        title="Contact Me"
        before={"C"}
        top={-1}
        description="A Simple hello could lead to a million things."
      />
    </Styled.ContactMe>
  );
}

export default ContactMe;
