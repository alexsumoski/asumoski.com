"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdAccessTime } from "react-icons/md";
import Course from "./Course";

interface InProgressProps {}

const InProgress: React.FC<InProgressProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="flex flex-row items-center justify-between p-10 w-full lg:w-1/2 md:w-full sm:w-full rounded-lg mb-10"
    >
      <div className="flex flex-col lg:flex-col md:flex-row sm:flex-row gap-24 w-full">
        <Course
          title="Angular Pro Course"
          description="Advanced, comprehensive, complete. Deep exploration of the framework, architect big apps."
          link="https://ultimatecourses.com"
          time="17"
          progress={20}
        />
        <Course
          title="UX/UI Bootcamp"
          description="DesignCourse is structured to providing aspiring designers with the necessary foundation to produce beautiful user interfaces"
          link="https://designcourse.com/ui-ux"
          time="18"
          progress={5}
        />
      </div>
    </motion.div>
  );
};

export default InProgress;
