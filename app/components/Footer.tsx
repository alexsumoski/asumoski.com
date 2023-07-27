import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="flex justify-between items-center pt-52 pb-16 w-full">
      <div className="flex flex-col w-full md:flex-row sm:flex-col justify-between">
        <motion.div className="font-light text-neutral-300 md:w-3/4 sm:w-full mb-4 md:mb-0">
          Site designed in{" "}
          <a
            className="text-blue-500"
            href="https://www.figma.com"
            target="_blank"
          >
            Figma
          </a>
          . Built with{" "}
          <a
            className="text-blue-500"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next.js
          </a>{" "}
          TypeScript and{" "}
          <a
            className="text-blue-500"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            className="text-blue-500"
            href="https://vercel.com/"
            target="_blank"
          >
            Vercel
          </a>
          .
        </motion.div>
        <motion.p
          initial={{ x: 90 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/4 sm:w-full"
        >
          © {currentDate} Alex Sumoski.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
