"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    imageSrc:
      "https://framerusercontent.com/images/e7fNMnQH6aPfoByobLbclPpJ3A.jpg?scale-down-to=2048",
    title: "Project 1",
    subtitle: "This is a great project",
    codeLink: "https://github.com/user/project1",
    externalLink: "https://project1.com",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/e7fNMnQH6aPfoByobLbclPpJ3A.jpg?scale-down-to=2048",
    title: "Project 1",
    subtitle: "This is a great project",
    codeLink: "https://github.com/user/project1",
    externalLink: "https://project1.com",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/e7fNMnQH6aPfoByobLbclPpJ3A.jpg?scale-down-to=2048",
    title: "Project 1",
    subtitle: "This is a great project",
    codeLink: "https://github.com/user/project1",
    externalLink: "https://project1.com",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/e7fNMnQH6aPfoByobLbclPpJ3A.jpg?scale-down-to=2048",
    title: "Project 1",
    subtitle: "This is a great project",
    codeLink: "https://github.com/user/project1",
    externalLink: "https://project1.com",
  },
];

const Projects: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imageSrc={project.imageSrc}
          title={project.title}
          subtitle={project.subtitle}
          codeLink={project.codeLink}
          externalLink={project.externalLink}
        />
      ))}
    </motion.section>
  );
};

export default Projects;
