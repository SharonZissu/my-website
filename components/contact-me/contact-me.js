import * as Styled from "./contact-me.style";
import Title from "../title/title";
import ContactMeForm from "./contact-me-form/contact-me-form";
import Image from "next/image";
import { Flex } from "../flex/flex.style";
import Links from "../links/links";

function ContactMe() {
  async function submitHandler(contactDetails) {
    console.log(contactDetails);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    console.log(data);
  }

  return (
    <Styled.ContactMe>
      <Title
        title="Contact Me"
        before={"C"}
        top={-1}
        description="A Simple hello could lead to a million things"
      />
      <Flex
        // ml={-30}
        align={["flex-start"]}
        direction={["column"]}
        position={["relative"]}
        margin={["10rem auto", "8rem auto"]}
        left={[-10, 0]}
        width={["65rem", "80%"]}
      >
        <Flex
          width={["100%"]}
          justify={["space-between"]}
          align={["strech", "flex-end"]}
          pb={[0, 3]}
        >
          <Styled.TopImageContainer>
            <Image
              src="/images/contact-me/sharon-anima.png"
              alt="sharon anima"
              width={200}
              height={158}
            />
          </Styled.TopImageContainer>
          <Links />
        </Flex>
        <ContactMeForm onSubmit={submitHandler} />
        <Styled.LeftImageContainer>
          <Image
            src="/images/contact-me/sharon-anima3.png"
            alt="sharon anima"
            width={100}
            height={102}
          />
        </Styled.LeftImageContainer>
      </Flex>
    </Styled.ContactMe>
  );
}

export default ContactMe;
