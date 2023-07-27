"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdAccessTime } from "react-icons/md";
import Course from "./Course";

interface InProgressProps {
  courses: any[];
}

const InProgress: React.FC<InProgressProps> = ({ courses }) => {
  console.log(courses);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="flex flex-row items-center justify-between p-10 w-full lg:w-1/2 md:w-full sm:w-full rounded-lg mb-10"
    >
      <div className="flex flex-col lg:flex-col md:flex-row sm:flex-row gap-24 w-full">
        {courses.map((course: any) => (
          <Course
            key={course.fields.title}
            title={course.fields.title}
            description={course.fields.description}
            link={course.fields.link}
            time={course.fields.time}
            progress={course.fields.progress}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default InProgress;
