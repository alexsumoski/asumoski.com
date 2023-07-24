import React from "react";
import { AiOutlineEye } from "react-icons/ai";

interface SkillPointProps {
  icon: JSX.Element;
  title: string;
  link: string;
  description: string;
}

const SkillPoint: React.FC<SkillPointProps> = ({
  icon,
  title,
  link,
  description,
}) => {
  return (
    <div className="mb-28">
      <div className="flex flex-row">
        {icon}
        <div className="font-regular text-3xl">{title}</div>
        {/* <p className="text font-light underline text-cyan-400 ms-8">{link}</p> */}
      </div>
      <div className="text-lg leading-8 mt-8 text-neutral-400">
        {description}
      </div>
    </div>
  );
};

export default SkillPoint;
