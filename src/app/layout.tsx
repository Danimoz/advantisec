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
  title: "Advantisec - Affordable Cybersecurity for SMEs",
  description: "Advantisec provides cost-friendly, tailored cybersecurity solutions for SMEs in the UK. With two decades of experience, we safeguard your digital systems, protecting your business and the global economy.",
  keywords: [
    "cybersecurity", 
    "SME security", 
    "digital protection", 
    "network security", 
    "affordable cybersecurity", 
    "UK business security"
  ],
  openGraph: {
    title: "Advantisec - Secure Your Digital Frontier",
    description: "Empowering SMEs with affordable, tailored cybersecurity solutions",
    type: "website",
    url: "https://www.advantisec.com",
    images: [
      {
        url: "../../public/openGraph.png",
        width: 1200,
        height: 630,
        alt: "Og Image Alt"
      }
    ]
  },
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
