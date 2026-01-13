// pages/_app.tsx
import { Toaster } from "@/components/ui/sonner";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* Navigation */}
      <Header />

      <Component {...pageProps} />
      <Toaster />

      {/* Footer */}
      <Footer />
    </div>
  );
}
