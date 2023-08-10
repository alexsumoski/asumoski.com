import { motion } from "framer-motion";
import { IconBaseProps } from "react-icons";
import { FiCode } from "react-icons/fi";

interface IconButtonProps {
  link?: string;
  icon: React.ReactElement<IconBaseProps>;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ link, icon, disabled }) => {
  const buttonClasses = `flex items-center justify-center rounded-md h-12 w-12 bg-black border border-gray-800 duration-100 transition transform-gpu ease-in-out cursor-pointer ${
    disabled ? "opacity-50 cursor-default" : ""
  }`;

  const motionProps = disabled
    ? {}
    : {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      };

  return (
    <motion.a
      href={disabled ? undefined : link}
      target="_blank"
      className={buttonClasses}
      {...motionProps}
    >
      {icon}
    </motion.a>
  );
};

export default IconButton;
