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
  title: "Sanskari Cinematography",
  description:
    "Freelancing Cinematographer and Content Creator focused on quality content and customer satisfaction.",
  generator: "Next.js",
  applicationName: "Sanskari-Portfolio",
  keywords: [
    "freelance",
    "cinematographer",
    "freelance cinematographer",
    "photography",
    "editing",
    "video editing",
    "pre-wedding",
    "videographer",
    "creative director",
    "creative engineer",
    "storyteller",
    "Editor",
    "film maker",
    "short film maker",
    "creative content creator",
    "cinematographer nagpur",
    "cinematographer pune",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Sanskari Cinematography",
    description:
      "Freelancing Cinematographer and Content Creator focused on quality content and customer satisfaction.",
    url: "https://portfolio-sanskari.vercel.app/",
    siteName: "https://portfolio-sanskari.vercel.app/",
    images: [
      {
        url: "https://github.com/Shivamingale3/portfolio-sanskari/blob/f09314476327e1a195d65d3594ebbc6d7d323869/public/profile.webp",
        width: 1200,
        height: 630,
        alt: "Prajwal Kokate - Sanskari Cinematography",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajwal Kokate - Sanskari Cinematography",
    description:
      "Freelancing Cinematographer and Content Creator focused on quality content and customer satisfaction.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://github.com/Shivamingale3/portfolio-sanskari/blob/9fc42bfdcfaf95488bb083da4455c377235e1a1e/public/user",
    ],
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
  category: "cinematography",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
