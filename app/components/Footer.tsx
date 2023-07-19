import React from 'react';

const Footer: React.FC = () => {
    const currentDate = new Date().getFullYear();
  return (
    <footer className="w-full">
      <p>© {currentDate} Alex Sumoski.</p>
    </footer>
  );
};

export default Footer;
