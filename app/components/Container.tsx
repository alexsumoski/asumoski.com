"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] px-4 sm:px-4 md:px-8 lg:px-16 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
