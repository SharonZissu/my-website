import * as Styled from "./project.style";
import { Flex } from "../../flex/flex.style";
import Image from "next/image";

function Project({
  id,
  name,
  description,
  technologies,
  imgName,
  imgHeight,
  imgWidth,
}) {
  return (
    <Styled.Project
      direction={id === 2 ? "row-reverse" : "row"}
      position={id === 2 && "relative"}
      left={id === 2 && -35}
    >
      <Styled.ImageContainer type={id === 3 ? "desktop" : "iphone"}>
        <Image
          src={`/images/projects/${imgName}.png`}
          alt="project image"
          height={imgHeight}
          width={imgWidth}
          layout="responsive"
        />
      </Styled.ImageContainer>
      <Flex
        direction={["column"]}
        pl={(id === 1 || id === 3) && [2, 0]}
        pr={id === 2 && [2, 0]}
        align={id === 2 && ["flex-end"]}
        justify={id === 2 && ["flex-end"]}
        textAlign={id === 2 && ["end"]}
      >
        <Styled.Name>{name}</Styled.Name>
        <Styled.Description>{description}</Styled.Description>
        <Flex
          width={["60%", "100%"]}
          mt={[1]}
          justify={id === 2 ? ["flex-end", "center"] : ["strech", "center"]}
        >
          {technologies.map((tech) => (
            <Styled.Technologie key={tech}>{tech}</Styled.Technologie>
          ))}
        </Flex>
      </Flex>
    </Styled.Project>
  );
}

export default Project;
