import Master from "@/components/layouts/landing-page/Master";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/redux/ReduxProvider";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/context/ThemeProvider";
import QueryClientProvider from "@/context/QueryClientProvider";
import Script from "next/script";
import { getDictionary } from "@/lib/getDictionaries";
import siteConfig from "@/constans/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async ({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) => {
  const dictionary = await getDictionary(lang);

  return {
    title: {
      default: siteConfig.siteName + " | " + lang,
    },
    description: dictionary.footer.description,
    openGraph: {
      title: siteConfig.siteName,
      description: dictionary.footer.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`,
          width: 1200,
          height: 628,
        },
      ],
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
        "id-ID": `${process.env.NEXT_PUBLIC_SITE_URL}/id`,
        "ru-RU": `${process.env.NEXT_PUBLIC_SITE_URL}/ru`,
        "zh-Hant": `${process.env.NEXT_PUBLIC_SITE_URL}/cn`,
      },
    },
  };
};

// export const getAllLanguageData = cache(async () => {
//   try {
//     const allLanguage = await getAllLanguage();

//     return allLanguage;
//   } catch (error) {
//     console.log(error);
//   }
// });

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang}>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TFKFNCY918"
      ></Script>
      <Script id="google-analytics">
        {`  window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-TFKFNCY918');`}
      </Script>
      <body
        className={`${inter.className} bg-background`}
        suppressHydrationWarning={true}
      >
        <ReduxProvider>
          <NextTopLoader
            color="#05b6d3"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <QueryClientProvider>
              <Master>{children}</Master>
            </QueryClientProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
