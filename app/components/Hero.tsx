"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col xl:items-center sm:w-full xl:w-3/4 justify-center h-[26rem] text-white">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="lg:w-full md:w-1/2 md:mb-2"
      >
        <h4 className="sm:text-sm md:text-xl lg:text-2xl pb-2 text-neutral-400">
          I'm Alex Sumoski.
        </h4>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:w-full md:w-3/4 md:mb-6"
      >
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl 2xl:text-10xl font-bold text-white mb-4 md:mb-0">
          A front-end developer, organized with a vision to execute.
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;
