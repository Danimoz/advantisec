'use client';

import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface CardsCarouselProps {
  images: {
    src: StaticImageData
    text: string
  }[]
}

export default function CardsCarousel({ images }: CardsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleSlides = [
    images[(activeIndex - 1 + images.length) % images.length],
    images[activeIndex],
    images[(activeIndex + 1) % images.length],
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const animationValue = isMobile ? 30 : 100;

  return (
    <div className="w-full flex pt-4 justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        {visibleSlides.map((slide, index) => (
          <motion.div
            key={slide.src.src}
            className="w-full h-full rounded-[1.25rem]"
            initial={{ scale: 0.86, opacity: 0.6, x: direction === 1 ? animationValue : -animationValue }}
            custom={direction}
            animate={{ 
              scale: index === 1 ? 1 : 0.86, 
              opacity: index === 1 ? 1 : 0.6,
              x: (index - 1) * animationValue,
            }}
            exit={{ 
              scale: 0.86, 
              opacity: 0.6,
              x: direction >= 0 ? -animationValue : animationValue,
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <div className='flex-grow w-full'>
              <motion.div 
                className={`${index === 1 ? 'glow border border-primary ': ''} rounded-[1.25rem] w-full`}
              >
                <Image 
                  src={slide.src} 
                  alt={slide.text} 
                  className={`w-full h-[400px] md:h-[750px] rounded-[1.25rem]`}
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
              <div className={`text-center ${index === 1 ? 'mt-8': 'mt-16'}`}>
                <h3 className="font-black text-lg md:text-2xl lg:text-5xl uppercase text-opacity-50">{slide.text}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}