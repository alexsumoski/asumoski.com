import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ label, link }) => {
  return (
    <motion.a
      href={link}
      className="border-[1px] pt-3 pb-2 ps-5 pe-5 rounded-full text-sm hover:bg-white hover:text-black duration-200 transition transform-gpu ease-in-out cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.a>
  );
};

export default Button;
