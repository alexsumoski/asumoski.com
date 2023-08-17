// Layout.tsx

import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title || "Alex Sumoski | Front-end Developer"}</title>
        <meta
          name="description"
          content={
            description ||
            "Experienced front-end developer specialized in Angular and React. Delivering efficient UX/UI solutions with a structured approach."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../favicon.svg" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
