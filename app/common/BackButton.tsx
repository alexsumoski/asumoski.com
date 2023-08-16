import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import styles from "./BackButton.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };
  return (
    <Link href="/" legacyBehavior>
      <a className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md transition transform hover:scale-105">
        <IoMdArrowBack className="text-black text-xl" size={26} />
      </a>
    </Link>
  );
};

export default BackButton;
