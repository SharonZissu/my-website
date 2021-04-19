import { Fragment } from "react";
import Header from "../components/header/header";
import AboutMe from "../components/about-me/about-me";
import Education from "../components/education/education";
import Skills from "../components/skills/skills";
import OnlineCourses from "../components/online-courses/online-courses";

function Home() {
  return (
    <Fragment>
      <Header />
      <AboutMe />
      <Education />
      <Skills />
      <OnlineCourses />
      {/* <Projects /> */}
      {/* <Interests /> */}
      {/* <Career /> */}
      {/* <ContactMe /> */}
    </Fragment>
  );
}

export default Home;
