import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import Hero from '@/components/ui/hero';
import GradientBorderCard from '@/components/ui/gradient-border-card';
import { CardContent } from '@/components/ui/Card';
import { services, gdpr, penetration, vulnerabilities, soc, serviceCards } from './page.constants';
import ServiceCard from './serviceCard';

import HeroImg from '@assets/serviceHero.png';
import AssuranceImg from '@assets/assurance.png';
import GDPRImg from '@assets/gdpr.png';
import PenetrationImg from '@assets/Penetration.png';
import VulnerabilityImg from '@assets/Vulnerability.png';
import SOCImg from '@assets/soc.png';
import CTAImg from "@assets/Group 30.png";


export default function Services() {
  return (
    <main className="min-h-screen font-raleway">
      <Hero
        image={HeroImg}
        heroTextBeforeSplit="Services For Your"
        heroTextAfterSplit="Digital Frontier"
      />

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <div className="flex justify-center items-center">
          <h6 className="p-5 text-secondary rounded-xl font-medium text-sm bg-[#f5feff]">Tailored Services we Offer</h6>
        </div>

        <div className='flex flex-wrap flex-col md:flex-row justify-center items-center mx-auto container'>
          {serviceCards.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              titleColor={service.titleColor}
              descriptionColor={service.descriptionColor}
              position={service.position}
              bg={service.bg}
              className={index > 2 ? 'sm:mt-0 md:-mt-20' : ''}
            />
          ))}
        </div>
      </section>
      
      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <GradientBorderCard 
          gradientDirection="down"
          cardClassName="bg-[#f5feff] border-transparent p-1.5 md:p-5" 
          className='mx-4 md:container md:mx-auto'
        >
          <CardContent className='p-5 text-[#28425a]'>
            <GradientBorderCard gradientDirection="down" from='from-[#ecfeff]' to='to-[#ecfeff]' cardClassName="bg-[#ecfeff] border-transparent p-3">
              <CardContent className='p-1.5 md:p-5'>
                <Image 
                  src={AssuranceImg} 
                  alt='Assurance' 
                  className='md:w-full rounded-xl w-[320px] h-[200px] md:h-full'
                  objectFit='contain'
                />
                <h3 className='font-bold text-3xl md:text-5xl mt-5'>Assurance Activities</h3>

                <ul className='flex flex-col gap-10 px-4 md:px-10 mt-5'>
                  {services.map((service, index) => (
                    <li key={index} className='list-disc'>
                      <p className='text-base md:text-xl'>
                        <span className='font-bold'>{service.heading} : </span>
                        <span className=''>{service.body}</span>
                      </p>
                    </li>
                  ))}
                </ul>

                <GradientBorderCard gradientDirection='down' cardClassName="bg-[#071929] border-transparent" className='inline-flex mt-10'>
                  <Button variant='secondary' className=''>Get Your Tailored Security Quote</Button>
                </GradientBorderCard>
              </CardContent>
            </GradientBorderCard>
          </CardContent>
        </GradientBorderCard>
      </section>
      
      <section className='py-10 md:py-14 lg:py-20 xl:py-28 space-y-6'>
        <GradientBorderCard 
          gradientDirection="down"  
          cardClassName="bg-[#071929] border-transparent p-3" 
          className='mx-4 md:container md:mx-auto'
        >
          <CardContent className='p-1.5 md:p-5'>
            <GradientBorderCard gradientDirection="down" from='from-[#0a2137]' to='to-[#0a2137]' cardClassName="bg-[#0a2137] border-transparent p-3">
              <CardContent className='p-1.5 md:p-5'>
                <Image 
                  src={GDPRImg} 
                  alt='GDPR Compliance' 
                  className='w-[320px] md:w-full h-[200px] md:h-full rounded-xl'
                  objectFit='contain'
                />
                <h3 className='font-bold text-3xl md:text-5xl mt-5'>GDPR Compliance</h3>

                <ul className='flex flex-col gap-10 px-5 md:px-10 mt-5'>
                  {gdpr.map((service, index) => (
                    <li key={index} className='list-disc'>
                      <p className='text-base md:text-xl'>
                        <span className='font-bold'>{service.heading} : </span>
                        <span className=''>{service.body}</span>
                      </p>
                    </li>
                  ))}
                </ul>

                <GradientBorderCard gradientDirection='down' cardClassName="bg-[#071929] border-transparent" className='inline-flex mt-10'>
                  <Button>Get Your Tailored Security Quote</Button>
                </GradientBorderCard>
              </CardContent>
            </GradientBorderCard>
          </CardContent>
        </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <GradientBorderCard 
          gradientDirection="down"
          cardClassName="bg-[#f5feff] border-transparent" 
          className='mx-4 md:container md:mx-auto'
        >
          <CardContent className='p-3 md:p-10 text-[#28425a]'>
            <GradientBorderCard gradientDirection="down" from='from-[#ecfeff]' to='to-[#ecfeff]' cardClassName="bg-[#ecfeff] border-transparent p-3">
              <CardContent className='p-1.5 md:p-5'>
                <Image 
                  src={PenetrationImg} 
                  alt='Penetration Testing' 
                  className='w-[320px] md:w-full h-[200px] md:h-full rounded-xl'
                  objectFit='contain'
                />
                <h3 className='font-bold text-3xl md:text-5xl mt-5'>Penetration Testing</h3>

                <ul className='flex flex-col gap-10 md:px-5 px-10 mt-5'>
                  {penetration.map((service, index) => (
                    <li key={index} className='list-disc'>
                      <p className='text-base md:text-xl'>
                        <span className='font-bold'>{service.heading} : </span>
                        <span className=''>{service.body}</span>
                      </p>
                    </li>
                  ))}
                </ul>

                <GradientBorderCard gradientDirection='down' cardClassName="bg-[#071929] border-transparent" className='inline-flex mt-10'>
                  <Button variant='secondary'>Get Your Tailored Security Quote</Button>
                </GradientBorderCard>
              </CardContent>
            </GradientBorderCard>
          </CardContent>
        </GradientBorderCard>
      </section>

      <section className='py-10 md:py-14 lg:py-20 xl:py-28 space-y-6'>
        <GradientBorderCard 
          gradientDirection="down"  
          cardClassName="bg-[#071929] border-transparent p-3" 
          className='mx-4 md:container md:mx-auto'
        >
          <CardContent className='p-5'>
            <GradientBorderCard gradientDirection="down" from='from-[#0a2137]' to='to-[#0a2137]' cardClassName="bg-[#0a2137] border-transparent p-3">
              <CardContent className='p-1.5 md:p-5'>
                <Image 
                  src={VulnerabilityImg} 
                  alt='Vulnerability Management' 
                  className='w-[320px] md:w-full h-[200px] md:h-full rounded-xl'
                  objectFit='contain'  
                />
                <h3 className='font-bold text-3xl md:text-5xl mt-5'>Vulnerability Management</h3>

                <ul className='flex flex-col gap-10 px-5 md:px-10 mt-5'>
                  {vulnerabilities.map((service, index) => (
                    <li key={index} className='list-disc'>
                      <p className='text-base md:text-xl'>
                        <span className='font-bold'>{service.heading} : </span>
                        <span className=''>{service.body}</span>
                      </p>
                    </li>
                  ))}
                </ul>

                <GradientBorderCard gradientDirection='down' cardClassName="bg-[#071929] border-transparent" className='inline-flex mt-10'>
                  <Button>Get Your Tailored Security Quote</Button>
                </GradientBorderCard>
              </CardContent>
            </GradientBorderCard>
          </CardContent>
        </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <GradientBorderCard 
          gradientDirection="down"
          cardClassName="bg-[#f5feff] border-transparent p-3 md:p-5" 
          className='mx-4 md:container md:mx-auto'
        >
          <CardContent className='p-1.5 md:p-5 text-[#28425a]'>
            <GradientBorderCard gradientDirection="down" from='from-[#ecfeff]' to='to-[#ecfeff]' cardClassName="bg-[#ecfeff] border-transparent p-3">
              <CardContent className='p-1.5 md:p-5'>
                <Image 
                  src={SOCImg} 
                  alt='SOC' 
                  className='w-[320px] md:w-full h-[200px] md:h-full rounded-xl'
                  objectFit='contain'
                />
                <h3 className='font-bold text-3xl md:text-5xl mt-5'>Security Operations Center (SOC) as a Managed Security Service Provider (MSSP)</h3>

                <ul className='flex flex-col gap-10 px-5 md:px-10 mt-5'>
                  {soc.map((service, index) => (
                    <li key={index} className='list-disc'>
                      <p className='text-base md:text-xl'>
                        <span className='font-bold'>{service.heading} : </span>
                        <span className=''>{service.body}</span>
                      </p>
                    </li>
                  ))}
                </ul>

                <GradientBorderCard gradientDirection='down' cardClassName="bg-[#071929] border-transparent" className='inline-flex mt-10'>
                  <Button variant='secondary'>Get Your Tailored Security Quote</Button>
                </GradientBorderCard>
              </CardContent>
            </GradientBorderCard>
          </CardContent>
        </GradientBorderCard>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white space-y-6">
        <div className="flex justify-center items-center">
          <h6 className="p-5 text-secondary rounded-xl font-medium text-sm bg-[#f5feff]">Secure Your Digital Future Today</h6>
        </div>

        <GradientBorderCard className='mx-4 md:container md:mx-auto' cardClassName='bg-[#f5feff] p-4 md:p-10' gradientDirection='down'>
          <CardContent className='bg-[#ecfeff] p-5 md:p-10 rounded-2xl'>
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-5">
              <div className="col-span-2">
                <Image src={CTAImg} alt="CTA Image" className="w-full rounded-2xl" />
              </div>
              
              <div className="col-span-1 p-1.5 md:p-4">
                <p className="text-base md:text-xl text-[#28425a]">
                  Advantisec is here to safeguard your digital frontier. With our bi-decade-long experience and commitment to affordability, we offer tailored solutions that protect your business without breaking the bank.
                  <br /> <br />
                  Join forces with us to secure your databases, networks, and ultimately, your business&apos;s future. Let&apos;s collaborate to build a robust security infrastructure that stands the test of time and cyber threat.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-10">
              <Button variant='secondary'>Get Your Tailored Security Quote</Button>
            </div>
          </CardContent>
        </GradientBorderCard>
      </section>
    </main>
  )
}