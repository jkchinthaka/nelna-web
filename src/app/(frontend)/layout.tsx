import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "../globals.css";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nelna-mango.com";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nelna Mango | Premium Sri Lankan Mango Exports",
    template: "%s | Nelna Mango",
  },
  description:
    "Nelna Mango is a Sri Lankan mango producer and exporter delivering premium, export-grade mango varieties with strict quality assurance, sustainable farming, and reliable logistics for global buyers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nelna Mango | Premium Sri Lankan Mango Exports",
    description:
      "Premium export-grade Sri Lankan mangoes for global buyers, distributors, and partners.",
    url: "/",
    siteName: "Nelna Mango",
    locale: "en_US",
    type: "website",
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
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} min-h-full bg-background text-foreground antialiased`}
      >
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
