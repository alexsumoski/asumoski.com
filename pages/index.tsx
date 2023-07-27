import Hero from "../app/components/Hero";
import InProgress from "../app/components/InProgress";
import Projects from "../app/components/Projects";
import Section from "../app/components/Section";
import Container from "../app/components/Container";
import { getProjects, getCourses } from "@/app/lib/contentful";
import { GetStaticProps } from "next";
import Layout from "@/pages/layout";
import { motion } from "framer-motion";
import Github from "@/app/components/Github";
import Modal from "@/app/components/Modal";
import { useState } from "react";
import Head from "next/head";
import Image1 from "../app/assets/medius.svg";
import Image2 from "../app/assets/sightsound.svg";
import Image3 from "../app/assets/fulton.svg";
import Image4 from "../app/assets/cabinetjoint.svg";
import Image from "next/image";

interface PageProps {
  projects: any[];
  courses: any[];
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

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
            className="absolute w-[50%] inset-0 gradient h-16"
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
              <div className="flex flex-wrap gap-10 justify-start items-center">
                {[Image1, Image2, Image3, Image4].map((Img, index) => (
                  <motion.a
                    key={index}
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      className="md:w-44 sm:w-44 sm:mb-2 hover:opacity-70 transition ease-in-out cursor-pointer"
                      src={Img}
                      alt={`${index + 1} workplace`}
                    />
                  </motion.a>
                ))}
              </div>
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
