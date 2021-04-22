import * as Styled from "./career.style";
import Title from "../title/title";
import Image from "next/image";
import { Flex } from "../flex/flex.style";

function Career() {
  return (
    <Styled.Career>
      <Title
        title="My Career"
        before={"M"}
        top={-1}
        description="Goals should never be easy, they should force you to Work, even if they are uncomfortable at the time."
      />
      <Flex ml={[5]} mt={[18]} width={["82%"]} justify={["flex-end"]}>
        <Styled.Summary>
          Playing professional football from a very young age shaped my
          personality and taught me many important lessons - teamwork,
          perseverance, ambition and achieving my goals. The experience I had
          over the years on the court gave me the fundamentals on how to be a
          leader to my teammates and to motivate my self in order to succeed.
        </Styled.Summary>
        <Styled.Image>
          <Image
            src="/images/career/football1.png"
            alt="career image"
            height={300}
            width={421}
          />
        </Styled.Image>
      </Flex>
    </Styled.Career>
  );
}

export default Career;
