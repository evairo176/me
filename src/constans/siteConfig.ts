export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  currentlyAtText: string;
  socialLink: {
    github: string;
    website: string;
    facebook: string;
    linkedin: string;
  };
  footer: {
    description: string;
    rightText: string;
    creatorText: string;
    currentlyAtText: string;
  };
  ctaCard: {
    description: string;
    title: string;
    button: string;
    placeholder: string;
    subscribersText1: string;
    subscribersText2: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "My Blog and Portofolios",
  description:
    "Welcome to my personal blog and portfolio showcase! This platform serves as a creative outlet for me to share my thoughts, experiences, and projects with the world. Whether you're looking for insightful articles, captivating stories, or a glimpse into my professional work, you'll find it all here. Join me on this journey as I explore various topics, showcase my skills, and engage with a diverse community of reader!",
  currentlyAt: "Jakarta",
  currentlyAtText: "Saat ini berada di",
  socialLink: {
    github: "https://github.com/evairo176",
    website: "https://evairo-portofolio.vercel.app/",
    facebook:
      "https://www.facebook.com/profile.php?id=100008224712736&mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/dicki-prasetya-3a7587195",
  },
  footer: {
    description:
      "Sebuah blog perjalanan minimalis dan indah yang berbagi pengalaman dan kota-kota di seluruh dunia!",
    rightText: "Seluruh hak cipta dilindungi | hak cipta",
    creatorText: "Dibuat dengan cinta oleh",
    currentlyAtText: "Saat ini berada di",
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
};

export default siteConfig;
