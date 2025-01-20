import Image from "next/image";

import OverlayAnimation from "@/components/ui/overlay-animation";
import { Button } from "@/components/ui/Button";
import DraggableCarousel from "@/components/ui/draggable-carousel";
import { Card, CardContent } from "@/components/ui/Card";
import GradientBorderCard from "@/components/ui/gradient-border-card";
import { carouselData, marketingPanels, serviceCards, certifications } from "./page.constants";

import HeroImg from "@assets/heroImg-min.png";
import AffordableImg from "@assets/affordable.png";
import LockImg from "@assets/Group 28 - Scaled Raster Image.png";
import CTAImg from "@assets/Group 30.png";
import Hero from "@/components/ui/hero";


export default function Home() {
  return (
    <main className="min-h-screen font-raleway">
      {/* Hero Section */}
      <Hero
        image={HeroImg}
        heroTextBeforeSplit="Safeguard Your"
        heroTextAfterSplit="Digital Frontier"
      />

      {/* Folder Carousel Section */}
      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-5">
        <div className="flex justify-center items-center">
          <h6 className="text-center p-5 rounded-xl text-secondary font-medium text-sm bg-[#f5feff]">Empowering SMEs with Affordable Tailored Cybersecurity</h6>
        </div>
        <DraggableCarousel folders={carouselData} />
      </section>
      
      {/* Marketing Section */}
      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <div className="flex justify-center items-center">
          <h6 className="p-5 text-secondary rounded-xl font-medium text-sm bg-[#f5feff]">Safeguarding SMEs Your Trusted Cybersecurity Partner</h6>
        </div>

        <div className="container mx-auto rounded-3xl bg-[#ecfeff] bg-opacity-50 p-10 border shadow-inner space-y-10">
          <div>
            <h2 className="font-bold text-[#28425a] text-3xl">At Advantisec,</h2>
            <p className="text-secondary font-medium text-xl">
              we exist to provide cost-friendly and tailored cybersecurity solutions for SMEs in the UK. With our bi-decade-long experience in safeguarding digital systems, we&apos;re on a mission to secure your databases and networks, ultimately protecting both your business and the global economy.
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-5'>
            {marketingPanels.map((panel, index) => (
              <Card key={index} className="p-0">
                <CardContent className="p-5">
                  {index % 2 === 0 ? (
                    <div className="w-full space-y-2 text-[#28425a]">
                      <Image 
                        alt={panel.imageAlt} 
                        src={panel.imageSrc}
                        className="w-full rounded-2xl"
                      />
                      <h3 className="font-bold text-2xl ">{panel.title}</h3>
                      <p className="text-base">{panel.description}</p>
                    </div>
                  ) : (
                    <div className="w-full space-y-2 text-[#28425a]">
                      <h3 className="font-bold text-2xl">{panel.title}</h3>
                      <p className="text-base">{panel.description}</p>
                      <Image 
                        alt={panel.imageAlt} 
                        src={panel.imageSrc}
                        className="w-full rounded-2xl"
                      />
                        
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="container mx-auto rounded-3xl bg-[#ecfeff] bg-opacity-50 p-10 border shadow-inner">
          <Image src={AffordableImg} alt="Affordable Cybersecurity" className="w-full rounded-2xl" />

          <div className="text-[#28425a] space-y-2 my-5">
            <h2 className="font-bold text-3xl md:text-4xl">Choose Advantisec</h2>
            <p className="text-lg md:text-xl">
              and join forces with the cybersecurity heroes who are passionate about educating and protecting SMEs like yours. Together, we&apos;ll safeguard your digital frontier and pave the way for a secure, thriving future.
            </p>
          </div>

          <Button variant='secondary'>Secure Your Digital Future Today</Button>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-10 md:py-14 lg:py-20 xl:py-28 space-y-10">
        <div className="flex justify-center items-center">
          <h6 className="text-center p-5 rounded-xl text-white font-medium text-sm bg-[#4d4d4d] bg-opacity-20">Unlock Your Cybersecurity Potential Free Consultation</h6>
        </div>

        <GradientBorderCard 
          gradientDirection='down' 
          cardClassName="bg-[#071929] border-transparent py-5 md:py-10 px-6 md:px-16" 
          className="container mx-auto"
        >
          <GradientBorderCard gradientDirection="up" cardClassName="bg-[#0a2137] border-transparent p-5">
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <GradientBorderCard gradientDirection="down" cardClassName="bg-[#071929] border-transparent p-5 space-y-3">
                <Image src={LockImg} alt="Lock Icon" className="w-full rounded-xl" />
                <p className="text-white text-base leading-[150%]">
                  At Advantisec, we believe in empowering SMEs with affordable, tailored cybersecurity solutions. Our free consultation is your first step towards safeguarding your digital frontier. During this session, our experts will:
                </p>
              </GradientBorderCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {serviceCards.map((card, index) => (
                  <GradientBorderCard key={index} gradientDirection="down" cardClassName="bg-[#071929] border-transparent p-4 space-y-8 h-full">
                    <Image src={card.icon} alt="Icon" className="" />
                    <p className="text-white text-xs">{card.text}</p>
                  </GradientBorderCard>
                ))}
              </div>
            </CardContent>
          </GradientBorderCard>

          <div className="flex justify-center items-center mt-10">
            <GradientBorderCard gradientDirection="down" cardClassName="bg-[#071929] border-transparent">
              <Button size='lg' variant='secondary'>Book Your Free Consultation</Button>
            </GradientBorderCard>
          </div>
        </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <div className="flex justify-center items-center">
          <h6 className="p-5 text-secondary rounded-xl font-medium text-sm bg-[#f5feff]">Certifications Earned By Our Team</h6>
        </div>

        <div className="container mx-auto rounded-3xl bg-[#ecfeff] bg-opacity-50 p-10 border shadow-inner space-y-10">
          <p className="text-center text-secondary font-medium text-xl">We have industry certified experts - Some of the certifications our experts have are </p>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 md:gap-24">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-0 bg-[#ecfeff] px-5 py-8">
                <CardContent className="p-5">
                  <div className="w-full flex flex-col space-y-2 text-[#28425a]">
                    <div className="h-80">
                      <Image 
                        alt={cert.title} 
                        src={cert.image}
                        className="w-full h-full rounded-2xl"
                      />
                    </div>
                    <h3 className="text-[#28425a] text-base">{cert.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <div className="flex justify-center items-center">
          <h6 className="p-5 text-secondary rounded-xl font-medium text-sm bg-[#f5feff]">Secure Your Digital Future Today</h6>
        </div>

        <div className="container mx-auto rounded-3xl bg-[#ecfeff] bg-opacity-50 p-10 border shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-5">
            <div className="col-span-2">
              <Image src={CTAImg} alt="CTA Image" className="w-full rounded-2xl" />
            </div>
            
            <div className="col-span-1 p-4">
              <p className="text-xl text-[#28425a]">
                Advantisec is here to safeguard your digital frontier. With our bi-decade-long experience and commitment to affordability, we offer tailored solutions that protect your business without breaking the bank.
                <br /> <br />
                Join forces with us to secure your databases, networks, and ultimately, your business&apos;s future. Let&apos;s collaborate to build a robust security infrastructure that stands the test of time and cyber threat.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10">
            <Button size='lg' variant='secondary'>Get Your Tailored Security Quote</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
