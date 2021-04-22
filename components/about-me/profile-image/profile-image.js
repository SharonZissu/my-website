import * as Styled from "./profile-image.style";
import Image from "next/image";

function ProfileImage() {
  return (
    <Styled.Image>
      <Image
        src="/images/sharonProfile.jpg"
        alt="sharon profile image"
        width={851}
        height={1080}
        layout="responsive"
      />
    </Styled.Image>
  );
}

export default ProfileImage;
