import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Daya Constructions & Structural Consultants",
  description:
    "Daya Constructions & Structural Consultants — Construction, structural design, consultancy, restoration, rehabilitation and project management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}