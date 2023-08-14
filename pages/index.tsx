import Hero from "../app/components/Hero";
import Courses from "../app/components/Courses";
import Container from "../app/layout/Container";
import Section from "@/app/layout/Section";
import {
  getProjects,
  getCourses,
  getProjectBySlug,
} from "@/app/lib/contentful";
import { GetStaticProps } from "next";
import Layout from "@/app/layout/Layout";
import Github from "@/app/components/Github";
import Modal from "@/app/common/Modal";
import { useState } from "react";
import SkillCards from "@/app/components/SkillCards";
import FeaturedProject from "@/app/components/FeaturedProject";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CodeEditor from "@/app/components/CodeEditor";

interface PageProps {
  projects: any[];
  courses: any[];
}

const IndexPage: React.FC<PageProps> = ({ projects, courses }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const featuredProjects = projects.filter(
    (project) => project.fields.featured
  );

  return (
    <>
      <Container>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <div className="min-h-[20rem] p-8">
            <h2 className="text-4xl">Test content</h2>
          </div>
        </Modal>
        <Layout>
          <Hero />
          <Section title="What I offer">
            <SkillCards />
          </Section>
          <Section title="Featured Projects">
            {featuredProjects.map((project, index) => {
              const descriptionComponent = project.fields.description
                ? documentToReactComponents(project.fields.description)
                : null;

              return (
                <FeaturedProject
                  key={index}
                  logo={`https:${project.fields.logoImage.fields.file.url}`}
                  title={project.fields.title}
                  subtitle={project.fields.subtitle}
                  description={descriptionComponent}
                  codeLink={project.fields.codeLink}
                  externalLink={project.fields.externalLink}
                  desktopImage={`https:${project.fields.desktopImage.fields.file.url}`}
                  mobileImage={`https:${project.fields.mobileImage.fields.file.url}`}
                  technologies={project.fields.technology}
                  slug={project.fields.slug}
                />
              );
            })}
          </Section>
          <Section title="Recent activity">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              <Github />
              <Courses courses={courses} />
            </div>
          </Section>
        </Layout>{" "}
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
