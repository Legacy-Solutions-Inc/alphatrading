import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alpha Trade | Your Iloilo Partner for Fast, Reliable China Imports",
  description:
    "Streamline your supply chain with Alpha Trade's end-to-end logistics solutions. Sea freight, customs brokerage, warehousing, and last-mile delivery from China to Iloilo.",
  keywords: [
    "China imports",
    "Iloilo logistics",
    "sea freight",
    "customs brokerage",
    "warehousing",
    "Philippines shipping",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
