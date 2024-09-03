import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import CompanyLogo from "@assets/Company Logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  { 
    header: 'Learn', 
    links: [
      { title: 'Resources', href: '#' },
      { title: 'Newsletter', href: '#' },
      { title: 'Articles', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Workshops', href: '#' },
    ] 
  },
  { 
    header: 'About Us', 
    links: [
      { title: 'About Us', href: '#' },
      { title: 'Contact Us', href: '#' },
      { title: 'FAQs', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
    ] 
  },
  { 
    header: 'Our Work', 
    links: [
      { title: 'Services', href: '#' },
      { title: 'Partners', href: '#' },
      { title: 'Testimonials', href: '#' },
      { title: 'Case Studies', href: '#' },
      { title: 'Events', href: '#' },
    ] 
  },
  { 
    header: 'Policies', 
    links: [
      { title: 'Privacy Policy', href: '#' },
      { title: 'Terms of Service', href: '#' },
      { title: 'Cookies Policy', href: '#' },
      { title: 'Accessibility', href: '#' },
    ] 
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
    <footer className="container mx-auto py-10 md:py-14 lg:py-20 xl:py-28 px-8 md:px-10 lg:px-12 xl:px-16 space-y-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="space-y-1">
          <h6 className="font-semibold text-lg">Subscribe to Newsletter</h6>
          <p className="text-sm">Stay updated with our latest news and offers</p>
        </div>
        <div className="space-y-2">
          <div className="flex gap-4">
            <Input type='email' placeholder='Enter your email' className="bg-white" />
            <Button variant='background' className="border border-primary">Join</Button>
          </div>
          <p className="text-sm">
            By subscribing, you agree to our Privacy Policy.
            <Link href="#" prefetch={false} className="text-[#8ec6e6] ml-2">Privacy Policy</Link>
          </p>
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row">
        <div>
          <Image src={CompanyLogo} alt='Company Logo' />
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h6 className="font-semibold text-lg">{section.header}</h6>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-[#8ec6e6]">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-8">
        <hr className="border border-primary" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <p className="text-sm">© {currentYear} Company. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-[#8ec6e6]">Privacy Policy</Link>
              <Link href="#" className="text-sm text-[#8ec6e6]">Terms and Conditions</Link>
              <Link href="#" className="text-sm text-[#8ec6e6]">Cookie Policy</Link>
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
    </footer>
  )
}