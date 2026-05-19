import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dizko — The creative hub for musicians",
  description:
    "Dizko is the creative hub for musicians — AI-powered file management and collaboration built for how artists actually work.",
  keywords: ["music", "collaboration", "DAW", "file management", "musicians"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-foreground`}>
        {children}
      </body>
    </html>
  );
}
