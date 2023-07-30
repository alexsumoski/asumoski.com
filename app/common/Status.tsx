import React from "react";

interface StatusProps {
  status: "completed" | "inProgress" | "planning";
}

const Status: React.FC<StatusProps> = ({ status }) => {
  const statusStyles = {
    completed: "bg-green-500 text-green-500",
    inProgress: "bg-yellow-500 text-yellow-500",
    planning: "bg-light-blue-500 text-blue-300",
  };

  const statusText = {
    completed: "Completed",
    inProgress: "In Progress",
    planning: "Planning",
  };

  return (
    <div className="flex items-center cursor-default">
      <div
        className={`w-2 h-2 mr-2 mb-1 rounded-full ${
          statusStyles[status].split(" ")[0]
        }`}
      />
      <span
        className={`text-sm font-semibold ${
          statusStyles[status].split(" ")[1]
        }`}
      >
        {statusText[status]}
      </span>
    </div>
  );
};

export default Status;
