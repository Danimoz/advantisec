'use client';

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useMemo, useState } from "react";

interface CardsCarouselProps {
  images: {
    src: StaticImageData
    text: string
  }[]
}

export default function CardsCarousel({ images }: CardsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleSlides = [
    images[(activeIndex - 1 + images.length) % images.length],
    images[activeIndex],
    images[(activeIndex + 1) % images.length],
  ];

  const animationValue = isMobile ? 30 : 100;

  return (
    <div className="w-full flex pt-4 justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        {visibleSlides.map((slide, index) => {         
          return (
            <motion.div
              key={slide.src.src}
              className="w-full h-full rounded-[1.25rem]"
              initial={{ 
                scale: 0.86, 
                opacity: 0.6, 
                x: direction === 1 ? animationValue : -animationValue 
              }}
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
              transition={{ 
                duration: 0.5,
                type: 'spring',
                stiffness: 300,
                damping: 30,
                mass: 1,
                ease: [0.43, 0.13, 0.23, 0.96] // Custom easing function
              }}
            >
              <div className='flex-grow w-full'>
                <motion.div
                  className={`${index === 1 ? 'glow border border-primary' : ''} rounded-[1.25rem] w-full`}
                  layoutId={`slide-${slide.src.src}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.text}
                    className={`w-full h-[400px] md:h-[750px] rounded-[1.25rem]`}
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
                <motion.div 
                  className={`text-center ${index === 1 ? 'mt-8' : 'mt-16'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="font-black text-lg md:text-2xl lg:text-5xl uppercase text-opacity-50">{slide.text}</h3>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}