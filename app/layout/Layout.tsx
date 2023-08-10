"use client";
import "../../app/globals.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Epilogue } from "next/font/google";
import Bar from "./Bar";

interface LayoutProps {
  children: React.ReactNode;
}
const font = Epilogue({ subsets: ["latin"] });

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={font.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
