import Section from "/components/Section";
import Introduction from "/components/Introduction";
import About from "/components/About";
import Projects from "/components/Projects";

export default function Home() {
  return (
    <>
      <Section content={<Introduction />} />
      <Section content={<About />} />
      <Section content={<Projects />} />
    </>
  );
}
