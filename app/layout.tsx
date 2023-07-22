import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/antonio.ttf",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Rhino Gym",
  description: "Get ready",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-slate-950",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
