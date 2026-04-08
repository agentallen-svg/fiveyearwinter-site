import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Five Year Winter | Nashville Post-Hardcore",
  description: "Nashville post-hardcore/metalcore band. Raw riffs, haunting melodies, emotional intensity. New EP coming soon.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Five Year Winter | Nashville Post-Hardcore",
    description: "Nashville post-hardcore/metalcore band. Raw riffs, haunting melodies, emotional intensity. New EP coming soon.",
    url: "https://fiveyearwinter.com",
    siteName: "Five Year Winter",
    images: [
      {
        url: "/og-image.jpg",        // ← your EP artwork
        width: 1200,
        height: 630,
        alt: "Five Year Winter",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}