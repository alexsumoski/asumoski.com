"use client";

import Image from "next/image";
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
          (event: any) => event.type === "PushEvent"
        );
        setActivity(pushEvents.slice(0, 4));
      });
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  const truncate = (input: string) =>
    input.length > 70 ? `${input.substring(0, 70)}...` : input;

  return (
    <div className="h-full w-full p-8 bg-opacity-10 backdrop-blur-lg rounded-3xl drop-shadow-lg bg-gradient-to-br from-black to-slate-900 border-[3px] border-neutral-900">
      <h1 className="font-semibold text-2xl pb-4">Git History</h1>
      <ul>
        {activity.map((event: any, index) => (
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
                        href={`https://github.com/${event.repo?.name}`}
                        target="_blank"
                      >
                        {event.repo?.name}
                      </a>
                    </div>
                    <GoGitBranch className="mr-2 text-neutral-400" />
                    <a
                      className="text-sm text-blue-500 hover:text-blue-300 transition ease-in-out"
                      href={`https://github.com/${
                        event.repo?.name
                      }/tree/${event.payload.ref.replace("refs/heads/", "")}`}
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
                    .map((commit: any, commitIndex: number) => (
                      <p key={commitIndex} className="text-sm text-neutral-400">
                        {truncate(commit.message)}
                      </p>
                    ))}
                  <span className="text-xs font-semibold text-neutral-300 mt-2">
                    {event.payload.commits.length}{" "}
                    {event.payload.commits.length > 1 ? "commits" : "commit"}
                  </span>
                </div>
                <p className="text-neutral-400 mt-3 whitespace-nowrap">
                  {formatDate(event.created_at)}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Github;
