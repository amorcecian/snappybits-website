import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const basePath = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_BASE_PATH || '' : (window.__NEXT_DATA__?.props?.basePath || '');

export const metadata: Metadata = {
  title: {
    default: "SnappyBits - Professional IT Consulting & Development",
    template: "%s | SnappyBits"
  },
  description: "Empowering businesses with cutting-edge IT solutions, software development, and world-class LATAM development teams.",
  keywords: ["IT consulting", "software development", "LATAM developers", "web development", "mobile apps", "cloud solutions"],
  authors: [{ name: "SnappyBits" }],
  creator: "SnappyBits",
  publisher: "SnappyBits",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://snappybits.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snappybits.com",
    title: "SnappyBits - Professional IT Consulting & Development",
    description: "Empowering businesses with cutting-edge IT solutions, software development, and world-class LATAM development teams.",
    siteName: "SnappyBits",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SnappyBits - Professional IT Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnappyBits - Professional IT Consulting & Development",
    description: "Empowering businesses with cutting-edge IT solutions, software development, and world-class LATAM development teams.",
    images: ["/og-image.jpg"],
    creator: "@snappybits",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
