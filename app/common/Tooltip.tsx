import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

interface TooltipProps {
  tooltipText: string;
  children: React.ReactNode;
}

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

const Tooltip: React.FC<TooltipProps> = ({ tooltipText, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  const props = useSpring({
    opacity: showTooltip ? 1 : 0,
    transform: showTooltip ? "scale(1)" : "scale(0.9)",
  });

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowTooltip(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setShowTooltip(!showTooltip);
    }
  };

  return (
    <div className="relative ">
      <animated.div
        style={props}
        className={`
          absolute right-0 w-full max-w-lg min-w-[8rem] bg-white border-[3px] border-opacity-5 rounded px-4 py-3 
          bottom-full mb-3 shadow-xl shadow-slate-900
          text-black
        `}
      >
        {tooltipText}
      </animated.div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
