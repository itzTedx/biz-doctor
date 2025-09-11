import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const suisse = localFont({
  variable: "--font-suisse",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  src: [
    { path: "./suisse/suisse-intl-300.ttf", weight: "300", style: "normal" },
    { path: "./suisse/suisse-intl-400.ttf", weight: "400", style: "normal" },
    { path: "./suisse/suisse-intl-600.ttf", weight: "600", style: "normal" },
    { path: "./suisse/suisse-intl-700.ttf", weight: "700", style: "normal" },
  ],
});

export const neueMontreal = localFont({
  variable: "--font-neue-montreal",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  src: [
    { path: "./neue-montreal/ppneuemontreal-thin.otf", weight: "300", style: "normal" },
    { path: "./neue-montreal/ppneuemontreal-book.otf", weight: "400", style: "normal" },
    { path: "./neue-montreal/ppneuemontreal-medium.otf", weight: "600", style: "normal" },
    { path: "./neue-montreal/ppneuemontreal-bold.otf", weight: "800", style: "normal" },
  ],
});
