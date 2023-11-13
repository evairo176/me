"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectsType } from "@/types/home-types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CgDetailsMore } from "react-icons/cg";

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectsType) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 scroll-mt-30"
      id="projects"
    >
      <section className="bg-background max-w-[42rem] border borderBlack rounded-md overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:hover:bg-white/20">
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="relative  block sm:hidden w-[100%] max-h-[300px] object-cover object-center rounded-t-lg shadow-2xl
      transition 
      group-hover:scale-[1.04]
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2

      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3
      group-even:group-hover:rotate-2

      "
        />
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2  sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="text-2xl font-semibold">{title}</div>
          <Link
            className="cursor-pointer absolute top-2 right-2 z-[10] bg-muted rounded-md"
            href={link}
          >
            <CgDetailsMore className="w-5 h-5" />
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p className="mt-2 text-sm leading-relaxed text-justify line-clamp-5">
                  {description}
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <div className="w-[280px] text-justify">{description}</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="px-3 bg-muted py-1 text-[9px] uppercase tracking-wider rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
      transition 
      group-hover:scale-[1.04]
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2

      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3
      group-even:group-hover:rotate-2

      group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};

export default Project;
