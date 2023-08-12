import React, { useEffect, useState } from "react";

interface CodeEditorProps {
  code: string;
  typingSpeed?: number;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, typingSpeed = 50 }) => {
  const [typedCode, setTypedCode] = useState("");
  const fixedHeight = "500px";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < code.length) {
        setTypedCode((prevTypedCode) => prevTypedCode + code[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [code, typingSpeed]);

  return (
    <div
      className="perspective"
      style={{
        perspective: "7000px",
        perspectiveOrigin: "center right",
        display: "inline-block",
      }}
    >
      <pre
        className="text-green-300 p-4 text-[8px] rounded-lg overflow-hidden h-[100%] w-min min-w-[60%]"
        style={{
          maxHeight: fixedHeight,
          overflow: "hidden",
          //   transform: "rotateX(0deg) rotateY(-50deg)",
          transformOrigin: "top center",
        }}
      >
        {typedCode}
      </pre>
    </div>
  );
};

export default CodeEditor;
