import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import CompanyLogo from "@assets/Company Logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import GradientBorderCard from "./ui/gradient-border-card";
import { CardContent } from "./ui/Card";

const footerLinks = [
  { 
    header: 'Home',
    link: '/' 
  },
  { 
    header: 'Services',
    link: '/services' 
  },
  { 
    header: 'About Us',
    link: '/about' 
  },
  { 
    header: 'Policies',
    link: '/policies' 
  },
  
]

const socialLinks = [
  { title: 'Facebook', icon: FaFacebook, href: '#', color: 'white' },
  { title: 'Instagram', icon: FaInstagram, href: '#' },
  { title: 'X', icon: FaXTwitter, href: '#' },
  { title: 'Linkedin', icon: FaLinkedin, href: '#', color: 'white' },
  { title: 'Youtube', icon: FaYoutube, href: '#', color: 'white' },
]

export default function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto py-10 md:py-14 lg:py-20 xl:py-28 px-8 md:px-10">
      <GradientBorderCard gradientDirection="down" cardClassName="bg-[#071929] border-transparent py-5 md:py-10 px-6 md:px-16">
        <CardContent className="space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div className="space-y-1">
              <h6 className="font-semibold text-lg">Subscribe to Newsletter</h6>
              <p className="text-sm">Stay updated with our latest news and offers</p>
            </div>
            <div className="space-y-2">
              <div className="flex gap-4">
                <Input type='email' placeholder='Enter your email' className="bg-white" />
                <GradientBorderCard gradientDirection="down" cardClassName="bg-[#071929] border-transparent">
                  <Button variant='background'>Join</Button>
                </GradientBorderCard>
              </div>
              <p className="text-sm">
                By subscribing, you agree to our Privacy Policy.
                <Link href="#" className="text-[#8ec6e6] ml-2 underline">Privacy Policy</Link>
              </p>
            </div>
          </div>

          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <Image src={CompanyLogo} alt='Company Logo' />
              <Link href='mailto:contact@adantisec.com' className="underline">contact@adantisec.com</Link>
            </div>
            <div className="grid grid-cols-2 gap-y-1 gap-x-10">
              {footerLinks.map((section, index) => (
                <Link key={index} href={section.link} className="">{section.header}</Link>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <hr className="border border-primary" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-4">
                <p className="text-sm">© {currentYear} Advantisec. All rights reserved.</p>
                <div className="flex gap-4">
                  <Link href="/policies" className="text-sm text-[#8ec6e6] underline">Privacy Policy</Link>
                  <Link href="/terms" className="text-sm text-[#8ec6e6] underline">Terms and Conditions</Link>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                {socialLinks.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <link.icon size={24} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </GradientBorderCard>
    </footer>
  )
}