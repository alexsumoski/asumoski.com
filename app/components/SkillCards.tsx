import { FiInfo } from "react-icons/fi";
import ProgressCarousel from "./ProgressCarousel";
import Tooltip from "../common/Tooltip";

const SkillCard = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3">
        <Tooltip tooltipText="My lighthouse scores ensure my site is performant, accessible, and user-friendly.">
          <div className="h-[24rem] relative overflow-hidden border-[3px] border-neutral-900 bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl transition ease-in-out duration-500 hover:border-neutral-400 hover:brightness-110 group">
            <div className="p-8">
              <h2 className="text-2xl font-extrabold">SEO</h2>
              <p className="text-sm text-neutral-200 my-2">
                I follow SEO & accessibility best practices.
              </p>
            </div>
            <FiInfo className="absolute top-[1rem] right-[1rem] mt-4 mr-4 text-4xl text-white opacity-50 group-hover:opacity-100 transition-all ease-in-out duration-300 transform group-hover:-translate-y-2" />
            <ProgressCarousel />
          </div>
        </Tooltip>
      </div>

      <div className="h-[24rem] w-full md:w-2/3 border-[3px] border-neutral-900 hover:border-neutral-400 p-10 bg-gradient-to-r from-purple-500 to-purple-800 rounded-3xl hover:brightness-110 transition ease-in-out duration-500">
        <h2 className="text-2xl font-extrabold">SEO</h2>
        <p className="text-sm text-neutral-200 my-2">
          I follow SEO & accessibility best practices.
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
