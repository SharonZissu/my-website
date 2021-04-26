import * as Styled from "./project.style";
import { Flex } from "../../flex/flex.style";
import Image from "next/image";
import { useRef, useState } from "react";

function Project({
  id,
  idName,
  name,
  description,
  technologies,
  imgHeight,
  imgWidth,
  url,
}) {
  const [imgSrc, setImgSrc] = useState(`/images/projects/${idName}.png`);
  function handleHover(e) {
    setImgSrc(`/images/projects/${e.target.id}2.png`);
  }

  function handleMouseOut(e) {
    setImgSrc(`/images/projects/${e.target.id}.png`);
  }
  return (
    <Styled.Project
      direction={id === 2 ? "row-reverse" : "row"}
      position={id === 2 && "relative"}
      left={id === 2 && -35}
    >
      <Styled.ImageContainer id={id} type={id === 3 ? "desktop" : "iphone"}>
        <Image
          src={imgSrc}
          alt="project image"
          height={imgHeight}
          width={imgWidth}
          layout="responsive"
          onMouseEnter={handleHover}
          onMouseOut={handleMouseOut}
          id={idName}
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
        <Styled.Name>
          <a target="_blank" href={url}>
            {name}
          </a>
        </Styled.Name>
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
