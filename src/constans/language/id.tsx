import paymentXenditCustom from "../../../public/images/projects/payment-xendit-custom.png";
import tnosPwa from "../../../public/images/projects/tnos-pwa.png";
import myBlog from "../../../public/images/projects/my-blog.png";
import news from "../../../public/images/projects/news.png";
import ppa1 from "../../../public/images/projects/ppa1.jpeg";
import ppaweb from "../../../public/images/projects/ppaweb.png";
import jobseeker from "../../../public/images/projects/jobseeker.png";
import discord from "../../../public/images/projects/discord.png";
import { FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const ID = {
  navigation: {
    links: {
      cities: "Kota",
      experiences: "Pengalaman",
      technology: "Teknologi",
    },
  },
  button: {
    readMore: "Selengkapnya",
  },
  ctaCard: {
    title: "Jelajahi dunia bersamaku",
    description:
      "Jelajahi dunia bersamaku, aku sedang bepergian ke seluruh dunia 🌎. Aku sudah mengunjungi sebagian besar kota-kota besar di 🇮🇩 dan saat ini aku sedang melakukan perjalanan di 🇬🇸 Bergabunglah dengan saya",
    button: "Daftar",
    placeholder: "Tulis email kamu.",
    subscribersText1: "Bergabunglah dengan",
    subscribersText2: "pelanggan kami sekarang!",
  },
  footer: {
    description:
      "Sebuah blog perjalanan minimalis dan indah yang berbagi pengalaman dan kota-kota di seluruh dunia!",
    rightText: "Seluruh hak cipta dilindungi | hak cipta",
    creatorText: "Dibuat dengan cinta oleh",
    currentlyAtText: "Saat ini berada di",
  },
  home: {
    personal: {
      say: "Hi, Saya Dicki",
      stack: "Developer Full-Stack",
      description:
        "Saya adalah seorang Fullstack Developer berusia 23 tahun dengan pengalaman lebih dari 1,5 tahun. Keahlian saya mencakup pengembangan aplikasi web dan mobile menggunakan React, TypeScript, dan Laravel. Saya memiliki fokus kuat terhadap pengembangan end-to-end, mulai dari desain antarmuka hingga pengembangan backend, sehingga memastikan pengalaman pengguna yang mulus dan efisien. Dengan keinginan untuk terus belajar dan berinovasi, saya siap untuk memberikan kontribusi positif dalam proyek pengembangan perangkat lunak.",
      place: "Lokasi di Indramayu, Jawa Barat",
    },
    career: {
      career: "Karir",
      descriptionCareer: "Perjalanan karir profesional saya.",
      downloadResume: "Unduh Resume",
      experiencesData: [
        {
          title: "Studi Diploma 3",
          location: "Politeknik Negeri Indramayu, Jawa Barat",
          description:
            "Saya lulus setelah 3 tahun belajar. Saya segera mendapatkan pekerjaan sebagai pengembang full-stack.",
          icon: <FaUniversity className="w-5 h-5" />,
          date: "Sep 2019 - Okt 2022",
        },
        {
          title: "Pengembang Web Full-Stack",
          location: "PT. Xtreme Network Sistem, Jakarta",
          description:
            "Saya bekerja sebagai pengembang web full-stack selama 9 bulan dalam satu pekerjaan. Saya juga meningkatkan kemampuan sebagai pengembang full-stack.",
          icon: <MdWork className="w-5 h-5" />,
          date: "Okt 2022 - Jul 2023",
        },
        {
          title: "Frelance Full-Stack Developer",
          location: "Kerja Dari Rumah",
          description:
            "Pekerjaan freelance adalah pengalaman kerja yang memungkinkan saya bekerja secara mandiri dan fleksibel dalam proyek-proyek spesifik. Dalam kapasitas sebagai freelancer, saya telah berhasil mengelola proyek-proyek dengan tanggung jawab penuh, termasuk perencanaan, pelaksanaan, dan penyelesaian tepat waktu. Keahlian khusus saya meliputi [sebutkan keahlian atau industri], dan saya dapat dengan cepat beradaptasi dengan tuntutan proyek yang berbeda. Pengalaman freelance saya mencerminkan kemampuan saya dalam mengatasi tantangan, berkomunikasi secara efektif, dan memberikan solusi kreatif untuk mencapai tujuan proyek.",
          icon: <MdWork className="w-5 h-5" />,
          date: "Juli 2023 - sekarang",
        },
        {
          title: "Full-Stack Developer",
          location: "KPN Plantation, Jakarta",
          description:
            "Sekarang saya bekerja sebagai pengembang full-stack secara penuh waktu. Teknologi yang saya gunakan meliputi React, Next.js, TypeScript, Tailwind, Prisma, dan MongoDB. Saya terbuka untuk peluang pekerjaan penuh waktu.",
          icon: <MdWork className="w-5 h-5" />,
          date: "Agu 2023 - sekarang",
        },
      ],
    },
    projects: {
      title: "Proyek Saya",
      description: "Proyek profesional saya.",
      projectsData: [
        {
          title: "Clone Discord",
          description:
            "Rasakan pengalaman terbaik dalam komunikasi online dengan platform kami, yang terinspirasi oleh Discord, menyajikan pesan real-time, panggilan suara dan video, server dan saluran terorganisir, profil yang dapat disesuaikan, pemberitahuan intuitif, manajemen peran, emoji ekspresif, pencarian kuat, dan pilihan tema gelap atau terang yang mulus. Prioritaskan keamanan dan privasi, akses platform dari berbagai perangkat, dan berbagi file dengan mudah untuk komunitas online yang dinamis dan menarik.",
          tags: [
            "Next JS",
            "Postgree",
            "Redux Toolkit",
            "Framer Motion",
            "Typescript",
            "Tailwind CSS",
            "Socket IO",
            ,
          ],
          imageUrl: discord,
          link: "",
        },
        {
          title: "Jobseeker",
          description:
            "Website pencarian kerja dengan fitur perusahaan memungkinkan perusahaan untuk membuat dan mengelola lowongan pekerjaan, sementara para pencari kerja dapat dengan mudah mencari, melamar, dan mengelola aplikasi mereka.",
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
          title: "Aplikasi Photo Proof",
          description:
            "Aplikasi yang berfungsi untuk mencatat jenis-jenis kegiatan karyawan perkebunan, sehingga kita dapat mengontrol dan melihatnya dengan mudah.",
          tags: ["Asp.net", "SQL SERVER", "API", "React Native", "Typescript"],
          imageUrl: ppa1,
          link: "",
        },
        {
          title: "Photo Proof Web",
          description:
            "Sebuah situs web yang berfungsi untuk memantau dan melaporkan data dari Android agar lebih mudah dibaca",
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
          title: "Pembayaran Kustom Xendit",
          description:
            "Memudahkan pembayaran dengan metode pembayaran khusus Xendit seperti Kartu Kredit, Transfer Bank, E-Wallet, & Kode QR",
          tags: ["React.js", "Laravel", "CSS", "MySQL", "Xendit"],
          imageUrl: paymentXenditCustom, // You can translate the image filenames if needed
          link: "https://app.tnosworld.com/",
        },
        {
          title: "Situs PWA Tnos",
          description:
            "Saya bekerja sebagai pengembang full-stack dalam proyek startup ini selama 9 bulan. Pengguna dapat masuk, mendaftar, dan melakukan transaksi pada layanan pemesanan pengawal tubuh, membuat dokumen hukum, konsultasi hukum online menggunakan metode pembayaran kustom Xendit.",
          tags: [
            "React.js",
            "Laravel",
            "CSS",
            "MySQL",
            "Xendit",
            "Google Map",
            "Email Sendgrid",
          ],
          imageUrl: tnosPwa, // You can translate the image filenames if needed
          link: "https://app.tnosworld.com/",
        },
        {
          title: "Blog",
          description:
            "Saya membuat situs web blog ini untuk berbagi cara-cara saya dalam dunia pemrograman atau apapun yang lain.",
          tags: [
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Postgree",
            "Express JS",
          ],
          imageUrl: myBlog, // You can translate the image filenames if needed
          link: "https://evairo-nice.vercel.app/en/blogs/",
        },
        {
          title: "Berita",
          description:
            "Portal berita utama yang menawarkan berita terbaru dan analisis mendalam di berbagai bidang, termasuk politik, ekonomi, hiburan, dan teknologi.",
          tags: ["Laravel", "Mysql", "Tailwind CSS", "Multi Language"],
          imageUrl: news, // You can translate the image filenames if needed
          link: "#",
        },
      ],
    },
  },
};

export default ID;
