"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
import Tooltip from "../common/Tooltip";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  codeLink?: string;
  externalLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  subtitle,
  codeLink,
  externalLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="sm:mx-0"
    >
      <div className="rounded-3xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          layout="responsive"
          className="hover:scale-110 transition duration-500 ease-in-out"
        />
      </div>
      <div className="py-6 px-4 flex justify-between">
        <div>
          <h3 className="text-white text-lg">{title}</h3>
          <p className="text-white opacity-70">{subtitle}</p>
        </div>
        <div className="flex justify-end mt-2 space-x-8">
          {codeLink && (
            <a
              className="hover:opacity-80 hover:-translate-y-1 duration-300 ease-in-out"
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiCode size={30} />
            </a>
          )}
          {!externalLink ? (
            <Tooltip tooltipText="Live project available soon">
              <FiExternalLink size={30} className="opacity-25 cursor-default" />
            </Tooltip>
          ) : (
            <a
              className="hover:opacity-80 hover:-translate-y-1 duration-300 ease-in-out"
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink size={30} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
