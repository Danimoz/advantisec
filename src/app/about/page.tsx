import Image from 'next/image';
import Hero from "@/components/ui/hero";
import GradientBorderCard from '@/components/ui/gradient-border-card';
import { CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Accordion from '@/components/ui/accordion';
import { approach, values, faqs } from './page.constants';

import CTAImg from "@assets/Group 30.png";
import ContactImg from "@assets/Group 30(1).png";
import MissionImg from "@assets/Group 29.png";
import ValuesImg from "@assets/Frame 269.png";
import HeroImg from '@assets/aboutHero.png';

export default function AboutUs() {
  return (
    <main className="min-h-screen font-raleway">
      <Hero
        image={HeroImg}
        heroTextBeforeSplit="About Us;"
        heroTextAfterSplit="Your Guardians"
      />

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <div className="flex justify-center items-center">
          <h6 className="p-5 text-secondary rounded-xl font-medium text-sm bg-[#f5feff]">Advantisec Safeguarding SMEs in the Digital Age</h6>
        </div>

        <GradientBorderCard className='container mx-auto' cardClassName='bg-[#f5feff] p-10' gradientDirection='down'>
          <CardContent className='bg-[#ecfeff] p-5 md:p-10 rounded-2xl'>
            <div className="grid grid-cols-1 md:grid-cols-5 items-stretch gap-5">
              <div className="col-span-3">
                <Image src={CTAImg} alt="CTA Image" className="w-full rounded-2xl" />
              </div>
              
              <div className="col-span-2 px-4 py-1.5 h-full">
                <div className='space-y-5 text-[#28425a]'>
                  <h4 className='font-bold text-5xl'>Our History</h4>
                  <p className="text-xl">
                    Founded with a vision to revolutionize cybersecurity for Small and Medium-scale Enterprises (SMEs), Advantisec emerged from a recognition of the critical need for affordable, tailored security solutions in the UK. Our journey began with a bi-decade-long experience in safeguarding digital systems, which we&apos;ve channeled into creating a unique approach to cybersecurity that prioritizes accessibility without compromising on quality. 
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 space-y-6">
        <GradientBorderCard 
          gradientDirection="down"  
          cardClassName="bg-[#071929] border-transparent p-3" 
          className='container mx-auto'
        >
          <CardContent className='p-5'>
            <GradientBorderCard gradientDirection="down" from='from-[#0a2137]' to='to-[#0a2137]' cardClassName="bg-[#0a2137] border-transparent p-3">
              <CardContent className='p-5 grid grid-cols-1 md:grid-cols-5 items-stretch gap-5'>
                <div className="col-span-2 px-4 py-1.5">
                  <div className='space-y-5'>
                    <h4 className='font-bold text-5xl'>Our Mission</h4>
                    <p className="text-xl md:pr-10">
                      At Advantisec, our mission is clear: to secure SMEs by ensuring their entire database and networks are protected, thereby safeguarding not just individual businesses but the community and global economy at large. We are committed to providing cost-friendly and affordable cybersecurity solutions tailored to the specific size and industry of each SME we serve.                    
                    </p>
                  </div>
                </div>

                <div className="col-span-3">
                  <Image src={MissionImg} alt="CTA Image" className="w-full rounded-2xl" />
                </div>
              </CardContent>
            </GradientBorderCard>
          </CardContent>
        </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <GradientBorderCard className='container mx-auto' cardClassName='bg-[#f5feff] p-10' gradientDirection='down'>
            <CardContent className='bg-[#ecfeff] p-5 md:p-10 rounded-2xl'>
              <div className="grid grid-cols-1 md:grid-cols-5 items-stretch gap-5">
                <div className="col-span-3">
                  <Image src={CTAImg} alt="CTA Image" className="w-full rounded-2xl" />
                </div>
                
                <div className="col-span-2 px-4 py-1.5">
                  <div className='space-y-5 text-[#28425a]'>
                    <h4 className='font-bold text-5xl'>Our Vision</h4>
                    <p className="text-xl">
                      By 2028, we aim to be recognized as the #1 cybersecurity brand in Europe, tirelessly recommended for affordably securing SMEs through collaborative partnerships. We envision a future where every SME, regardless of size or budget, has access to top-tier cybersecurity, enabling them to thrive in the digital landscape without fear of security breaches.                    
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 space-y-6">
        <GradientBorderCard 
          gradientDirection="down"  
          cardClassName="bg-[#071929] border-transparent p-3" 
          className='container mx-auto'
        >
          <CardContent className='p-5 md:px-10'>
            <GradientBorderCard gradientDirection="down" from='from-[#0a2137]' to='to-[#0a2137]' cardClassName="bg-[#0a2137] border-transparent p-5">
              <CardContent className='p-5 grid grid-cols-1 md:grid-cols-2 items-stretch gap-5'>
                <div className="md:px-4 md:py-1.5">
                  <div className='space-y-5'>
                    <h4 className='font-bold text-5xl'>Our Values</h4>
                    <ul className="text-xl space-y-10">
                      {values.map((value, index) => (
                        <li key={index} className="">
                          <p>
                            <span className="font-bold">{value.title}: </span>
                            {value.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="">
                  <Image src={ValuesImg} alt="CTA Image" className="w-full rounded-2xl" />
                </div>
              </CardContent>
            </GradientBorderCard>
          </CardContent>
        </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <GradientBorderCard className='container mx-auto' cardClassName='bg-[#f5feff] p-10' gradientDirection='down'>
            <CardContent className='space-y-10'>
              <h2 className='text-[#28425a] text-5xl font-bold text-center'>Our Approach</h2>
              <p className='text-xl text-center text-secondary'>
                At Advantisec, we believe that effective cybersecurity goes beyond technology. Our unique approach is built on three core principles:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {approach.map((approach, index) => (
                  <GradientBorderCard key={index} gradientDirection="down" cardClassName="bg-[#ecfeff] border-transparent p-4 space-y-3 h-full">
                    <Image src={approach.img} alt={approach.title} className="rounded-2xl" />
                    <h5 className="text-[#28425a] text-2xl font-bold">{approach.title}</h5>
                    <p className="text-[#28425a] text-base">{approach.description}</p>
                  </GradientBorderCard>
                ))}
              </div>

              <p className='text-center text-xl font-medium text-secondary'>
                By choosing Advantisec, you&apos;re not just getting a service provider; you&apos;re partnering with cybersecurity heroes passionate about educating and protecting SMEs. Together, we&apos;ll safeguard your digital frontier and pave the way for a secure, thriving future.
              </p>
            </CardContent>
          </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <div className="flex justify-center items-center">
          <h6 className="p-5 text-secondary rounded-xl font-medium text-sm bg-[#f5feff]">Get in Touch With Advantisec</h6>
        </div>

        <GradientBorderCard className='container mx-auto' cardClassName='bg-[#f5feff] p-10' gradientDirection='down'>
          <CardContent className='bg-[#ecfeff] p-5 rounded-2xl space-y-5'>
            <Image src={ContactImg} alt="CTA Image" className="w-full rounded-2xl" />
            <p className="text-[#28425a] text-xl text-center">
              Have questions about our cybersecurity solutions? Ready to secure your digital frontier? Our team of experts is here to help. Whether you&apos;re looking for a tailored security quote or need more information about our services, we&apos;re just a message away. Let&apos;s collaborate to protect your business from cyber threats.
            </p>
          </CardContent>
          <div className="flex justify-center items-center">
            <GradientBorderCard gradientDirection='down' cardClassName="border-transparent" className='inline-flex justify-center items-center mt-10'>
              <Button size='lg' variant='secondary'>Reach out now</Button>
            </GradientBorderCard>
          </div>
        </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 space-y-10">
        <div className="flex justify-center items-center">
          <h6 className="text-center p-5 rounded-xl text-white font-medium text-sm bg-[#4d4d4d] bg-opacity-20">Frequently Asked Questions</h6>
        </div>

        <GradientBorderCard 
          gradientDirection="down"  
          cardClassName="bg-[#071929] border-transparent p-3" 
          className='container mx-auto'
        >
          <CardContent className='p-5 md:px-10'>
            <GradientBorderCard gradientDirection="down" from='from-[#0a2137]' to='to-[#0a2137]' cardClassName="bg-[#0a2137] border-transparent p-5">
              <CardContent className='p-5 gap-5'>
                <Accordion values={faqs} />
              </CardContent>
            </GradientBorderCard>
          </CardContent>
        </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <div className="flex justify-center items-center">
          <h6 className="p-5 text-secondary rounded-xl font-medium text-sm bg-[#f5feff]">Get in Touch With Advantisec</h6>
        </div>

        <GradientBorderCard className='container mx-auto' cardClassName='bg-[#f5feff] p-10' gradientDirection='down'>
          <CardContent className='bg-[#ecfeff] p-5 rounded-2xl space-y-5'>
            <Image src={ContactImg} alt="CTA Image" className="w-full rounded-2xl" />
            <p className="text-[#28425a] text-xl text-center">
              At Advantisec, we take your privacy and data security seriously. Our comprehensive policies outline how we protect your information and ensure transparency in our operations. We believe in building trust through clear communication and robust security measures.          
            </p>
          </CardContent>
          <div className="flex justify-center items-center">
            <GradientBorderCard gradientDirection='down' cardClassName="border-transparent" className='inline-flex justify-center items-center mt-10'>
              <Button size='lg' variant='secondary'>Read Our Full Policies</Button>
            </GradientBorderCard>
          </div>
        </GradientBorderCard>
      </section>

    </main>
  )
}