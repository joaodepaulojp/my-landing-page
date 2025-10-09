import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import LandingSection from "@/components/landingSection";

const neueKonstant = localFont({
  src: "/fonts/neuekonstantgrotesk-book.otf",
  variable: "--font-konstant-grotesk",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "DiPaulo",
  description: "My Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${neueKonstant.variable} dark`}>
      <body className={`antialiased`}>
        <LandingSection />
        {children}
      </body>
    </html>
  );
}
