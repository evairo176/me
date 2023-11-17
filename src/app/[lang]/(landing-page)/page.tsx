import HomeModules from "@/components/modules/Home";
import { getAllLanguage } from "@/features/api/Language";
import { getDictionary } from "@/lib/getDictionaries";
import React from "react";

type Props = {
  params: {
    lang: string;
  };
};

const Home = async ({ params }: Props) => {
  const dictionary = await getDictionary(params.lang);

  return <HomeModules dictionary={dictionary} />;
};

export default Home;
