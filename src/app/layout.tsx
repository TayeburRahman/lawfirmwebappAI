import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmartLoader from "@/components/SmartLoader";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LawFirm AI – Smart Legal Management",
  description: "AI-powered law firm management platform built with Next.js and Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} antialiased h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmartLoader />
        {children}
      </body>
    </html>
  );
}
