import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google"; // Import Google fonts
import "./globals.css";

// Configure Inter (Sans-serif)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Configure Cormorant Garamond (Serif)
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Inner Compass Tarot | Guiding You Inward",
  description: "Intuitive tarot readings by Preeti Jain. A moonlit journey to clarity and spiritual growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
