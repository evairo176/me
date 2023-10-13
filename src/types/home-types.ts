import { StaticImageData } from "next/image";
import React from "react";

export type MenuType = {
  title: string;
  icon?: React.ReactNode;
  url: string;
};

export type ExperiencesType = {
  title: string;
  location: string;
  description: string;
  icon?: React.ReactNode;
  date: string;
};

export type ProjectsType = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | StaticImageData;
  link: string;
};

export type SkillsType = string[];

export type stacksProps = {
  name: string;
  icon?: JSX.Element;
};
