import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"), // Replace after buying a custom domain

  title: {
    default: "Pakala Raja Shreenivas Reddy | Full Stack Developer",
    template: "%s | Pakala Raja Shreenivas Reddy",
  },

  description:
    "Portfolio of Pakala Raja Shreenivas Reddy, a Computer Science Engineering student specializing in Full-Stack Web Development using React, Node.js, Express.js, MongoDB, and modern JavaScript technologies.",

  keywords: [
    "Pakala Raja Shreenivas Reddy",
    "Raja Shreenivas Reddy",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "BIHER",
    "Computer Science",
  ],

  authors: [
    {
      name: "Pakala Raja Shreenivas Reddy",
    },
  ],

  creator: "Pakala Raja Shreenivas Reddy",

  openGraph: {
    title: "Pakala Raja Shreenivas Reddy | Full Stack Developer",

    description:
      "Computer Science Engineering student passionate about Full-Stack Development, scalable backend systems, REST APIs, and modern web technologies.",

    url: "https://your-domain.vercel.app",

    siteName: "Pakala Raja Shreenivas Reddy Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Pakala Raja Shreenivas Reddy | Full Stack Developer",

    description:
      "Full Stack Developer specializing in MERN Stack Development and modern web technologies.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
