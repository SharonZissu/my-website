import Title from "../title/title";
import * as Styled from "./projects.style";
import Image from "next/image";
import { Flex } from "../flex/flex.style";
import { projects } from "../../helpers/projects";
import Project from "./project/project";
const [p1, p2, p3] = projects;

function Projects() {
  return (
    <Styled.Projects>
      <Title
        title="Projects"
        before={"P"}
        top={-17}
        description="Working on new projects gives you the opportunity to learn and absorb new things."
      />
      <Flex mt={14} ml={12} align="flex-end" justify="center">
        <Project
          id={p1.id}
          name={p1.name}
          description={p1.description}
          technologies={p1.technologies}
          imgName={p1.imgName}
          imgHeight={p1.imgHeight}
          imgWidth={p1.imgWidth}
        />

        <Project
          id={p2.id}
          name={p2.name}
          description={p2.description}
          technologies={p2.technologies}
          imgName={p2.imgName}
          imgHeight={p2.imgHeight}
          imgWidth={p2.imgWidth}
        />
      </Flex>
      <Flex
        justify="center"
        align="flex-end"
        direction="column"
        mt={13}
        width="77%"
      >
        <Project
          id={p3.id}
          name={p3.name}
          description={p3.description}
          technologies={p3.technologies}
          imgName={p3.imgName}
          imgHeight={p3.imgHeight}
          imgWidth={p3.imgWidth}
        />
      </Flex>
    </Styled.Projects>
  );
}

export default Projects;
