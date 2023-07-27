import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-between items-center pt-52 pb-12 w-full">
      <div className="w-full mb-8">
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
      </div>
      <div className="flex flex-row justify-between w-full text-neutral-500">
        <div className="flex gap-6 underline">
          <a href="https://github.com/alexsumoski" target="_blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/alexandersumoski/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/alexsumoski/asumoski.com" target="_blank">
            Site Code
          </a>
        </div>
        <motion.p initial={{ x: 90 }} animate={{ opacity: 1, x: 0 }}>
          © {currentDate} Alex Sumoski.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
