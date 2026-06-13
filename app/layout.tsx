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
  icons: {
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "5YW",
  },
  title: "Five Year Winter | A Matter of Conviction",
  description: "Five Year Winter is a Nashville post-hardcore band. Debut EP 'A Matter of Conviction' — five tracks, out now on Spotify, Apple Music, and all major platforms.",
  alternates: {
    canonical: "https://www.fiveyearwinter.com",
  },
  verification: {
    google: "yvgiaj43iLCxuo4PBJ-r-jBtWcTWTKHVwgwqacrKrrU",
  },
  openGraph: {
    title: "Five Year Winter | A Matter of Conviction",
    description: "Five Year Winter is a Nashville post-hardcore band. Debut EP 'A Matter of Conviction' — five tracks, out now on Spotify, Apple Music, and all major platforms.",
    url: "https://www.fiveyearwinter.com",
    siteName: "Five Year Winter",
    images: [
      {
        url: "https://www.fiveyearwinter.com/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Five Year Winter — A Matter of Conviction",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Five Year Winter | A Matter of Conviction",
    description: "Five Year Winter is a Nashville post-hardcore band. Debut EP 'A Matter of Conviction' — five tracks, out now on Spotify, Apple Music, and all major platforms.",
    images: ["https://www.fiveyearwinter.com/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Five Year Winter",
  "genre": ["Post-Hardcore", "Metalcore"],
  "foundingLocation": {
    "@type": "Place",
    "name": "Nashville, Tennessee"
  },
  "url": "https://www.fiveyearwinter.com",
  "sameAs": [
    "https://open.spotify.com/artist/7fQmxwIBDALIrUmP0XJ8qt",
    "https://music.apple.com/us/artist/five-year-winter/1781776877",
    "https://www.instagram.com/fiveyearwinterband/",
    "https://www.tiktok.com/@fiveyearwinterband",
    "https://www.youtube.com/@fiveyearwinterband"
  ],
  "album": {
    "@type": "MusicAlbum",
    "name": "A Matter of Conviction",
    "albumReleaseType": "EP",
    "datePublished": "2026-05-09",
    "numTracks": 5,
    "byArtist": {
      "@type": "MusicGroup",
      "name": "Five Year Winter"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${playfair.variable} ${garamond.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
