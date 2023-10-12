"use client";
import React from "react";
import { PiCoffeeBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Props = {};

const Introduction = (props: Props) => {
  return (
    <section className="p-3 lg:p-8 rounded-xl border bg-card text-card-foreground shadow">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <h1>{"Hi, I'm Dicki"}</h1>
          <motion.div
            animate={{ rotate: 20 }}
            transition={{
              yoyo: Infinity,
              from: 0,
              duration: 0.2,
              ease: "easeInOut",
              type: "tween",
            }}
          >
            👋
          </motion.div>
        </div>
        <Button variant={"secondary"} aria-label="donation">
          <PiCoffeeBold className="w-[25px] h-[25px]" />
        </Button>
      </div>
      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>Software Engineer</li>
          <li>
            Based in Jakarta <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          Passionate and seasoned Software Engineer with a strong focus on Full
          Stack Development. Proficient in TypeScript and well-versed in all
          aspects of web technologies. Collaborative team player dedicated to
          delivering efficient, scalable, and visually appealing web
          applications. I enjoy building sites & apps. My focus is React
          (Next.js) & React Native.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
