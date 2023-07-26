import React from "react";
import { MdAccessTime } from "react-icons/md";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";

interface CourseProps {
  time: string;
  link: string;
  title: string;
  description: string;
  progress: number;
}

const Course: React.FC<CourseProps> = ({
  time,
  link,
  title,
  description,
  progress,
}) => {
  return (
    <div>
      <h3 className="text-xl">{title}</h3>
      <div className="py-4">
        <p className="text-sm text-neutral-300 leading-relaxed mb-2">
          {description}
        </p>
        <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden my-4">
          <motion.div
            className="h-full bg-green-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <a
          href={link}
          className="border-[1px] px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black duration-200 transition"
        >
          View Course
        </a>
        <Tooltip tooltipText="Course length">
          <div className="flex">
            <MdAccessTime size={20} className="me-2" />
            <span>{time} hours</span>
          </div>{" "}
        </Tooltip>
      </div>
    </div>
  );
};

export default Course;
