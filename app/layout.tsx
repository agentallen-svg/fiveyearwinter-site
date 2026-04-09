import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Five Year Winter | A Matter of Conviction",
  description: "Nashville post-hardcore/metalcore. Debut EP out May 9th.",
  openGraph: {
    title: "Five Year Winter | A Matter of Conviction",
    description: "Nashville post-hardcore/metalcore. Debut EP out May 9th.",
    url: "https://fiveyearwinter.com",
    siteName: "Five Year Winter",
    images: [
      {
        url: "https://fiveyearwinter.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Five Year Winter — A Matter of Conviction",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Five Year Winter | A Matter of Conviction",
    description: "Nashville post-hardcore/metalcore. Debut EP out May 9th.",
    images: ["https://fiveyearwinter.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${garamond.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
