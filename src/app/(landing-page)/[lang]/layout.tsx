import Master from "@/components/layouts/landing-page/Master";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/redux/ReduxProvider";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/context/ThemeProvider";
import QueryClientProvider from "@/context/QueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dicki Prasetya",
  description: "My Portofolio",
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
    <html lang="en">
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
