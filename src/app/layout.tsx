
import type { Metadata } from "next";
import { Inter, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { StarfieldBackground } from "@/components/visual/StarfieldBackground";
import { Navbar } from "@/components/layout/Navbar";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  title: "The Inner Compass Tarot | Guidance from the Void",
  description: "Modern Tarot and Reiki healing for the soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${cormorant.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden selection:bg-accent-purple/30 selection:text-white">
        <StarfieldBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
