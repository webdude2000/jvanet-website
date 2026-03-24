import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "JVANET PTY LTD — AI-Powered Product Studio & IT Consulting",
  description:
    "JVANET (Joint Venture Autonomous Neural Engine Technology) — Australian technology company building AI-powered software products and providing enterprise IT consulting services.",
  metadataBase: new URL("https://jvanet.com"),
  openGraph: {
    title: "JVANET PTY LTD — AI-Powered Product Studio & IT Consulting",
    description:
      "JVANET (Joint Venture Autonomous Neural Engine Technology) — Australian technology company building AI-powered software products and providing enterprise IT consulting services.",
    url: "https://jvanet.com",
    siteName: "JVANET PTY LTD",
    type: "website",
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
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
