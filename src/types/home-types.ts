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

export interface ExperiencesData {
  title: string;
  location: string;
  description: string;
  icon: string;
  date: string;
}

export interface HomeData {
  personal: {
    say: string;
    stack: string;
    description: string;
    place: string;
  };
  career: {
    career: string;
    descriptionCareer: string;
    downloadResume: string;
    experiencesData: ExperiencesData[];
  };
  projects: {
    title: string;
    description: string;
    projectsData: ProjectsType[];
  };
}

export interface FooterData {
  description: string;
  rightText: string;
  creatorText: string;
  currentlyAtText: string;
}

export interface CtaCardData {
  title: string;
  description: string;
  button: string;
  placeholder: string;
  subscribersText1: string;
  subscribersText2: string;
}

export interface ButtonData {
  readMore: string;
}

export interface NavigationData {
  links: {
    cities: string;
    experiences: string;
    technology: string;
  };
}

export interface DictionaryInterface {
  navigation: NavigationData;
  button: ButtonData;
  ctaCard: CtaCardData;
  footer: FooterData;
  home: HomeData;
}
