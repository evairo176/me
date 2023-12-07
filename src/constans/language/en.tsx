import paymentXenditCustom from "../../../public/images/projects/payment-xendit-custom.png";
import tnosPwa from "../../../public/images/projects/tnos-pwa.png";
import myBlog from "../../../public/images/projects/my-blog.png";
import news from "../../../public/images/projects/news.png";
import ppa1 from "../../../public/images/projects/ppa1.jpeg";
import ppaweb from "../../../public/images/projects/ppaweb.png";
import { FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const EN = {
  navigation: {
    links: {
      cities: "Cities",
      experiences: "Experiences",
      technology: "Technology",
    },
  },
  button: {
    readMore: "Read More",
  },
  ctaCard: {
    title: "Explore the World with Me",
    description:
      "Explore the world with me; I'm currently traveling all around the globe 🌎. I've visited most major cities in 🇮🇩 and I'm currently traveling in 🇬🇸. Join me now!",
    button: "Sign Up",
    placeholder: "Enter your email.",
    subscribersText1: "Join our",
    subscribersText2: "subscribers now!",
  },
  footer: {
    description:
      "A minimalistic and beautiful travel blog sharing experiences and cities from around the world!",
    rightText: "All rights reserved | Copyright",
    creatorText: "Made with love by",
    currentlyAtText: "Currently at",
  },
  home: {
    personal: {
      say: "Hi, I'm Dicki",
      stack: "Full-Stack Developer",
      description:
        "A developer with a strong focus on Full Stack Development. Proficient in TypeScript and experienced in all aspects of web technology. A collaborative team player dedicated to delivering efficient, measurable, and visually appealing web applications. I enjoy building websites & apps.",
      place: "Based in Indramayu, West Java",
    },
    career: {
      career: "Career",
      descriptionCareer: "My professional career journey.",
      downloadResume: "Download Resume",
      experiencesData: [
        {
          title: "Diploma 3 Studies",
          location: "Indramayu State Polytechnic, West Java",
          description:
            "I graduated after 3 years of studying. I immediately found a job as a full-stack developer.",
          icon: <FaUniversity className="w-5 h-5" />,
          date: "Sep 2019 - Oct 2022",
        },
        {
          title: "Full-Stack Web Developer",
          location: "PT. Xtreme Network System, Jakarta",
          description:
            "I worked as a full-stack web developer for 9 months in one job. I also upskilled to the full stack.",
          icon: <MdWork className="w-5 h-5" />,
          date: "Oct 2022 - Jul 2023",
        },
        {
          title: "Full-Stack Developer",
          location: "KPN Plantation, Jakarta",
          description:
            "I'm now a full-stack developer working full-time. My technology stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
          icon: <MdWork className="w-5 h-5" />,
          date: "Aug 2023 - present",
        },
      ],
    },
    projects: {
      title: "My Projects",
      description: "My professional Project.",
      projectsData: [
        {
          title: "Photo Proof App",
          description:
            "Application that functions to record the types of activities of plantation employees, so that we can control and view them easily.",
          tags: ["Asp.net", "SQL SERVER", "API", "React Native", "Typescript"],
          imageUrl: ppa1,
          link: "",
        },
        {
          title: "Photo Proof Web",
          description:
            "A website that functions to monitor and report data from Android to make it easier to read",
          tags: [
            "Asp.net",
            "SQL SERVER",
            "API",
            "Tailwind CSS",
            "Next JS",
            "Typescript",
          ],
          imageUrl: ppaweb,
          link: "",
        },
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
          tags: [
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Postgree",
            "Express JS",
          ],
          imageUrl: myBlog,
          link: "https://evairo-nice.vercel.app/en/blogs",
        },
        {
          title: "News",
          description:
            "A leading news portal offering the latest news and in-depth analysis across various fields, including politics, economics, entertainment, and technology.",
          tags: ["Laravel", "Mysql", "Tailwind CSS", "Multi Language"],
          imageUrl: news,
          link: "#",
        },
      ],
    },
  },
};
export default EN;
