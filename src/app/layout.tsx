import type { Metadata, Viewport } from "next";
import { Arimo, Bricolage_Grotesque, Inter, Manrope } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-face",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Designbyxy — Websites Designed to Grow Your Business",
  description:
    "Stop losing sales to a slow or confusing website. We design fast, search-optimized digital platforms that turn visitors into paying clients.",
  openGraph: {
    title: "Designbyxy — Websites Designed to Grow Your Business",
    description:
      "Fast, search-optimized websites, landing pages and showcase videos that turn visitors into paying clients.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${manrope.variable} ${arimo.variable} ${inter.variable}`}
    >
      <body className="bg-black font-body text-white antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
