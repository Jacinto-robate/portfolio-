import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jacinto Robate — Engenheiro Software",
  description:
    "Engenheiro de software e Web Designer, CEO da Nexus JR, atualmente disponível para trabalho. Focado em interfaces e experiências, trabalhando remotamente a partir de Tete, Moçambique.",
  generator: "Next.js",
  applicationName: "Jacinto Robate",
  keywords: [
    "freelancer",
    "desenvolvedor",
    "desenvolvedor freelancer",
    "frontend",
    "react",
    "desenvolvedor frontend",
    "engenheiro frontend",
    "criativo",
    "desenvolvedor criativo",
    "engenheiro criativo",
    "tecnologia",
    "moçambique",
    "software",
    "desenvolvedor de software",
    "portfólio",
    "portfólio desenvolvedor frontend",
    "portfólio desenvolvedor criativo",
    "Jacinto Robate",
    "Jacinto Robate portfólio",
    "Jacinto Sergio Robate",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Jacinto Robate — Engenheiro Software",
    description:
      "Engenheiro de software e Web Designer, CEO da Nexus JR, atualmente disponível para trabalho. Focado em interfaces e experiências, trabalhando remotamente a partir de Tete, Moçambique.",
    url: "https://www.jacintorobate.co.mz/",
    siteName: "www.jacintorobate.co.mz",
    images: [
      {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: "Jacinto Robate — Engenheiro Software",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacinto Robate — Engenheiro Software",
    description:
      "Engenheiro de software e Web Designer, CEO da Nexus JR, atualmente disponível para trabalho. Focado em interfaces e experiências, trabalhando remotamente a partir de Tete, Moçambique.",
    creator: "Jacinto Robate",
    creatorId: "1243720976552144897",
    images: ["/images/meta.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "tecnologia",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
