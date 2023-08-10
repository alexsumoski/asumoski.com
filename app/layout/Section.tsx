"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useOnScreen from "../hooks/intersectingView";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const ref: any = useRef();

  const [rootMargin, setRootMargin] = useState("300px");

  const onScreen = useOnScreen(ref, rootMargin);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setRootMargin(isMobile ? "100px" : "300px");
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 min-h-[12rem] sm:mb-0 md:mb-[12rem]">
      <div className="flex flex-col mb-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: onScreen ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold"
        >
          {/* {title} */}
        </motion.h2>
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
