"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-center h-[30rem] bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="md:w-1/2 md:mb-6"
      >
        <h1 className="text-6xl md:text-9xl text-white mb-4 md:mb-0">
          Alex
          <br />
          Sumoski
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="xl:m-12"
      >
        <p className="opacity-70 font-light text-lg md:text-2xl mt-8 md:mt-0 leading-9 md:leading-10 xl:leading-10">
          I’m a front-end developer with UX/UI expertise, organized with a
          vision to execute.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
