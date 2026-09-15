import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daya Constructions & Structural Consultants",
  description:
    "Daya Constructions & Structural Consultants — Construction, structural design, consultancy, restoration and rehabilitation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}