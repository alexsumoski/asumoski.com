"use client";
import "../app/globals.css";
import React from "react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import { Epilogue } from "next/font/google";

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