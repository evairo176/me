import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { AllLanguage } from "../../landing-page/Master";

type Props = {
  children: React.ReactNode;
};

const Master = async ({ children }: Props) => {
  const language = await AllLanguage();
  return (
    <>
      <Header language={language} />
      <div className="min-h-[calc(100vh - 300px)] pt-10">
        <div className="mx-auto w-full max-w-7xl px-4">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Master;
