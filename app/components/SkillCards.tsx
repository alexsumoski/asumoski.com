import { motion } from "framer-motion";
import Card from "./Card";
import ProgressCarousel from "./ProgressCarousel";
import Figma from "../assets/figma.png";
import Browser from "../assets/browser.png";
import Code from "../assets/code.png";
import Image from "next/image";

const SkillCards: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6"
    >
      <div className="md:col-span-1">
        <Card
          title="SEO"
          description="I follow SEO & accessibility best practices."
          tooltipText="*Below are my website lighthouse scores. Using web accessibility standards I ensure my work is performant, and user-friendly."
          gradientFrom="from-blue-700"
          gradientTo="to-blue-500"
        >
          <ProgressCarousel />
        </Card>
      </div>

      <div className="md:col-span-2">
        <Card
          title="Pixel Perfect UI"
          description="I apply clean code and visual standards using the latest UX tools and front-end frameworks."
          tooltipText="Utilizing tools like Figma I create a vision, and then make it a reality using front-end frameworks like Angular and React."
          gradientFrom="from-purple-500"
          gradientTo="to-purple-900"
        >
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.25, delay: 1 }}
            className="absolute top-[60%] left-0"
          >
            <Image src={Figma} alt={"Figma design picture"} />
          </motion.div>
          <motion.div
            initial={{ y: 80, x: 60 }}
            animate={{ y: 0, x: 0 }}
            transition={{ duration: 1.5, delay: 1.25 }}
            className="absolute top-[40%] left-[30%]"
          >
            <Image src={Browser} alt={"Figma design picture"} />
          </motion.div>
        </Card>
      </div>

      <div className="md:col-span-2">
        <Card
          title="Framework Expertise"
          description="I excel in both Angular and React, 
          two powerful front-end frameworks. With a strong foundation in these technologies,
          I quickly adapt to new tools and technologies, enhancing my development skills."
          tooltipText="Tooltip text for another card."
          gradientFrom="from-slate-900"
          gradientTo="to-block"
        >
          Content
        </Card>
      </div>

      <div className="md:col-span-1">
        <Card
          title="Clean Code & Commits"
          description=""
          tooltipText="Tooltip text for the fourth card."
        >
          <motion.div className="absolute top-[25%] left-[0%] w-[26rem]">
            <Image src={Code} alt={"Figma design picture"} />
          </motion.div>
        </Card>
      </div>
    </motion.div>
  );
};

export default SkillCards;
