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
      <div className="lg:max-w-[854px] p-5 lg:p-0 lg:mt-8 w-full lg:min-h-screen no-scrollbar">
        <div className="mb-10 mt-20 md:mt-0 p-3 lg:p-8 rounded-xl border bg-card text-card-foreground shadow transition-all scroll-smooth duration-300  aos-init aos-animate">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Master;
