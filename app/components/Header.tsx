import React from 'react';
import Image from 'next/image';
import logo from "../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="container p-8">
        <Image src={logo} height={50} width={50} alt='Logo' />
      </div>
    </header>
  );
};

export default Header;
