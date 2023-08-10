import { FiInfo } from "react-icons/fi";
import { motion } from "framer-motion";
import Tooltip from "../common/Tooltip";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  tooltipText: string;
  gradientFrom?: string;
  gradientTo?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  tooltipText,
  gradientFrom,
  gradientTo,
  children,
}) => {
  return (
    <Tooltip tooltipText={tooltipText} wide>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`h-[24rem] relative overflow-hidden border-[3px] border-neutral-900 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-3xl transition ease-in-out duration-500 hover:border-neutral-400 hover:brightness-110 group`}
      >
        <div className="p-8">
          <h2 className="text-2xl font-extrabold">{title}</h2>
          <p className="text-neutral-200 my-2">{description}</p>
        </div>
        <FiInfo
          size={24}
          className="absolute top-[1rem] right-[1rem] mt-4 mr-4 text-4xl text-white opacity-50 group-hover:opacity-100 transition-all ease-in-out duration-300 transform group-hover:-translate-y-2"
        />
        {children}
      </motion.div>
    </Tooltip>
  );
};

export default Card;
