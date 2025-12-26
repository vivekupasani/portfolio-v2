import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vivek Upasani",
    template: "%s | Vivek Upasani",
  },
  description: "Portfolio of Vivek Upasani, a Full Stack Developer and Freelancer building Cluezy.",
  keywords: ["Vivek Upasani", "Software Developer", "Freelancer", "Full Stack Developer", "Next.js", "React", "TypeScript", "Cluezy", "cluezy"],
  authors: [{ name: "Vivek Upasani", url: "https://founder.cluezy.site" }],
  creator: "Vivek Upasani",
  metadataBase: new URL("https://founder.cluezy.site"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://founder.cluezy.site",
    title: "Vivek Upasani",
    description: "Portfolio of Vivek Upasani, a Full Stack Developer and Freelancer building Cluezy.",
    siteName: "Vivek Upasani",
    images: [
      {
        url: "/opengraph-image1.png",
        width: 1200,
        height: 630,
        alt: "Vivek Upasani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Upasani",
    description: "Portfolio of Vivek Upasani, a Full Stack Developer and Freelancer building Cluezy.",
    images: ["/opengraph-image1.png"],
    creator: "@v1vekupasani",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
