import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  link?: string;
  size?: "small" | "large";
}

const Button: React.FC<ButtonProps> = ({ label, link, size = "small" }) => {
  const buttonClasses = `flex items-center justify-center rounded-md ${
    size === "small" ? "py-2 px-4 text-sm" : "py-2 px-5 text-base"
  } text-black bg-white duration-100 transition transform-gpu ease-in-out cursor-pointer`;

  return (
    <motion.a
      href={link}
      target="_blank"
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.a>
  );
};

export default Button;
