import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JVANET PTY LTD — AI-Powered Product Studio & IT Consulting",
  description:
    "JVANET (Joint Venture Autonomous Neural Engine Technology) — Australian technology company building AI-powered software products and providing enterprise IT consulting services.",
  metadataBase: new URL("https://jvanet.com"),
  keywords: ["AI products", "IT consulting", "Australian technology", "software development", "enterprise IT"],
  openGraph: {
    title: "JVANET PTY LTD — AI-Powered Product Studio & IT Consulting",
    description:
      "JVANET (Joint Venture Autonomous Neural Engine Technology) — Australian technology company building AI-powered software products and providing enterprise IT consulting services.",
    url: "https://jvanet.com",
    siteName: "JVANET PTY LTD",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "JVANET PTY LTD — AI-Powered Product Studio & IT Consulting",
    description:
      "Australian technology company building AI-powered software products and providing enterprise IT consulting services.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
