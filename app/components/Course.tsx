import React, { useRef, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { motion } from "framer-motion";
import Tooltip from "../common/Tooltip";
import Button from "../common/Button";
import useOnScreen from "../hooks/intersectingView";

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
  const ref: any = useRef();
  const onScreen = useOnScreen(ref, "-100px");
  const [animationPlayed, setAnimationPlayed] = useState(false);

  if (onScreen && !animationPlayed) {
    setAnimationPlayed(true);
  }

  return (
    <div ref={ref}>
      <div className="text-xl">{title}</div>
      <div className="py-4">
        <p className="text-sm text-neutral-300 leading-relaxed mb-2">
          {description}
        </p>
        <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden my-4">
          <motion.div
            className="h-full bg-green-500"
            initial={{ width: 0 }}
            animate={{ width: animationPlayed ? `${progress}%` : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button label="View Course" link={link} />
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
