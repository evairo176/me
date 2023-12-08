import paymentXenditCustom from "../../../public/images/projects/payment-xendit-custom.png";
import tnosPwa from "../../../public/images/projects/tnos-pwa.png";
import myBlog from "../../../public/images/projects/my-blog.png";
import news from "../../../public/images/projects/news.png";
import ppa1 from "../../../public/images/projects/ppa1.jpeg";
import ppaweb from "../../../public/images/projects/ppaweb.png";
import jobseeker from "../../../public/images/projects/jobseeker.png";
import { FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const RU = {
  navigation: {
    links: {
      cities: "Города",
      experiences: "Опыт",
      technology: "Технологии",
    },
  },
  button: {
    readMore: "Читать далее",
  },
  ctaCard: {
    title: "Исследуйте мир вместе со мной",
    description:
      "Исследуйте мир вместе со мной; в настоящее время я путешествую по всему миру 🌎. Я посетил большинство крупных городов в 🇮🇩, и в настоящее время я нахожусь в путешествии в 🇬🇸. Присоединяйтесь ко мне сейчас!",
    button: "Зарегистрироваться",
    placeholder: "Введите ваш email.",
    subscribersText1: "Присоединяйтесь к нашим",
    subscribersText2: "подписчикам сейчас!",
  },
  footer: {
    description:
      "Минималистичный и красивый блог о путешествиях, делящийся опытом и городами со всего мира!",
    rightText: "Все права защищены | Авторское право",
    creatorText: "Сделано с любовью",
    currentlyAtText: "В настоящее время в",
  },
  home: {
    personal: {
      say: "Привет, я Дики",
      stack: "Full-Stack Разработчик",
      description:
        "Разработчик с основным фокусом на Full Stack Development. Опытный в TypeScript и опытный во всех аспектах веб-технологий. Коллективный игрок в команде, посвятивший себя созданию эффективных, измеримых и визуально привлекательных веб-приложений. Мне нравится создавать веб-сайты и приложения.",
      place: "Базируюсь в Индрамаю, Западная Ява",
    },
    career: {
      career: "Карьера",
      descriptionCareer: "Мой профессиональный карьерный путь.",
      downloadResume: "Скачать Резюме",
      experiencesData: [
        {
          title: "Обучение по программе Диплом",
          location: "Индрамаюское политехническое училище, Западная Ява",
          description:
            "Я окончил учебу после 3 лет обучения. Сразу же нашел работу в качестве full-stack разработчика.",
          icon: <FaUniversity className="w-5 h-5" />,
          date: "Сен 2019 - Окт 2022",
        },
        {
          title: "Full-Stack Веб-разработчик",
          location: "PT. Xtreme Network System, Джакарта",
          description:
            "Я работал в качестве full-stack веб-разработчика в течение 9 месяцев на одной работе. Также повысил свои навыки до full stack.",
          icon: <MdWork className="w-5 h-5" />,
          date: "Окт 2022 - Июль 2023",
        },
        {
          title: "Фрилансер Full-Stack Разработчик",
          location: "Работа из дома",
          description:
            "Фриланс - это опыт работы, который позволил мне работать самостоятельно и гибко над конкретными проектами. В моей роли фрилансера я успешно управлял проектами с полной ответственностью, включая планирование, выполнение и своевременное завершение. Мои конкретные навыки включают в себя [упомяните навыки или отрасль], и я могу быстро адаптироваться к требованиям различных проектов. Мой опыт в сфере фриланса отражает мою способность решать сложности, эффективно общаться и предоставлять креативные решения для достижения целей проекта.",
          icon: <MdWork className="w-5 h-5" />,
          date: "Июль 2023 - настоящее время",
        },
        {
          title: "Full-Stack Разработчик",
          location: "KPN Plantation, Джакарта",
          description:
            "Теперь я full-stack разработчик, работающий на полную ставку. Мой стек технологий включает React, Next.js, TypeScript, Tailwind, Prisma и MongoDB. Я открыт для полноценных возможностей.",
          icon: <MdWork className="w-5 h-5" />,
          date: "Авг 2023 - настоящее время",
        },
      ],
    },
    projects: {
      title: "Мои проекты",
      description: "Мои профессиональные проекты.",
      projectsData: [
        {
          title: "Соискатель",
          description:
            "Веб-сайт поиска работы с функцией компании позволяет компаниям создавать и управлять вакансиями, а соискателям легко искать, подавать заявки и управлять своими заявками.",
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
          title: "Приложение Photo Proof",
          description:
            "Приложение, которое предназначено для записи типов деятельности сотрудников плантации, чтобы мы могли легко контролировать и просматривать их.",
          tags: ["Asp.net", "SQL SERVER", "API", "React Native", "Typescript"],
          imageUrl: ppa1,
          link: "",
        },
        {
          title: "Photo Proof Web",
          description:
            "Веб-сайт, предназначенный для мониторинга и отчетности данных с Android для более удобного чтения",
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
          title: "Оплата через Xendit",
          description:
            "Упростите процесс оплаты с помощью специальных платежей Xendit, таких как кредитные карты, банковские переводы, электронные кошельки и QR-коды.",
          tags: ["React.js", "Laravel", "CSS", "Mysql", "Xendit"],
          imageUrl: paymentXenditCustom,
          link: "https://app.tnosworld.com/",
        },
        {
          title: "PWA Tnos Website",
          description:
            "Я работаю в качестве full-stack разработчика на этом стартап-проекте в течение 9 месяцев. Пользователи могут войти, зарегистрироваться и совершать транзакции по заказу услуг охраны, создавать юридические документы, получать онлайн-юридические консультации с использованием метода оплаты Xendit.",
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
          title: "Блог",
          description:
            "Я создал этот блог для обмена опытом в мире программирования или чего-либо еще.",
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
          title: "Новости",
          description:
            "Ведущий новостной портал, предлагающий последние новости и глубокий анализ в различных областях, включая политику, экономику, развлечения и технологии.",
          tags: ["Laravel", "Mysql", "Tailwind CSS", "Multi Language"],
          imageUrl: news,
          link: "#",
        },
      ],
    },
  },
};
export default RU;
