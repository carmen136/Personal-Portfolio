import Section from "/components/Section";
import Introduction from "/components/Introduction";
import About from "/components/About";
import Projects from "/components/Projects";

export default function Home() {
  return (
    <>
      <Section content={<Introduction />} id="introduction" />
      <Section content={<About />} id="about" />
      <Section content={<Projects />} id="projects" />
    </>
  );
}
