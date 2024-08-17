import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Dhanush S M",
  metadataBase: new URL("https://www.dhanushsm.vercel.app"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Dhanush S M", url: "https://github.com/dhanush-777x" }
  ],
  description: "Dhanush S M's personal portfolio website",
  openGraph: {
    title: "Dhanush S M",
    description: "Dhanush S M's personal portfolio website",
    images: [
      {
        url: "/profile.png",
        alt: "Dhanush's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
