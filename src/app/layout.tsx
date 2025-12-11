import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autex Acoustics | Acoustic Panels and Solutions",
  description: "Beautiful acoustics for spaces where people live, work, and learn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased bg-autex-offwhite text-autex-black">
        {children}
      </body>
    </html>
  );
}
