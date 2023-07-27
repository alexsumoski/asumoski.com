import Hero from "../app/components/Hero";
import InProgress from "../app/components/InProgress";
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
import Journey from "@/app/components/Journey";

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
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 2 }}
            className="absolute md:w-[50%] sm:w-full inset-0 gradient h-16"
          />
          <div className="mt-[114px]">
            <Hero />
            <Projects projects={projects} />
            <Section title="Currently Learning">
              <div className="flex items-start gap-8 lg:flex-row md:flex-col sm:flex-col flex-col">
                <Github />
                <InProgress courses={courses} />
              </div>
            </Section>
            <Section title="My Journey">
              <Journey />
            </Section>
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
