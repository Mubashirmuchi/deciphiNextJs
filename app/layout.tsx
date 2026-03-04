import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deciphi.com"),
  title: {
    default: "Deciphi - Cybersecurity Consulting and Training | Qatar",
    template: "%s | Deciphi"
  },
  description: "Cybersecurity Consulting and Training | Qatar",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}