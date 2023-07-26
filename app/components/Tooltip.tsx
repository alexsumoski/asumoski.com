import React, { useState } from "react";

interface TooltipProps {
  tooltipText: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ tooltipText, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div
        className={`
          absolute right-0 w-[12rem] bg-slate-700 bg-opacity-[80%] text-white text-sm rounded px-4 py-3 
          bottom-full mb-3
          transition-all duration-200 ease-in-out 
          ${showTooltip ? "opacity-100 scale-100" : "opacity-0 scale-90"} 
          transform min-w-[4rem] 
        `}
        style={{
          transition: "opacity 200ms ease-in-out, transform 200ms ease-in-out",
        }}
      >
        {tooltipText}
      </div>
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
