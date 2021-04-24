import * as Styled from "./header.style";
import Image from "next/image";

import InfoBox from "./info-box/info-box";

function Header() {
  return (
    <Styled.Container>
      <Styled.Image>
        <Image src="/images/main-image3.png" alt="sharon image" layout="fill" />
      </Styled.Image>
      <InfoBox />
    </Styled.Container>
  );
}

export default Header;
