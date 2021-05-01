import * as Styled from "./header.style";
import Image from "next/image";

import InfoBox from "./info-box/info-box";

function Header() {
  return (
    <Styled.Container id="header">
      <Styled.Image>
        <Image src="/images/main-image5.png" alt="sharon image" layout="fill" />
      </Styled.Image>
      <InfoBox />
    </Styled.Container>
  );
}

export default Header;
