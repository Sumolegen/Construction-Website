import type { Metadata } from "next";
import "./globals.css";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}