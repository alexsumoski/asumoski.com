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
import Modal from "@/app/components/Modal";
import { useState } from "react";

interface PageProps {
  projects: any[];
}

const IndexPage: React.FC<PageProps> = ({ projects }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="min-h-[20rem] p-8">
          <h2 className="text-4xl">Test content</h2>
        </div>
      </Modal>
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
          <Projects projects={projects} />
          {/* <Section title="Services">
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
          </Section> */}
          <Section title="Currently Learning">
            <div className="flex items-start gap-8 lg:flex-row md:flex-col sm:flex-col flex-col">
              <Github />
              <InProgress />
            </div>
          </Section>
          <Section title="My Journey">logos</Section>
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
