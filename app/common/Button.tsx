import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  link?: string;
  size?: "small" | "large";
  variant?: "white" | "black";
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  link,
  size = "small",
  variant = "white",
  disabled = false,
  fullWidth = false,
}) => {
  const buttonClasses = `flex items-center justify-center rounded-md select-none ${
    size === "small" ? "py-2 px-4 text-sm" : "py-3 px-5 text-base"
  } ${
    variant === "black"
      ? "text-white bg-black border-white border"
      : "text-black bg-white"
  } duration-300 transition transform-gpu ease-in-out ${
    disabled ? "opacity-50" : "cursor-pointer"
  } ${fullWidth ? "w-full" : ""} ${
    variant === "white" ? "hover:opacity-80" : "hover:bg-zinc-900"
  }`;

  return (
    <motion.a
      href={link}
      target="_blank"
      className={buttonClasses}
      whileTap={{ scale: 0.95 }}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
    >
      {label}
    </motion.a>
  );
};

export default Button;
