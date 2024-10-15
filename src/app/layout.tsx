import type { Metadata } from "next";
import { Anybody } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Maximo Wood",
  description: "At Maximo, we redefine excellence in wood craftsmanship. Designed to merge performance with aesthetics, we meticulously craft each piece from forest to finish.",
};

const font = Anybody({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anybody"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable}>
      <body className={`font-anybody antialiased`}>
        {children}
      </body>
    </html>
  );
}