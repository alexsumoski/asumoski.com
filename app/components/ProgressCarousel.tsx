import { useSpring, animated } from "react-spring";
import { useInterval } from "react-use";
import React, { useState } from "react";
import ProgressCircle from "./ProgressCircle"; // import your ProgressCircle component

const ProgressCarousel: React.FC = () => {
  const items = [
    { label: "Performance", percentage: 100 },
    { label: "Accessibility", percentage: 100 },
    { label: "Best Practices", percentage: 100 },
    { label: "SEO", percentage: 100 },
  ];

  const [current, setCurrent] = useState(1);

  useInterval(() => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % items.length);
  }, 5000);

  const transitions = useSpring({
    transform: `translateX(-${current * 33}%)`,
  });

  return (
    <div className="w-full translate-x-[33%] -translate-y-4 absolute overflow-visible">
      <animated.div className="flex" style={transitions}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`h-[26rem] relative w-1/3 flex-shrink-0 transition-all duration-500 ${
              index === current ? "" : "scale-50 opacity-30 blur-sm"
            }`}
          >
            <div className="w-full">
              <ProgressCircle label={item.label} percentage={item.percentage} />
            </div>
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default ProgressCarousel;
