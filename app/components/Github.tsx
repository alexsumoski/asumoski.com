"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GoGitBranch } from "react-icons/go";

const Github = () => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/alexsumoski/events")
      .then((response) => response.json())
      .then((data) => {
        const pushEvents = data.filter(
          (event: any) => event.type === "PushEvent"
        );
        setActivity(pushEvents.slice(-1));
      });
  }, []);

  console.log(activity);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <div className="h-full w-1/2 md:w-1/2 sm:w-full p-10 bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg bg-slate-600 border-[1px] border-stone-500">
      <h1 className="font-semibold text-3xl">Recent Activity</h1>
      <ul>
        {activity.map((event: any, index) => (
          <li
            key={index}
            className="flex flex-row justify-between items-center py-4"
          >
            <div className="flex flex-col w-5/6">
              <div className="flex mb-2">
                <GoGitBranch className="mr-2 text-neutral-400" />
                <a
                  className="text-sm text-blue-500"
                  href={`https://github.com/${event.repo?.name}`}
                  target="_blank"
                >
                  {event.payload.ref}
                </a>
              </div>
              {event.payload.commits?.map(
                (commit: any, commitIndex: number) => (
                  <p key={commitIndex} className="text-sm text-neutral-400">
                    {commit.message}
                  </p>
                )
              )}
            </div>
            <p className="font-light text-neutral-400">
              {formatDate(event.created_at)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Github;
