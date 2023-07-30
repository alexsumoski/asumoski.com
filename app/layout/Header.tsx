import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const leftFade = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const rigthFade = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-10 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="flex justify-between items-center xl:px-20 md:px-8 sm:px-2 px-4 py-6 w-full">
        <motion.div variants={leftFade} initial="hidden" animate="visible">
          <Image src={logo} height={50} width={50} alt="Logo" />
        </motion.div>
        <motion.div
          variants={rigthFade}
          initial="hidden"
          animate="visible"
          className="hidden sm:flex space-x-5"
        >
          <a
            href="https://github.com/alexsumoski"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:scale-105 transition"
            aria-label="Link to Alex Sumoski's Github profile."
          >
            <FaGithub className="p-1 me-2" size={50} />
          </a>
          <a
            href="https://linkedin.com/in/alexandersumoski/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:scale-105 transition"
            aria-label="Link to Alex Sumoski's LinkedIn profile."
          >
            <FaLinkedin className="p-1" size={50} />
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
