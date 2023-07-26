import React from "react";

const Footer: React.FC = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="flex justify-between items-center pt-40 pb-16 w-full">
      <div className="flex flex-col md:flex-row sm:flex-col">
        <div className="font-light text-neutral-300 md:w-3/4 sm:w-full mb-4 md:mb-0">
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
            href="https://github.com/features/actions"
            target="_blank"
          >
            Github Actions
          </a>
          .
        </div>
        <p className="md:w-1/4 sm:w-full">© {currentDate} Alex Sumoski.</p>
      </div>
    </footer>
  );
};

export default Footer;
