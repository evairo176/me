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
