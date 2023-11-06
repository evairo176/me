import HomeModules from "@/components/modules/Home";
import { getDictionary } from "@/lib/getDictionaries";
import React from "react";

type Props = {
  params: {
    lang: string;
  };
};

const Home = async ({ params }: Props) => {
  const dictionary = await getDictionary(params.lang);
  return <HomeModules lang={params?.lang} dictionary={dictionary} />;
};

export default Home;
