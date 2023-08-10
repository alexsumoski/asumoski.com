import React, { useEffect, useState } from "react";

interface BarProps {}

const Bar: React.FC<BarProps> = () => {
  return (
    <div className="fixed left-[6%] top-1/2 transform -translate-y-1/2 w-[1px] h-[70%] z-20">
      {/* <div className="w-4 h-4 bg-white rounded-full absolute left-[calc(-0.5rem)]" /> */}
      <div className="absolute left-5 transform -translate-x-1/2">
        {/* <span>{currentSection}</span> */}
      </div>
      <style jsx>{`
        .fixed {
          background: linear-gradient(
            to bottom,
            rgba(30, 30, 30, 0) 0%,
            rgba(30, 30, 30, 1) 10%,
            rgba(30, 30, 30, 1) 90%,
            rgba(30, 30, 30, 0) 100%
          );
        }
      `}</style>
    </div>
  );
};

export default Bar;
