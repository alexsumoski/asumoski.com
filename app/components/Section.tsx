"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import useOnScreen from "../hooks/intersectingView";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const ref: any = useRef();
  const onScreen = useOnScreen(ref, "-300px");

  const rectVariant = {
    hidden: { width: "0%", opacity: 0 },
    visible: {
      width: "15%",
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-[16rem] min-h-[12rem]">
      <div className="flex flex-col mb-8">
        <h2 className="text-6xl mb-4">{title}.</h2>
        <motion.div
          className="h-[0.2rem] mb-4 bg-white"
          variants={rectVariant}
          initial="hidden"
          animate={onScreen ? "visible" : "hidden"}
        />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: onScreen ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Section;
