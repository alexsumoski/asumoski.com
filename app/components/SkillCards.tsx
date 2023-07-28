import { FiInfo } from "react-icons/fi";
import ProgressCarousel from "./ProgressCarousel";
import Tooltip from "../common/Tooltip";
import Figma from "../assets/figma.png";
import Browser from "../assets/browser.png";
import Image from "next/image";
import { motion } from "framer-motion";

const SkillCard = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row gap-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/3"
      >
        <Tooltip tooltipText="My lighthouse scores ensure my site is performant, accessible, and user-friendly.">
          <div className="h-[24rem] relative overflow-hidden border-[3px] border-neutral-900 bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl transition ease-in-out duration-500 hover:border-neutral-400 hover:brightness-110 group">
            <div className="p-8">
              <h2 className="text-2xl font-extrabold">SEO</h2>
              <p className="text-sm text-neutral-200 my-2">
                I follow SEO & accessibility best practices.
              </p>
            </div>
            <FiInfo
              size={24}
              className="absolute top-[1rem] right-[1rem] mt-4 mr-4 text-4xl text-white opacity-50 group-hover:opacity-100 transition-all ease-in-out duration-300 transform group-hover:-translate-y-2"
            />
            <ProgressCarousel />
          </div>
        </Tooltip>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-2/3"
      >
        <Tooltip tooltipText="Using tools like Figma I create a vision, and then make it a reality using front-end frameworks like Angular and React.">
          <motion.div className="h-[24rem] relative overflow-hidden border-[3px] border-neutral-900 hover:border-neutral-400 p-10 bg-gradient-to-r from-purple-500 to-purple-900 rounded-3xl hover:brightness-110 transition ease-in-out duration-500 group">
            <h2 className="text-2xl font-extrabold">Pixel Perfect UI</h2>
            <p className="text-sm text-neutral-200 my-2">
              I apply clean code and visual standards across both professional
              and personal projects.
            </p>
            <FiInfo
              size={24}
              className="absolute top-[1rem] right-[1rem] mt-4 mr-4 text-4xl text-white opacity-50 group-hover:opacity-100 transition-all ease-in-out duration-300 transform group-hover:-translate-y-2"
            />
            <motion.div
              className="absolute top-[60%] left-0"
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.25, delay: 1 }}
            >
              <Image src={Figma} alt={"Figma design picture"} />
            </motion.div>
            <motion.div
              className="absolute top-[40%] left-[30%]"
              initial={{ y: 80, x: 60 }}
              animate={{ y: 0, x: 0 }}
              transition={{ duration: 1.5, delay: 1.25 }}
            >
              <Image src={Browser} alt={"Figma design picture"} />
            </motion.div>
          </motion.div>
        </Tooltip>
      </motion.div>
    </div>
  );
};

export default SkillCard;
