import Image from 'next/image'
import HeroImg from '@assets/serviceHero.png';
import { Button } from '@/components/ui/Button'
import Hero from '@/components/ui/hero';




export default function Services() {
  return (
    <main className="min-h-screen">
      <Hero
        image={HeroImg}
        heroTextBeforeSplit="Services For Your"
        heroTextAfterSplit="Digital Frontier"
      />
      
      <section className="px-4 md:px-8 py-12 md:py-14 lg:py-20 flex">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold md:w-[700px]">Securing SMEs&apos; Cybersecurity</h1>
          <p className="text-lg">Comprehensive cybersecurity solutions tailored for SMEs to protect their digital assets.</p>
        </div>
        <div className="sm:hidden md:block"/>
      </section>
      

      <section className="py-12 md:py-14 lg:py-20 px-4 md:px-8 space-y-8">
        <div className='flex flex-col justify-center items-center gap-6 md:w-[768px] mx-auto space-y-4'>
          <h3 className='font-bold text-4xl md:text-5xl text-center'>Customized Cybersecurity Solutions for SMEs</h3>
          <p className='text-center'>Contact Advantisec for a tailored cybersecurity solution consultation today.</p>
          <Button size='lg' className="border border-primary">Contact</Button>
        </div>
      </section>
    </main>
  )
}