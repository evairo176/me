import {
  ExperiencesType,
  MenuType,
  ProjectsType,
  SkillsType,
  stacksProps,
} from "@/types/home-types";
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
import paymentXenditCustom from "../../public/images/projects/payment-xendit-custom.png";
import tnosPwa from "../../public/images/projects/tnos-pwa.png";
import myBlog from "../../public/images/projects/my-blog.png";
import news from "../../public/images/projects/news.png";
import { BiLogoPostgresql } from "react-icons/bi";
// import appstore from "../../public/images/projects/appstore.jpg";
// import apps from "../../public/images/projects/appstore.jpg";
import {
  SiChakraui,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiGulp,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiReacttable,
  SiRedux,
  SiSass,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from "react-icons/si";
import { Icons } from "@/components/icons/shadcn-ui";
import { signOut } from "next-auth/react";

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
    title: "Blogs",
    icon: <PiArticleLight className="w-5 h-5" />,
    url: "/blogs",
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

export const MENU_DASHBOARD: MenuType[] = [
  {
    title: "Dashboard",
    icon: <AiOutlineDashboard className="w-5 h-5" />,
    url: "/admin/dashboard",
  },
  {
    title: "Blog",
    icon: <PiArticleLight className="w-5 h-5" />,
    url: "/admin/blog",
  },
];

export const experiencesData: ExperiencesType[] = [
  {
    title: "Study diploma 3",
    location: "Politeknik Negeri Indramayu, Jawa Barat",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a full-stack developer.",
    icon: <AiOutlineDashboard className="w-5 h-5" />,
    date: "Sep 2019 - Okt 2022",
  },
  {
    title: "Full-stack Web Developer",
    location: "PT. Xtreme Network Sistem, Jakarta",
    description:
      "I worked as a full-stack web developer for 9 month in 1 job. I also upskilled to the full stack.",
    icon: <AiOutlineDashboard className="w-5 h-5" />,
    date: "Okt 2022 - Jul 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "KPN Plantation, Jakarta",
    description:
      "I'm now a full-stack developer working as a full-time. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: <AiOutlineDashboard className="w-5 h-5" />,
    date: "Agu 2023 - present",
  },
];

export const projectsData: ProjectsType[] = [
  {
    title: "Payment Costum Xendit",
    description:
      "Make payments easier with Xendit special payments such as Credit Cards, Bank Transfers, E-Wallets & QR Codes",
    tags: ["React.js", "Laravel", "CSS", "Mysql", "Xendit"],
    imageUrl: paymentXenditCustom,
    link: "https://app.tnosworld.com/",
  },
  {
    title: "PWA Tnos Website",
    description:
      "I work as a full-stack developer at this startup project for 9 months. Users can log in, register and carry out transactions on body guard ordering services, creating legal documents, online legal consultations using the custom Xendit payment method.",
    tags: [
      "React.js",
      "Laravel",
      "CSS",
      "Mysql",
      "Xendit",
      "Google Map",
      "Sendgrid Email",
    ],
    imageUrl: tnosPwa,
    link: "https://app.tnosworld.com/",
  },
  {
    title: "Blog",
    description:
      "I created this blog website to share some of the ways I do in the world of programming or anything else.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Directus js", "Postgree"],
    imageUrl: myBlog,
    link: "https://evairo-blog.vercel.app/",
  },
  // {
  //   title: "App Store",
  //   description:
  //     "Easy Android and iOS food ordering application with MidTrans online payment.",
  //   tags: ["React Native", "Laravel", "Midtrans"],
  //   imageUrl: apps,
  //   link: "#",
  // },
  {
    title: "News",
    description:
      "A leading news portal offering the latest news and in-depth analysis across various fields, including politics, economics, entertainment, and technology.",
    tags: ["Laravel"],
    imageUrl: news,
    link: "#",
  },
];

export const skillsData: SkillsType = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Midtrans",
  "Xendit",
];

