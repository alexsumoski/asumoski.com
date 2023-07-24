import Hero from "../app/components/Hero";
import InProgress from "../app/components/InProgress";
import Projects from "../app/components/Projects";
import Section from "../app/components/Section";
import Container from "../app/components/Container";
import { getProjects } from "@/app/lib/contentful";
import { GetStaticProps } from "next";
import Layout from "@/app/Layout";
import { motion } from "framer-motion";
import Github from "@/app/components/Github";
import {
  AiOutlineEye,
  AiOutlineUnorderedList,
  AiOutlineCode,
} from "react-icons/ai";
import SkillPoint from "@/app/components/SkillPoint";

interface PageProps {
  projects: any[];
}

const IndexPage: React.FC<PageProps> = ({ projects }) => {
  return (
    <Container>
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute w-[50%] inset-0 gradient h-16"
        />
        <div className="mt-[114px]">
          <Hero />
          {/* <InProgress /> */}
          <Projects projects={projects} />
          <Section title="Currently Learning">courses</Section>
          <Section title="Services">
            <div className="w-full h-full flex flex-col">
              <SkillPoint
                icon={<AiOutlineEye size={32} className="me-8" />}
                title="I build what I see"
                link="example"
                description="I love to have a vision for a project and creating that into fluid clean code for users to interact with."
              />
              <SkillPoint
                icon={<AiOutlineUnorderedList size={32} className="me-8" />}
                title="I build what I see"
                link="example"
                description="I love to have a vision for a project and creating that into fluid clean code for users to interact with."
              />
              <SkillPoint
                icon={<AiOutlineCode size={32} className="me-8" />}
                title="I build what I see"
                link="example"
                description="I love to have a vision for a project and creating that into fluid clean code for users to interact with."
              />
            </div>
          </Section>
          <Github />
        </div>
      </Layout>
    </Container>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  return { props: { projects } };
};
