import React from "react";

const Footer: React.FC = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="flex justify-between items-center pt-32 pb-8 w-full">
      <p>© {currentDate} Alex Sumoski.</p>
    </footer>
  );
};

export default Footer;
