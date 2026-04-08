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
  title: "Surface — Your Friendly Professor",
  description:
    "Clear your doubts, ask questions, and get problems resolved. Surface is your friendly professor helping you blast through life with great grades.",
  keywords: ["education", "tutoring", "AI professor", "doubt clearing", "learning"],
  openGraph: {
    title: "Surface — Your Friendly Professor",
    description:
      "Clear your doubts, ask questions, and get problems resolved with Surface.",
    type: "website",
    siteName: "Surface",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
