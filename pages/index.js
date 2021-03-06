import { Fragment } from "react";
import Header from "../components/header/header";
import AboutMe from "../components/about-me/about-me";
import Education from "../components/education/education";
import Skills from "../components/skills/skills";
import OnlineCourses from "../components/online-courses/online-courses";
import Projects from "../components/projects/projects";
import Career from "../components/career/career";
import ContactMe from "../components/contact-me/contact-me";
import Head from "next/head";
import ArrowUp from "../components/arrow-up/arrow-up";

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Sharon Zissu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ArrowUp />
      <Header />
      <AboutMe />
      <Education />
      <Skills />
      <OnlineCourses />
      <Projects />
      <Career />
      <ContactMe />
    </Fragment>
  );
}

export default Home;
