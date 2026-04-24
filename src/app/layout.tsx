import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MYXX Masters | Premium Mobile Bartending for Orlando Events",
  description: "The most trusted mobile bartending partner for professional event planners in Central Florida. Licensed, insured, and expert service for weddings, corporate events, and festivals.",
  keywords: ["mobile bartending orlando", "wedding bartender central florida", "corporate event bar service", "professional mixologists", "MYXX Masters"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fraunces.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
