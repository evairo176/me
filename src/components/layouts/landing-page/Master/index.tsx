import React from "react";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
};

const Master = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row lg:gap-5 lg:pt-10">
        {/* Sidebar */}

        <Sidebar />

        {/* Content */}
        <div className="lg:max-w-[854px] p-2 lg:p-0 lg:mt-8 w-full lg:min-h-screen no-scrollbar">
          <div className="mb-10 mt-24 md:mt-0 transition-all scroll-smooth duration-300  aos-init aos-animate">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Master;
