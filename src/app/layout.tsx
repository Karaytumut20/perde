import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Manrope yerine Inter
import "./globals.css";

// "Tight" tracking için en uygun font Inter'dir.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autex Acoustics | Acoustic Panels and Solutions",
  description: "Carbon neutral acoustic solutions for spaces where people live, work, and learn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-autex-offwhite text-autex-black selection:bg-autex-black selection:text-white">
        {children}
      </body>
    </html>
  );
}