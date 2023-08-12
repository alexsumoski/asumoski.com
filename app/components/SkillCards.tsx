import { motion } from "framer-motion";
import Card from "./Card";
import ProgressCarousel from "./ProgressCarousel";
import Figma from "../assets/figma.png";
import Browser from "../assets/browser.png";
import Image from "next/image";
import CodeEditor from "./CodeEditor";

const SkillCards: React.FC = () => {
  const exampleCode = `
  "use client";

  import { useEffect, useState } from "react";
  import { GoGitBranch, GoRepo } from "react-icons/go";
  import { motion } from "framer-motion";
  
  const Github = () => {
    const [activity, setActivity] = useState([]);
  
    useEffect(() => {
      fetch("https://api.github.com/users/alexsumoski/events")
        .then((response) => response.json())
        .then((data) => {
          const pushEvents = data.filter(
            (event) => event.type === "PushEvent"
          );
          setActivity(pushEvents.slice(0, 4));
        });
    }, []);
  
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const month = date.toLocaleString("default", { month: "short" });
      const day = date.getDate();
      return \`\${month} \${day}\`;
    };
  
    const truncate = (input) =>
      input.length > 70 ? \`\${input.substring(0, 60)}...\` : input;
  
    return (
      <motion.div
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="h-full w-full p-8 bg-opacity-10 backdrop-blur-lg rounded-3xl drop-shadow-lg bg-gradient-to-br from-black to-slate-900 border-[3px] border-neutral-900 transition ease-in-out duration-600 hover:border-neutral-600 hover:brightness-125"
      >
        <h1 className="font-semibold text-2xl pb-4">Git History</h1>
        <ul>
          {activity.map((event, index) => (
            <motion.li
              key={index}
              className="flex flex-row w-full justify-between items-center py-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex flex-col w-full">
                <div className="flex items-center mb-2">
                  <div></div>
                  <div>
                    <div className="flex items-center">
                      <div className="flex items-center me-2">
                        <GoRepo className="mr-2 text-neutral-400" />
                        <a
                          className="text-sm text-blue-500 hover:text-blue-300 transition ease-in-out"
                          href={\`https://github.com/\${event.repo?.name}\`}
                          target="_blank"
                        >
                          {event.repo?.name}
                        </a>
                      </div>
                      <GoGitBranch className="mr-2 text-neutral-400" />
                      <a
                        className="text-sm text-blue-500 hover:text-blue-300 transition ease-in-out"
                        href={\`https://github.com/\${event.repo?.name}/tree/\${event.payload.ref.replace("refs/heads/", "")}\`}
                        target="_blank"
                      >
                        {event.payload.ref.replace("refs/heads/", "")}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between">
                  <div
                    className="flex
                flex-col"
                  >
                    {event.payload.commits
                      ?.slice(0, 2)
                      .map((commit, commitIndex) => (
                        <p key={commitIndex} className="text-sm text-neutral-400">
                          {truncate(commit.message)}
                        </p>
                      ))}
                    <span className="text-xs font-semibold text-neutral-300 mt-2">
                      {event.payload.commits.length}{" "}
                      {event.payload.commits.length > 1 ? "commits" : "commit"}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-sm whitespace-nowrap">
                    {formatDate(event.created_at)}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  };
  
  export default Github;
`;

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.4 }}
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
          content
        </Card>
      </div>

      <div className="md:col-span-1">
        <Card
          title="Clean Code & Commits"
          description=""
          tooltipText="Tooltip text for the fourth card."
        >
          <div className=" h-[30%] overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-1/2"
              style={{ zIndex: -1 }}
            ></div>

            <motion.div className="absolute top-[-10%] left-[0%] w-[26rem] z-[-2]">
              <CodeEditor code={exampleCode} typingSpeed={30} />
            </motion.div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default SkillCards;
