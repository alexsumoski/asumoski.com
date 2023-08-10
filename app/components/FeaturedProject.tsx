"use client";

import { motion, useAnimation } from "framer-motion";
import React from "react";
import Image from "next/image";
import { FiCode, FiExternalLink } from "react-icons/fi";
import Tooltip from "../common/Tooltip";
import Status from "../common/Status";
import Logo from "../assets/scribbble.svg";
import Button from "../common/Button";
import IconButton from "../common/IconButton";

interface FeaturedProjectProps {
  logo: string;
  title: string;
  subtitle: string;
  description: any;
  codeLink?: string;
  externalLink?: string;
  desktopImage: string;
  mobileImage: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  logo,
  title,
  subtitle,
  description,
  codeLink,
  externalLink,
  desktopImage,
  mobileImage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="sm:mx-0 w-full flex flex-col md:flex-col lg:flex-row relative mb-52"
    >
      <div className="flex flex-col sm:w-full md:w-full lg:w-1/2 pt-12">
        <Image width={230} height={80} src={logo} alt={title} />
        <div className="font-bold text-3xl my-4">{subtitle}</div>
        <div className="leading-8">{description}</div>
        <div className="flex flex-row gap-3 md:pt-6 lg:pt-[10rem]">
          <Button label="View case study" size="large" />
          {!codeLink ? (
            <Tooltip tooltipText="Source code not available yet" darkBackground>
              <IconButton link="#" icon={<FiExternalLink size={30} />} />
            </Tooltip>
          ) : (
            <Tooltip
              tooltipText="View source code for the project"
              darkBackground
            >
              <IconButton link="#" icon={<FiCode size={30} />} />
            </Tooltip>
          )}
          {!externalLink ? (
            <Tooltip tooltipText="Live site not available yet" darkBackground>
              <IconButton link="#" icon={<FiExternalLink size={30} />} />
            </Tooltip>
          ) : (
            <Tooltip tooltipText="View the live project" darkBackground>
              <IconButton
                disabled
                link="#"
                icon={<FiExternalLink size={30} />}
              />
            </Tooltip>
          )}
        </div>
      </div>
      <motion.div
        initial={{ x: 25, y: 15 }}
        whileInView={{ x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 1.3 }}
        className="sm:w-full md:w-full lg:w-1/2 relative"
      >
        <Image
          className="hidden md:hidden lg:block absolute top-[-35%] rounded-2xl image-no-max select-none"
          height={1200}
          width={1200}
          src={desktopImage}
          alt="Scribbble"
        />
        <Image
          className="block md:block lg:hidden top-[-30%] rounded-2xl select-none"
          height={1200}
          width={1200}
          src={mobileImage}
          alt="Scribbble"
        />
      </motion.div>
    </motion.div>
  );
};

export default FeaturedProject;
