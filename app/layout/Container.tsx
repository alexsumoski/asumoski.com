"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative max-w-[2520px] px-4 sm:px-4 md:px-8 lg:px-20 xl:px-44 2xl:px-72">
      {children}
    </div>
  );
};

export default Container;
