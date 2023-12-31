import React, { useEffect, useState } from "react";
import Tooltip from "./Tooltip";

interface StatusProps {
  status: "completed" | "inProgress" | "continuousImprovement";
}

const Status: React.FC<StatusProps> = ({ status }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const statusStyles = {
    completed: "bg-green-500 text-green-500",
    inProgress: "bg-yellow-500 text-yellow-500",
    continuousImprovement: "bg-purple-500 text-purple-500",
  };

  const statusText = {
    completed: "Completed",
    inProgress: "In Progress",
    continuousImprovement: "Continuous Improvement",
  };

  const tooltipText = {
    completed: "Project is completed and all tasks are finished.",
    inProgress: "Project is currently in progress.",
    continuousImprovement:
      "Project is in a working state but additional features are to be added.",
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <Tooltip
      position="left"
      tooltipText={tooltipText[status]}
      wide={isSmallScreen}
    >
      <div className="flex items-center cursor-default translate-y-1">
        <div
          className={`w-2 h-2 mr-2 rounded-full ${
            statusStyles[status].split(" ")[0]
          }`}
        />
        <span
          className={`text-xs font-semibold ${
            statusStyles[status].split(" ")[1]
          }`}
        >
          {statusText[status]}
        </span>
      </div>
    </Tooltip>
  );
};

export default Status;
