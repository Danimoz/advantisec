'use client';

import Image from "next/image";
import CompanyLogo from "@assets/Company Logo.png";
import { Button } from "./ui/Button";
import { IoMdArrowDown } from "react-icons/io";
import { useState } from "react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="w-full top-0 sticky z-50">
      <nav className="h-16 md:h-20 p-4 md:p-8 flex bg-background justify-between items-center border-b border-primary">
        <Image alt='Advantisec' src={CompanyLogo} priority={true} />
        <Button className="text-secondary gap-x-2 hover:bg-secondary hover:text-primary border border-primary">
          Menu
          <IoMdArrowDown size={20} />
        </Button>
        <div className="hidden md:flex gap-x-4 items-center">
          <Button variant="outline" className="text-primary">
            Learn More
          </Button>
          <Button className="text-secondary">
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
}