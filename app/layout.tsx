import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Providers } from "../components/layout/Providers";
import { WhatsAppFloat } from "../components/layout/WhatsAppFloat";
import { site } from "../data/site";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display-web",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body-web",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: `${site.name} | ${site.descriptor}`,
    template: `%s | ${site.name}`,
  },

  description:
    "Property, legal, taxation, banking and India-side advisory coordination for NRIs.",

  alternates: {
    canonical: site.url,
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: `${site.name} | ${site.descriptor}`,
    description: site.tagline,
    type: "website",
    url: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} font-body`}
      >
        <Providers>
          <Navbar />
           <WhatsAppFloat />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}