import { motion } from "framer-motion";
import Image from "next/image";
import { FiCode, FiExternalLink } from "react-icons/fi";
import Tooltip from "../common/Tooltip";
import Button from "../common/Button";
import IconButton from "../common/IconButton";
import Link from "next/link";

interface FeaturedProjectProps {
  logo: string;
  title: string;
  subtitle: string;
  description: any;
  codeLink?: string;
  externalLink?: string;
  desktopImage: string;
  mobileImage: string;
  technologies: string[];
  slug: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  logo,
  title,
  subtitle,
  description,
  codeLink,
  externalLink,
  desktopImage,
  mobileImage,
  technologies,
  slug,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="sm:mx-0 w-full flex flex-col md:flex-col lg:flex-row relative my-24"
    >
      <div className="flex flex-col sm:w-full md:w-full lg:w-1/2 pt-12">
        <Image width={230} height={80} src={logo} alt={title} />
        <div className="font-bold text-2xl md:text-3xl mt-4">{subtitle}</div>
        <div className="leading-8 my-4 lg:max-w-[550px] text-neutral-200">
          {description}
        </div>
        <div className="hidden flex-wrap space-x-2 mt-3 mb-3 gap-0 md:flex">
          {technologies.slice(0, 3).map((technology: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.2 }}
              className="rounded-full border cursor-default text-sm border-gray-800 bg-transparent px-4 py-1"
            >
              <span className="flex translate-y-[1px]">{technology}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-row gap-3 mb-6 mt-1 md:pt-6 lg:pt-[4rem]">
          <Button label="View Case Study" size="large" link={`/${slug}`} />
          {!codeLink ? (
            <Tooltip tooltipText="Source code not available yet" darkBackground>
              <IconButton disabled icon={<FiExternalLink size={30} />} />
            </Tooltip>
          ) : (
            <Tooltip
              tooltipText="View source code for the project"
              darkBackground
            >
              <IconButton link={codeLink} icon={<FiCode size={30} />} />
            </Tooltip>
          )}
          {!externalLink ? (
            <Tooltip tooltipText="Live site not available yet" darkBackground>
              <IconButton disabled icon={<FiExternalLink size={30} />} />
            </Tooltip>
          ) : (
            <Tooltip tooltipText="View the live project" darkBackground>
              <IconButton
                link={externalLink}
                icon={<FiExternalLink size={30} />}
              />
            </Tooltip>
          )}
        </div>
      </div>
      <motion.div
        initial={{ x: 25, y: 15 }}
        whileInView={{ x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 1.3 }}
        className="sm:w-full md:w-full lg:w-1/2 relative"
      >
        <Image
          className="hidden md:hidden lg:block absolute top-[-25%] rounded-2xl image-no-max select-none"
          height={1200}
          width={1200}
          src={desktopImage}
          alt="Scribbble"
        />
        <Image
          className="block md:block lg:hidden top-[-30%] rounded-2xl image-no-max select-none"
          height={800}
          width={800}
          src={desktopImage}
          alt="desktopImage"
        />
      </motion.div>
    </motion.div>
  );
};

export default FeaturedProject;
