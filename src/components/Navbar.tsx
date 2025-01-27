'use client';

import Image from "next/image";
import CompanyLogo from "@assets/Company Logo.png";
import { Button } from "./ui/Button";
import { useState } from "react";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
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
        <Link href='/'>
          <Image 
            alt='Advantisec' 
            src={CompanyLogo} 
            priority={true}
            className="w-auto"
          />
        </Link>
        
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
          {
            isMenuOpen
              ? <LuX size={32} />
              : <LuMenu size={32} />
          }
        </div>
      </nav>

      <div
        className={`
          md:hidden fixed inset-0 top-[5rem] bg-gray-950
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          shadow-lg backdrop-blur-md bg-opacity-90
        `}
      >
        <div className="flex flex-col items-center pt-8 pb-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            size='lg' 
            className="mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
}