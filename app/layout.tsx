import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { Navbar } from "@/components/layout/Navbar";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  THEME_COLOR,
} from "@/lib/constants";
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
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Backend Engineer",
    "Full Stack Software Engineer",
    "Golang",
    "Laravel",
    "REST API",
    "SAP OData integration",
    "Android",
    "iOS",
    "Tangerang",
    "Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  colorScheme: "dark",
};

/** Keeps scroll-revealed content visible when JavaScript is unavailable. */
const NO_SCRIPT_STYLES =
  "<style>[data-reveal]{opacity:1!important;transform:none!important}</style>";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh text-fg">
        <noscript dangerouslySetInnerHTML={{ __html: NO_SCRIPT_STYLES }} />
        <a
          href="#main"
          className="label-mono fixed top-3 left-3 z-60 -translate-y-20 rounded-full bg-accent px-4 py-2.5 text-background transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar
            items={navigation}
            brand={profile.shortName.toUpperCase()}
            brandLabel={`${profile.name} — back to top`}
            email={profile.email}
            resumeHref={profile.resume.href}
            resumeFileName={profile.resume.fileName}
          />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
