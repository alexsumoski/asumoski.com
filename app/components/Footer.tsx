import React from "react";

const Footer: React.FC = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="flex justify-between items-center xl:px-20 md:px-10 sm:px-2 px-4 py-8 w-full">
      <p>© {currentDate} Alex Sumoski.</p>
    </footer>
  );
};

export default Footer;
