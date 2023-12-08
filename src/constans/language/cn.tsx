import paymentXenditCustom from "../../../public/images/projects/payment-xendit-custom.png";
import tnosPwa from "../../../public/images/projects/tnos-pwa.png";
import myBlog from "../../../public/images/projects/my-blog.png";
import news from "../../../public/images/projects/news.png";
import ppa1 from "../../../public/images/projects/ppa1.jpeg";
import ppaweb from "../../../public/images/projects/ppaweb.png";
import jobseeker from "../../../public/images/projects/jobseeker.png";
import { FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const CN = {
  navigation: {
    links: {
      cities: "城市",
      experiences: "经验",
      technology: "技术",
    },
  },
  button: {
    readMore: "阅读更多",
  },
  ctaCard: {
    title: "与我一起探索世界",
    description:
      "与我一起探索世界；我目前正在全球各地旅行 🌎。我已经访问过印度尼西亚的大多数主要城市 🇮🇩，目前正在前往格鲁吉亚 🇬🇸。立即加入我吧！",
    button: "注册",
    placeholder: "输入您的电子邮件。",
    subscribersText1: "加入我们的",
    subscribersText2: "订阅者现在！",
  },
  footer: {
    description: "一个极简而美丽的旅行博客，分享来自世界各地的经验和城市！",
    rightText: "保留所有权利 | 版权",
    creatorText: "用爱制作",
    currentlyAtText: "目前在",
  },
  home: {
    personal: {
      say: "嗨，我是Dicki",
      stack: "全栈开发人员",
      description:
        "专注于全栈开发的开发人员。精通TypeScript，有在web技术的所有方面的经验。致力于提供高效、可衡量且视觉上吸引人的web应用程序的协作团队成员。我喜欢构建网站和应用程序。",
      place: "总部位于印尼西爪哇的因德拉梅约",
    },
    career: {
      career: "职业",
      descriptionCareer: "我的职业生涯之旅。",
      downloadResume: "下载简历",
      experiencesData: [
        {
          title: "大专学业",
          location: "印尼西爪哇的因德拉梅约州立理工学院",
          description: "我在3年的学习后毕业。我立即找到了全栈开发人员的工作。",
          icon: <FaUniversity className="w-5 h-5" />,
          date: "2019年9月 - 2022年10月",
        },
        {
          title: "全栈Web开发人员",
          location: "印尼雅加达的XTreme Network System有限公司",
          description:
            "我在一份工作中担任了9个月的全栈Web开发人员。我还提升了全栈的技能。",
          icon: <MdWork className="w-5 h-5" />,
          date: "2022年10月 - 2023年7月",
        },
        {
          title: "自由職業 Full-Stack 開發人員",
          location: "在家工作",
          description:
            "自由職業工作是一種經驗，使我能夠在具體項目上獨立靈活地工作。作為自由職業者，我成功地管理了全責任的項目，包括計劃、執行和及時完成。我的具體技能包括[提及技能或行業]，我能夠迅速適應不同項目的需求。我的自由職業經驗反映了我解決挑戰、有效溝通並提供創意解決方案以達到項目目標的能力。",
          icon: <MdWork className="w-5 h-5" />,
          date: "2023年7月 - 至今",
        },
        {
          title: "全栈开发人员",
          location: "印尼雅加达的KPN Plantation",
          description:
            "我现在是一名全职全栈开发人员。我的技术栈包括React、Next.js、TypeScript、Tailwind、Prisma和MongoDB。我对全职机会持开放态度。",
          icon: <MdWork className="w-5 h-5" />,
          date: "2023年8月 - 至今",
        },
      ],
    },
    projects: {
      title: "我的项目",
      description: "我的专业项目。",
      projectsData: [
        {
          title: "求職者",
          description:
            "拥有公司功能的求职网站使公司能够创建和管理职位，而求职者可以轻松搜索、申请和管理他们的申请.",
          tags: [
            "Next JS",
            "Postgree",
            "Redux Toolkit",
            "Framer Motion",
            "Typescript",
            "Tailwind CSS",
          ],
          imageUrl: jobseeker,
          link: "",
        },
        {
          title: "照片证明应用",
          description:
            "该应用程序用于记录种植园员工的各种活动类型，以便我们可以轻松地进行控制和查看。",
          tags: ["Asp.net", "SQL SERVER", "API", "React Native", "Typescript"],
          imageUrl: ppa1,
          link: "",
        },
        {
          title: "照片证明网站",
          description:
            "该网站用于监控和报告来自Android的数据，以便更轻松地阅读",
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
          title: "自定义Xendit支付",
          description:
            "使用Xendit特殊支付，如信用卡、银行转账、电子钱包和QR码，使支付更加简便。",
          tags: ["React.js", "Laravel", "CSS", "Mysql", "Xendit"],
          imageUrl: paymentXenditCustom,
          link: "https://app.tnosworld.com/",
        },
        {
          title: "PWA Tnos网站",
          description:
            "我在这个初创项目中担任全栈开发人员达9个月。用户可以登录、注册，并使用定制的Xendit支付方式进行保镖订购服务、创建法律文件以及在线法律咨询。",
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
          title: "博客",
          description:
            "我创建了这个博客网站，分享我在编程世界或其他方面的一些经验。",
          tags: [
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Postgree",
            "Express JS",
          ],
          imageUrl: myBlog,
          link: "https://evairo-nice.vercel.app/en/blogs/",
        },
        {
          title: "新闻",
          description:
            "领先的新闻门户，提供各个领域的最新新闻和深入分析，包括政治、经济、娱乐和技术。",
          tags: ["Laravel", "Mysql", "Tailwind CSS", "Multi Language"],
          imageUrl: news,
          link: "#",
        },
      ],
    },
  },
};
export default CN;
