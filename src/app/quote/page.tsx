import Hero from "@/components/ui/hero";
import Image from "next/image";
import GradientBorderCard from '@/components/ui/gradient-border-card';
import { CardContent } from '@/components/ui/Card';
import QuoteForm from "./form";

import HeroImg from "@assets/heroImg-min.png";
import ContactImg from "@assets/contact-fx.png";

export default function Quote() {
  return (
    <main className="min-h-screen font-raleway">
      {/* Hero Section */}
      <Hero
        image={HeroImg}
        heroTextBeforeSplit="Get Quote"
      />

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 space-y-6">
        <GradientBorderCard 
          gradientDirection="down"  
          cardClassName="bg-[#071929] border-transparent p-3" 
          className='mx-4 md:container md:mx-auto'
        >
          <CardContent className='p-1.5 md:p-5'>
            <GradientBorderCard gradientDirection="down" from='from-[#0a2137]' to='to-[#0a2137]' cardClassName="bg-[#0a2137] text-white border-transparent p-3">
              <CardContent className='p-1.5 md:p-5 space-y-8 md:space-y-16'>
                <div className="space-y-5 md:space-y-10">
                  <Image
                    alt="contact us"
                    src={ContactImg}
                    className='md:w-full rounded-xl w-[320px] h-[200px] md:h-full'
                    objectFit='contain'
                  />

                  <h2 className="font-bold text-3xl md:text-4xl">Get In Touch</h2>
                  <p className="text-base md:text-xl">
                    We take pride in securing SMEs with tailored, cost-friendly cybersecurity solutions. Use the contact form to book a free consultation and take the first step toward protecting your business from digital threats.
                  </p>
                </div>

                <QuoteForm />
              </CardContent>
            </GradientBorderCard>
          </CardContent>
        </GradientBorderCard>
      </section>
    </main>
  )
}