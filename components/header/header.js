import * as Styled from "./header.style";
// import Image from "next/image";

import InfoBox from "./info-box/info-box";

function Header() {
  return (
    <Styled.Container>
      {/* <Styled.Image>
        <Image
          src="/images/sharonProfile.png"
          alt="sharon image"
          width={1020}
          height={1150}
        />
      </Styled.Image> */}
      <InfoBox />
    </Styled.Container>
  );
}

export default Header;
