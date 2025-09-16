import type { Metadata } from "next";
import "@/styles/globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import { geistMono, neueMontreal, suisse } from "@/assets/fonts";

import { BASE_URL } from "@/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "BizDoctor – Business Consulting in Finance, Marketing, Supply Chain & HR",
    template: "%s | BizDoctor",
  },
  description:
    "BizDoctor helps organizations grow with strategic consulting across finance, marketing, supply chain, and HR. 30+ years of experience and 2,500+ clients.",
  keywords: [
    "business consulting",
    "finance consulting",
    "marketing consulting",
    "supply chain consulting",
    "HR consulting",
    "corporate training",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "BizDoctor – Guiding Growth Through Finance, Marketing, Supply Chain & HR",
    description:
      "Empowering organizations with strategic consulting, tailored solutions, and sustainable growth strategies across industries.",
    url: BASE_URL,
    siteName: "BizDoctor",
    type: "website",
    images: [
      {
        url: "/images/background/hero-bizdoctor-og.webp",
        width: 1200,
        height: 630,
        alt: "BizDoctor – Your business doctor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizDoctor – Business Consulting Experts",
    description:
      "30+ years of strategic consulting in finance, marketing, supply chain, and HR. Trusted by 2,500+ businesses.",
    images: ["/images/background/hero-bizdoctor-og.webp"],
  },
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geistMono.variable, suisse.className, neueMontreal.variable, "antialiased")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
