import Title from "../title/title";
import * as Styled from "./projects.style";
import Image from "next/image";
import { Flex } from "../flex/flex.style";
import { projects } from "../../helpers/projects";
import Project from "./project/project";
const [p1, p2, p3] = projects;

function Projects() {
  return (
    <Styled.Projects id="projects">
      <Title
        title="Projects"
        before={"P"}
        top={-17}
        description="Working on new projects gives you the opportunity to learn and absorb new things"
      />
      <Flex
        mt={[14, 11]}
        ml={[12, 0]}
        direction={["row", "column"]}
        align={["flex-end"]}
        justify={["center"]}
      >
        <Project
          id={p1.id}
          idName={p1.idName}
          name={p1.name}
          description={p1.description}
          technologies={p1.technologies}
          imgName={p1.imgName}
          imgHeight={p1.imgHeight}
          imgWidth={p1.imgWidth}
          url={p1.url}
        />

        <Project
          id={p2.id}
          idName={p2.idName}
          name={p2.name}
          description={p2.description}
          technologies={p2.technologies}
          imgName={p2.imgName}
          imgHeight={p2.imgHeight}
          imgWidth={p2.imgWidth}
          url={p2.url}
        />
      </Flex>
      <Flex
        justify={["center"]}
        align={["flex-end"]}
        direction={["column"]}
        mt={[13, 0]}
        width={["77%", "100%"]}
      >
        <Project
          id={p3.id}
          idName={p3.idName}
          name={p3.name}
          description={p3.description}
          technologies={p3.technologies}
          imgName={p3.imgName}
          imgHeight={p3.imgHeight}
          imgWidth={p3.imgWidth}
          url={p3.url}
        />
      </Flex>
    </Styled.Projects>
  );
}

export default Projects;
