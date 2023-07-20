"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface InProgressProps {}

const InProgress: React.FC<InProgressProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="flex flex-row items-center justify-between w-full py-10 rounded-lg mb-10"
    >
      <h1>Currently Learning</h1>
      <div className="flex flex-row gap-6">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={
              "https://framerusercontent.com/images/e7fNMnQH6aPfoByobLbclPpJ3A.jpg?scale-down-to=2048"
            }
            height={200}
            width={300}
            alt="text"
          />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            src={
              "https://framerusercontent.com/images/e7fNMnQH6aPfoByobLbclPpJ3A.jpg?scale-down-to=2048"
            }
            height={200}
            width={300}
            alt="text"
          />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            src={
              "https://framerusercontent.com/images/e7fNMnQH6aPfoByobLbclPpJ3A.jpg?scale-down-to=2048"
            }
            height={200}
            width={300}
            alt="text"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InProgress;
