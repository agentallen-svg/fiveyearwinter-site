// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Five Year Winter | A Matter of Conviction",
  description: "Post-hardcore/metalcore band from Nashville, Tennessee. Upcoming EP release imminent.",
  openGraph: {
    title: "Five Year Winter | A Matter of Conviction",
    description: "Post-hardcore/metalcore band from Nashville, Tennessee. Upcoming EP release imminent.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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