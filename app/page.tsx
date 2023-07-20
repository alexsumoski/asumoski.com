import Container from "./components/Container";
import Hero from "./components/Hero";
import InProgress from "./components/InProgress";
import Projects from "./components/Projects";
import Section from "./components/Section";

export default async function Home() {
  return (
    <Container>
      <div className="mt-[114px]">
        <Hero />
        {/* <InProgress /> */}
        <Projects />
        {/* <Section title="Services">Content</Section> */}
      </div>
    </Container>
  );
}
