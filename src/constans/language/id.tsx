import paymentXenditCustom from "../../../public/images/projects/payment-xendit-custom.png";
import tnosPwa from "../../../public/images/projects/tnos-pwa.png";
import myBlog from "../../../public/images/projects/my-blog.png";
import news from "../../../public/images/projects/news.png";
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
        "Pengembang dengan fokus kuat pada Full Stack Development. Mahir dalam TypeScript dan berpengalaman dalam semua aspek teknologi web. Pemain tim kolaboratif yang berdedikasi untuk menghadirkan aplikasi web yang efisien, terukur, dan menarik secara visual. Saya menikmati membangun situs & aplikasi.",
      place: "Tinggal di jakarta",
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
          title: "Pengembang Full-Stack",
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
            "Tailwind",
            "Directus js",
            "PostgreSQL",
          ],
          imageUrl: myBlog, // You can translate the image filenames if needed
          link: "https://evairo-blog.vercel.app/",
        },
        {
          title: "Berita",
          description:
            "Portal berita utama yang menawarkan berita terbaru dan analisis mendalam di berbagai bidang, termasuk politik, ekonomi, hiburan, dan teknologi.",
          tags: ["Laravel"],
          imageUrl: news, // You can translate the image filenames if needed
          link: "#",
        },
      ],
    },
  },
};

export default ID;