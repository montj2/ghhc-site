import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "God's Hygiene Help Center",
  description: "Sharing the love of Jesus and providing hygiene products to those in need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="border-t py-8 bg-muted/50">
          <div className="container text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} God&apos;s Hygiene Help Center. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
