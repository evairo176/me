"use client";
import { skillsData } from "@/constans/home";
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
    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {skillsData?.map((row: string, key: number) => {
        return (
          <motion.li
            className="bg-muted rounded-xl px-5 py-3 "
            key={key}
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={key}
          >
            {row}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Skill;
