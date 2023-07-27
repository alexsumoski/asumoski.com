"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col 2xl:flex-row xl:items-center justify-center h-[36rem] bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="lg:w-full md:w-1/2 md:mb-6"
      >
        <h1 className="2xl:text-10xl lg:text-9xl md:text-9xl sm:text-8xl text-7xl text-white mb-4 md:mb-0">
          Alex
        </h1>
        <h1 className="2xl:text-10xl lg:text-9xl md:text-9xl sm:text-8xl text-7xl font-bold text-white mb-4 md:mb-0">
          Sumoski
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="lg:w-full md:w-1/2"
      >
        <p className="opacity-70 font-light md:text-2xl mt-8 md:mt-0 leading-9 md:leading-10 xl:leading-10">
          I’m a front-end developer with UX/UI expertise, organized with a
          vision to execute.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
