"use client";

import Section from "/components/Section";
import Introduction from "/components/Introduction";
import About from "/components/About";
import Projects from "/components/Projects";
import Connect from "/components/Connect";

export default function Home({ noHover }) {
  return (
    <main>
      <Section content={<Introduction noHover={noHover} />} id="introduction" />
      <Section content={<About />} id="about" />
      <Section content={<Projects />} id="projects" />
      <Section content={<Connect />} id="connect" />
    </main>
  );
}
