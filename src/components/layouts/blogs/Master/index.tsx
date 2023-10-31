import React from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children: React.ReactNode;
};

const Master = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh - 300px)] pt-10">
        <div className="mx-auto w-full max-w-7xl px-4">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Master;
