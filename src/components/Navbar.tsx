'use client';

import Image from "next/image";
import CompanyLogo from "@assets/Company Logo.png";
import { Button } from "./ui/Button";
import { IoMdArrowDown } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '#about' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="top-5 sticky w-full px-10 z-50">
      <nav className={`
        h-12 md:h-16 p-5 flex justify-between items-center
        bg-white bg-opacity-5 backdrop-blur-md rounded-2xl shadow-lg
      `}>
        <Image 
          alt='Advantisec' 
          src={CompanyLogo} 
          priority={true}
          className="w-auto"
        />
        
        <div className="hidden md:flex gap-8 text-primary">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>{link.name}</Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size='lg'>Get Quote</Button>
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >

        </div>
      </nav>
    </header>
  );
}