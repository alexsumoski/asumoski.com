"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { getProjects } from "@/app/lib/contentful";

const Projects: React.FC<{ projects: any[] }> = ({ projects }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </section>
  );
};

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
}

export default Projects;
