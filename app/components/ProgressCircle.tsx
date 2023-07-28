import { animated, useSpring } from "react-spring";
import React, { useEffect, useState } from "react";

interface ProgressCircleProps {
  label: string;
  percentage: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  label,
  percentage,
}) => {
  const [offset, setOffset] = useState(0);

  const size = 150;
  const strokeWidth = 9;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, percentage]);

  const { offset: animatedOffset } = useSpring({
    from: { offset: circumference },
    to: { offset },
    config: { duration: 1000 },
  });
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: percentage },
    delay: 1500,
    config: { duration: 1200 },
  });

  return (
    <div className="flex flex-col items-center gap-4 opacity-70">
      <svg width={size} height={size}>
        <animated.circle
          stroke="white"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{ strokeDashoffset: animatedOffset }}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <animated.text
          className="text-5xl font-bold"
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fill="white"
        >
          {number.interpolate((n) => `${Math.floor(n)}%`)}
        </animated.text>
      </svg>
      <div className="text-center whitespace-nowrap">{label}</div>
    </div>
  );
};

export default ProgressCircle;
