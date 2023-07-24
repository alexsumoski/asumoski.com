import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-10 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="flex justify-between items-center xl:px-20 md:px-10 sm:px-2 px-4 py-8 w-full">
        <Image src={logo} height={50} width={50} alt="Logo" />
        <div className="flex space-x-5">
          <a
            href="https://github.com/alexsumoski"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:scale-105 hover:opacity-80 transition "
          >
            <FaGithub className="p-1 me-2" size={50} />
          </a>
          <a
            href="https://linkedin.com/in/alexandersumoski/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:scale-105 hover:opacity-80 transition"
          >
            <FaLinkedin className="p-1" size={50} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
