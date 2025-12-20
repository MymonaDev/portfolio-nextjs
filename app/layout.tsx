import ogimage from "@/assets/mahbub.jpg";
import AnimatedDarkBg from "@/components/AnimatedDarkBg";
import ResourceHints from "@/components/ResourceHints";
import MobileTabBar from "@/components/shared/MobileTabBar";
import ThemeSync from "@/components/ThemeSync";
import type { Metadata, Viewport } from "next";
import { Aclonica, Roboto } from "next/font/google";
import "./globals.css";

// const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const aclonica = Aclonica({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kazi Mahbubur Rahman - MERN Stack Developer",
  description:
    "Kazi Mahbubur Rahman is a frontend focused MERN Stack Developer",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Kazi Mahbubur Rahman" }],
  creator: "Kazi Mahbubur Rahman",
  openGraph: {
    title: "Kazi Mahbubur Rahman",
    description:
      "Kazi Mahbubur Rahman is a frontend focused MERN Stack Developer",
    type: "website",
    images: [
      {
        url: ogimage.src, // ✅ Fix: Use .src to get the string URL
        width: 1200,
        height: 630,
        alt: "Kazi Mahbubur Rahman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kazi Mahbubur Rahman - MERN Stack Developer",
    description:
      "Kazi Mahbubur Rahman is a frontend focused MERN Stack Developer",
    images: [ogimage.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${aclonica.className} antialiased`}>
        <ThemeSync />
        <ResourceHints />
        {children}
        <MobileTabBar />
        <AnimatedDarkBg />
      </body>
    </html>
  );
}
