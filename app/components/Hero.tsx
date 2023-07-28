"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col 2xl:flex-row xl:items-center justify-center h-[36rem] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="lg:w-full md:w-1/2 md:mb-6"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl 2xl:text-10xl font-bold text-white mb-4 md:mb-0">
          I’m a front-end developer, organized with a vision to execute.
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;
