import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "../assets/medius.svg";
import Image2 from "../assets/sightsound.svg";
import Image3 from "../assets/fulton.svg";
import Image4 from "../assets/cabinetjoint.svg";

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Journey = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-start items-center">
      {[Image1, Image2, Image3, Image4].map((Img, index) => (
        <motion.a
          key={index}
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Image
            className="md:w-44 sm:w-44 sm:mb-2 hover:opacity-70 transition ease-in-out cursor-pointer"
            src={Img}
            alt={`${index + 1} workplace`}
          />
        </motion.a>
      ))}
    </div>
  );
};

export default Journey;
