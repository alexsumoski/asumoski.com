import Hero from "../app/components/Hero";
import Courses from "../app/components/Courses";
import Projects from "../app/components/Projects";
import Container from "../app/common/Container";
import Section from "@/app/components/Section";
import { getProjects, getCourses } from "@/app/lib/contentful";
import { GetStaticProps } from "next";
import Layout from "@/pages/layout";
import { motion } from "framer-motion";
import Github from "@/app/components/Github";
import Modal from "@/app/common/Modal";
import { useState } from "react";
import Head from "next/head";
import SkillCards from "@/app/components/SkillCards";
import ProjectCard from "@/app/components/ProjectCard";

interface PageProps {
  projects: any[];
  courses: any[];
}

const IndexPage: React.FC<PageProps> = ({ projects, courses }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Alex Sumoski | Front-end Developer</title>
        <meta
          name="description"
          content="Experienced front-end developer specialized in Angular and React. Delivering efficient UX/UI solutions with a structured approach."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../favicon.svg" />
      </Head>
      <Container>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <div className="min-h-[20rem] p-8">
            <h2 className="text-4xl">Test content</h2>
          </div>
        </Modal>
        <Layout>
          <div className="mt-[98px] grid gap-8">
            <Hero />
            <SkillCards />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              <Github />
              <Courses courses={courses} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  imageSrc={`https:${project.fields.image.fields.file.url}`}
                  title={project.fields.title}
                  subtitle={project.fields.subtitle}
                  codeLink={project.fields.codeLink}
                  externalLink={project.fields.externalLink}
                />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 2 }}
              className="md:w-[60%] sm:w-full inset-0 gradient h-16 -z-10"
            />
          </div>
        </Layout>
      </Container>
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  const courses = await getCourses();
  return { props: { projects, courses } };
};
