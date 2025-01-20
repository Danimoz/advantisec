import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '900'],
  variable: '--font-raleway'
});

const neuePower = localFont({
  src: './fonts/NeuePower-Ultra.ttf',
  display: 'swap',
  variable: '--font-neue-power'
});

export const metadata: Metadata = {
  title: "Advantisec",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${neuePower.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