const iconSize = 25;
// : ,
// : ,
// : ,
// "": ,
// "": ,
// : ,
// : (
//
// ),
// : ,
// "": ,
// : ,
// : ,
// : ,
// "": ,
// : ,
// : ,
// : ,
// : ,
// "": ,
// "Nuxt.js": <SiNuxtdotjs size={iconSize} className="text-green-600" />,
// "Vue.js": <SiVuedotjs size={iconSize} className="text-green-500" />,
// : ,
// "": ,
// : ,
// "": ,
// : ,
// : ,
// : ,
// "": ,
// : ,
// : ,
// "": ,
// "": (
//
// ),
// "": ,

export const STACKS: stacksProps[] = [
  {
    name: "PHP",
    icon: <SiPhp size={iconSize} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={iconSize} className="text-blue-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={iconSize} />,
  },
  {
    name: "React.js",
    icon: <SiReact size={iconSize} className="text-sky-500" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql size={iconSize} className="text-pink-600" />,
  },
  {
    name: "Material UI",
    icon: <SiMui size={iconSize} className="text-sky-400" />,
  },
  {
    name: "Vite",
    icon: <SiVite size={iconSize} className="text-purple-500" />,
  },
  {
    name: "PostgreSql",
    icon: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  },
  {
    name: "ChakraUI",
    icon: <SiChakraui size={iconSize} className="text-teal-500" />,
  },
  {
    name: "React Native",
    icon: <SiReact size={iconSize} className="text-sky-600" />,
  },
  {
    name: "Expo",
    icon: <SiExpo size={iconSize} />,
  },
  {
    name: "SASS",
    icon: <SiSass size={iconSize} className="text-pink-600" />,
  },
  {
    name: "Gulp",
    icon: <SiGulp size={iconSize} className="text-red-500" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={iconSize} className="text-yellow-500" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={iconSize} />,
  },
  {
    name: "Jest",
    icon: <SiJest size={iconSize} className="text-orange-600" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={iconSize} />,
  },
  {
    name: "Redux",
    icon: <SiRedux size={iconSize} className="text-purple-500" />,
  },
  {
    name: "React Query",
    icon: <SiReactquery size={iconSize} className="text-red-600" />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 size={iconSize} className="text-orange-500" />,
  },
  {
    name: "CSS",
    icon: <SiCss3 size={iconSize} className="text-blue-500" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={iconSize} className="text-teal-500" />,
  },
  {
    name: "Node JS",
    icon: <SiNodedotjs size={iconSize} className="text-green-600" />,
  },
  {
    name: "Github",
    icon: <SiGithub size={iconSize} />,
  },
  {
    name: "Storybook",
    icon: <SiStorybook size={iconSize} className="text-pink-500" />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter size={iconSize} className="text-pink-500" />,
  },
  {
    name: "React Hook Form",
    icon: <SiReacthookform size={iconSize} className="text-pink-500" />,
  },
  {
    name: "React Table",
    icon: <SiReacttable size={iconSize} className="text-rose-600" />,
  },
  {
    name: "Shadcn/ui",
    icon: (
      <Icons.logo
        className={`h-[${iconSize}px] w-[${iconSize}px] text-slate-500`}
      />
    ),
  },
  {
    name: "NPM",
    icon: (
      <Icons.npm
        className={`h-[${iconSize}px] w-[${iconSize}px] text-red-500`}
      />
    ),
  },
  {
    name: "Google",
    icon: (
      <Icons.google
        className={`h-[${iconSize}px] w-[${iconSize}px] text-blue-500`}
      />
    ),
  },
  {
    name: "Xendit",
    icon: (
      <Icons.xendit
        className={`h-[${iconSize}px] w-[${iconSize}px] text-blue-500`}
      />
    ),
  },
  {
    name: "Midtrans",
    icon: <Icons.midtrans className={`h-[${iconSize}px] w-[${iconSize}px]`} />,
  },
];
