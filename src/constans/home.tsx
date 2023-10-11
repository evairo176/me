import { ExperiencesType, MenuType } from "@/types/home-types";
import { BiHomeCircle } from "react-icons/bi";
import { CiViewTimeline } from "react-icons/ci";
import { PiArticleLight } from "react-icons/pi";
import { GiStumpRegrowth } from "react-icons/gi";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineDashboard,
} from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineContacts } from "react-icons/md";

export const MENU: MenuType[] = [
  {
    title: "Home",
    icon: <BiHomeCircle className="w-5 h-5" />,
    url: "/",
  },
  {
    title: "Project",
    icon: <AiOutlineFundProjectionScreen className="w-5 h-5" />,
    url: "/projects",
  },
  {
    title: "Blog",
    icon: <PiArticleLight className="w-5 h-5" />,
    url: "/blog",
  },
  {
    title: "Learn",
    icon: <GiStumpRegrowth className="w-5 h-5" />,
    url: "/learn",
  },
  {
    title: "Roadmap",
    icon: <CiViewTimeline className="w-5 h-5" />,
    url: "/roadmap",
  },
  {
    title: "Task Board",
    icon: <GoTasklist className="w-5 h-5" />,
    url: "/task-board",
  },
  {
    title: "About",
    icon: <SiAboutdotme className="w-5 h-5" />,
    url: "/about",
  },
  {
    title: "Contact",
    icon: <MdOutlineContacts className="w-5 h-5" />,
    url: "/contact",
  },
  {
    title: "Dashboard",
    icon: <AiOutlineDashboard className="w-5 h-5" />,
    url: "/dashboard",
  },
];

export const experiencesData: ExperiencesType[] = [
  {
    title: "Study di ploma 3",
    location: "Politeknik Negeri Indramayu, Jawa Barat",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a full-stack developer.",
    icon: <AiOutlineDashboard className="w-5 h-5" />,
    date: "2019 - 2022",
  },
  {
    title: "Full-stack Web Developer",
    location: "PT. Xtreme Network Sistem, Jakarta",
    description:
      "I worked as a full-stack web developer for 9 month in 1 job. I also upskilled to the full stack.",
    icon: <AiOutlineDashboard className="w-5 h-5" />,
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "KPN Plantation, Jakarta",
    description:
      "I'm now a full-stack developer working as a full-time. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: <AiOutlineDashboard className="w-5 h-5" />,
    date: "2023 - present",
  },
];
