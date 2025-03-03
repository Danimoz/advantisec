import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import OverlayAnimation from "./overlay-animation";

interface HeroProps {
  image: StaticImageData;
  heroTextBeforeSplit: string;
  heroTextAfterSplit?: string;
}


export default function Hero({ image, heroTextBeforeSplit, heroTextAfterSplit }: HeroProps) {
  return (
    <section className='relative md:h-[80vh] flex items-center justify-center sm:py-12'>
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
        <Image 
          alt="hero image" 
          src={image}
          priority={true}
          className="h-full w-full object-cover"
        />
        <OverlayAnimation />
      </div>

      <div className="z-10">
        <div className="space-y-4 flex flex-col justify-center items-center">
          <h6 className="font-medium text-sm font-raleway text-center whitespace-nowrap mt-8 md:mt-0">Affordable Cybersecurity for SME</h6>
          <h1 className='text-balance mb-8 z-10 font-neuePower font-black sm:tracking-widest md:tracking-wider text-center text-4xl md:text-5xl lg:text-7xl xl:text-9xl'>
            {heroTextBeforeSplit} <br className="my-5"/> {heroTextAfterSplit}
          </h1>
          <div className="flex items-center justify-center py-4 md:py-0">
            <Link href='/quote'>
              <Button size='lg' variant='secondary'>Get a Tailored Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}