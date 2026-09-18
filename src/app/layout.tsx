import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";

import "./globals.css";

import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daya Constructions & Structural Consultants",
  description:
    "Construction and structural consultancy built on engineering precision, practical experience and trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${inter.variable}`}
      >
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}