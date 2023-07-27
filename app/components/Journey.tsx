import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "../assets/medius.svg";
import Image2 from "../assets/sightsound.svg";
import Image3 from "../assets/fulton.svg";
import Image4 from "../assets/cabinetjoint.svg";
import Image5 from "../assets/millersville.svg";
import Image6 from "../assets/google.svg";

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Journey = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-start items-center relative">
      {[Image1, Image2, Image3, Image4].map((Img, index) => (
        <motion.div
          key={index}
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Image
            className="md:w-44 sm:w-32 sm:mb-2 w-40 hover:opacity-70 transition ease-in-out cursor-pointer"
            src={Img}
            alt={`${index + 1} workplace`}
          />
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 left-0 md:w-[50%] sm:w-full inset-0 gradient-2 h-16 -z-10"
      />
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <a
          href="https://www.coursera.org/professional-certificates/google-ux-design"
          target="_blank"
          className="flex flex-row items-center gap-4 py-4 px-5 rounded-lg backdrop-blur-lg drop-shadow-lg bg-black border-[1px] bg-opacity-10 border-stone-700 hover:scale-105 cursor-pointer ease-in-out transition"
        >
          <Image
            src={Image6}
            alt="Millersville University Degree"
            height={60}
          />
          <div>
            <h2 className="text-sm">
              Google UX Design Professional Certificate
            </h2>
            <h3 className="text-xs my-1">7 Course Certificate</h3>
            <p className="text-sm text-neutral-400">2022</p>
          </div>
        </a>
        <a
          href="https://www.millersville.edu/business/index.php"
          target="_blank"
          className="flex flex-row items-center gap-4 py-4 px-5 rounded-lg backdrop-blur-lg drop-shadow-lg bg-black border-[1px] bg-opacity-10 border-stone-700 hover:scale-105 cursor-pointer ease-in-out transition"
        >
          <Image
            src={Image5}
            alt="Millersville University Degree"
            height={60}
          />
          <div>
            <h2 className="text-sm">Millersville University of Pennsylvania</h2>
            <h3 className="text-xs my-1">Business Administation</h3>
            <p className="text-sm text-neutral-400">2016 - 2020</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Journey;
