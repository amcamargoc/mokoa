import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Root Layout
 *
 * Architecture decisions:
 * - Fonts loaded via CSS @import in globals.css (Playfair Display, Lora, Inter)
 *   rather than next/font/google because we use 3 distinct font families
 *   and the CSS approach is cleaner with Tailwind v4 @theme tokens.
 * - Navbar and Footer are rendered at the layout level so they persist
 *   across all routes (landing + /producer).
 * - lang="en" as default — i18n-ready structure for future EN/DE/ES toggle.
 */

export const metadata: Metadata = {
  title: "MOKAO | Colombian Heritage Chocolate",
  description:
    "Premium 70% Fino de Aroma dark chocolate, directly sourced from farming families in Maceo, Antioquia, Colombia. From Seed to Soul.",
  openGraph: {
    title: "MOKAO | Colombian Heritage Chocolate",
    description:
      "Premium 70% Fino de Aroma dark chocolate from Maceo, Antioquia.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
