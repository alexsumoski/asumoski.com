import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

interface TooltipProps {
  tooltipText: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right" | "middle";
  darkBackground?: boolean;
  wide?: boolean;
}

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

const Tooltip: React.FC<TooltipProps> = ({
  tooltipText,
  children,
  position = "top",
  darkBackground = false,
  wide = false,
}) => {
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

  const tooltipClasses = `
    absolute ${wide ? "w-[80%]" : "w-max"} bg-${
    darkBackground ? "black" : "white"
  } ${darkBackground ? "text-white" : "text-black"} ${
    darkBackground
      ? "border-[1px] border-gray-800"
      : "border-[3px] border-opacity-5"
  } rounded px-4 py-3 shadow-2xl shadow-black`;

  const tooltipPositionClasses = {
    top: "bottom-full mb-3",
    bottom: "top-full mt-3",
    left: "right-full mr-3",
    right: "left-full ml-3",
    middle:
      "top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2",
  };

  return (
    <div className={`relative`}>
      <animated.div
        style={props}
        className={`
          ${tooltipClasses}
          ${tooltipPositionClasses[position]}
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
