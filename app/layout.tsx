import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const figtree = Figtree({
  variable: "--font-app-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alphatrade.ph"),
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
  icons: {
    icon: "/images/alpha-icon.jpg",
  },
  verification: {
    google: "f02kKHVDr8ol1ChsEjNh1iXP2QtU1k9oxYlPaio_cAw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PWZ784N3');
            `,
          }}
        />
      </head>
      <body
        className={`${figtree.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWZ784N3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-[#0c3b6a] focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:ring-offset-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
