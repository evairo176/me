import React from "react";
import Sidebar from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

const Master = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center lg:flex-row lg:gap-5 lg:pt-10">
      {/* Sidebar */}

      <Sidebar />

      {/* Content */}
      <div className="lg:max-w-[854px] transition-all scroll-smooth duration-300 w-full lg:min-h-screen no-scrollbar border">
        {children}
      </div>
    </div>
  );
};

export default Master;
