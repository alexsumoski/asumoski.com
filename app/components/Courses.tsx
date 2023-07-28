"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdAccessTime } from "react-icons/md";
import Course from "./Course";

interface CoursesProps {
  courses: any[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="flex flex-col justify-between p-8 w-full rounded-lg mb-10"
    >
      <h1 className="font-semibold text-2xl pb-6">Current Courses</h1>
      <div className="flex flex-col lg:flex-col md:flex-row sm:flex-row gap-16 w-full">
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

export default Courses;
