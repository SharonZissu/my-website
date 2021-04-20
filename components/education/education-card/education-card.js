import * as Styled from "./education-card.style";
import { Flex } from "../../flex/flex.style";

function EducationCard({ title, location, years, summary }) {
  let formattedYears;
  if (years.length === 2) {
    formattedYears = years.join("-");
  } else {
    formattedYears = years[0];
  }

  return (
    <Styled.Card>
      <Styled.Years>
        <span>{formattedYears}</span>
      </Styled.Years>
      <Flex
        direction="column"
        align="flex-start"
        justify="flex-start"
        width="100%"
        mt={0.6}
        ml={3}
      >
        <Styled.Title>{title}</Styled.Title>
        <Styled.Location>
          <i>{location}</i>
        </Styled.Location>
        <Styled.Summary>{summary}</Styled.Summary>
      </Flex>
    </Styled.Card>
  );
}

export default EducationCard;
