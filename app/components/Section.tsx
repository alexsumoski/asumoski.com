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

  return (
    <div className="grid grid-cols-2 gap-4 mt-[12rem] min-h-[24rem]">
      <div className="sticky top-0">
        <h2 className="text-6xl mb-4">{title}</h2>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Section;
