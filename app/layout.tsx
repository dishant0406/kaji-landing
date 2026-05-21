import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { absoluteUrl, seo } from "@/lib/content";
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
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: seo.siteName,
  authors: [{ name: "Kaji" }],
  creator: "Kaji",
  publisher: "Kaji",
  category: "Developer Tools",
  classification: "macOS AI coding agent command center",
  manifest: "/manifest.webmanifest",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: seo.defaultTitle,
    description: seo.description,
    url: absoluteUrl("/"),
    siteName: seo.siteName,
    type: "website",
    images: [{ url: absoluteUrl(seo.ogImage), width: 1200, height: 630, alt: seo.defaultTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.description,
    images: [absoluteUrl(seo.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`dark h-full ${geistSans.variable} ${geistMono.variable} antialiased`} lang="en">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
