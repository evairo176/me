"use client";
import { STACKS, skillsData } from "@/constans/home";
import { stacksProps } from "@/types/home-types";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Skill = (props: Props) => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (key: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * key,
      },
    }),
  };

  return (
    <ul className="flex flex-wrap justify-center gap-2 text-lg">
      {STACKS?.map((row: stacksProps, key: number) => {
        return (
          <motion.li
            className="flex  items-center gap-2 bg-muted rounded-xl px-5 py-3"
            key={key}
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={key}
          >
            {row.icon}
            {row.name}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Skill;
