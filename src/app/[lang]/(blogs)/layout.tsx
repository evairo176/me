import Master from "@/components/layouts/blogs/Master";
import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "@/redux/ReduxProvider";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/context/ThemeProvider";
import QueryClientProvider from "@/context/QueryClientProvider";
import Script from "next/script";
import siteConfig from "@/constans/siteConfig";
import { getDictionary } from "@/lib/getDictionaries";
import { getDetailBlog } from "@/features/api/Blog";
import NextAuthProvider from "@/context/NextAuthProvider";
import { Toaster } from "@/components/ui/toaster";

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
      // template: "All Blogs | " + lang,
      default: "Blogs for anything | " + lang,
    },
    description: dictionary.footer.description,
    openGraph: {
      title: siteConfig.siteName,
      description: dictionary.footer.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs`,
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
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en/blogs`,
        "id-ID": `${process.env.NEXT_PUBLIC_SITE_URL}/id/blogs`,
        "ru-RU": `${process.env.NEXT_PUBLIC_SITE_URL}/ru/blogs`,
        "zh-Hant": `${process.env.NEXT_PUBLIC_SITE_URL}/cn/blogs`,
      },
    },
  };
};

export default function RootLayout({
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
            <NextAuthProvider>
              <QueryClientProvider>
                <Master>
                  {children}
                  <Toaster />
                </Master>
              </QueryClientProvider>
            </NextAuthProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
