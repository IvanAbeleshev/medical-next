import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Медичний центр безпеки судноплавства | Shipping Safety Medical Centre",
  description: "Медичний центр безпеки судноплавства - медичний огляд моряків з 2008 року. Ліцензований Міністерством Охорони Здоров'я України.",
  keywords: "медичний центр, морський медичний огляд, моряки, безпека судноплавства, Одеса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
