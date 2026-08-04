import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

/**
 * Two-role type system per the approved design:
 *  - Plus Jakarta Sans (display): the bold geometric weight used for
 *    "RISHI SHARMA", section headings, and stat labels.
 *  - Inter (body): high legibility at small sizes for paragraph copy,
 *    bullet lists, and card text.
 *
 * next/font self-hosts both, so there is no external request to
 * fonts.googleapis.com, no render-blocking font CSS, and no CLS from a
 * late font swap.
 */
const fontDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const fontSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://rishisharma.dev"; // TODO: replace with production domain before deploy

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rishi Sharma | Associate Mathematics Instructor",
    template: "%s | Rishi Sharma",
  },
  description:
    "Rishi Sharma is an Associate Mathematics Instructor, curriculum developer, and mathematics subject matter expert based in Pune, India, specializing in curriculum design, instructional excellence, and assessment.",
  keywords: [
    "Rishi Sharma",
    "Mathematics Instructor",
    "Curriculum Development",
    "Instructional Design",
    "Mathematics Subject Matter Expert",
    "Assessment Design",
  ],
  authors: [{ name: "Rishi Sharma", url: siteUrl }],
  creator: "Rishi Sharma",
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteUrl,
    title: "Rishi Sharma | Associate Mathematics Instructor",
    description:
      "Curriculum design, instructional excellence, assessment, and educational technology.",
    siteName: "Rishi Sharma",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Rishi Sharma — Associate Mathematics Instructor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi Sharma | Associate Mathematics Instructor",
    description:
      "Curriculum design, instructional excellence, assessment, and educational technology.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1B34",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
