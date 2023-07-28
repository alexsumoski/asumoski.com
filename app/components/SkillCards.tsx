import ProgressCircle from "./ProgressCircle";

const SkillCard = () => {
  return (
    <div className="flex flex-row gap-6 ">
      <div className="h-[24rem] relative overflow-hidden w-1/3 border-[3px] border-neutral-900 hover:border-neutral-700 p-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl hover:brightness-110 transition ease-in-out duration-500">
        <h2 className="text-2xl font-extrabold">SEO</h2>
        <p className="text-xs font-light text-neutral-200 my-2">
          I follow SEO & accessibility best practices.
        </p>
        <div className="w-full h-[65%] absolute left-0 bottom-0">
          <ProgressCircle label="Accessibility" percentage={97} />
        </div>
      </div>

      <div className="h-[24rem] w-2/3 border-[3px] border-neutral-900 hover:border-neutral-700 p-10 bg-gradient-to-r from-purple-500 to-purple-800 rounded-3xl hover:brightness-110 transition ease-in-out duration-500">
        <h2 className="text-2xl font-extrabold">SEO</h2>
        <p className="text-xs font-light text-neutral-200 my-2">
          I follow SEO & accessibility best practices.
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
