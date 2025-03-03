'use client';

import Image from "next/image";
import CompanyLogo from "@assets/Company Logo.png";
import MobileLogo from "@assets/icon.png";
import { Button } from "./ui/Button";
import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <header className="top-5 sticky w-full px-10 z-50">
      <nav className={`
        h-12 md:h-16 p-5 flex justify-between items-center
        bg-white bg-opacity-5 backdrop-blur-md rounded-2xl shadow-lg
      `}>
        <Link href='/'>
          <Image 
            alt='Advantisec' 
            src={isMobile ? MobileLogo : CompanyLogo} 
            priority={true}
            className="w-auto"
          />
        </Link>
        
        <div className="flex gap-8 text-primary">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>{link.name}</Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href='/quote'>
            <Button size='lg'>Get a Quote</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}