import React from "react";
import "../haze.scss";

const Haze = () => (
  <div className="h -z-10">
    {[...Array(60)].map((_, i) => (
      <div key={i} className={`c c${i + 1}`}></div>
    ))}
  </div>
);

export default Haze;
