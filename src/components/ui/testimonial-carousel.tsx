'use client';

import { AnimatePresence, motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface TestimonialCarouselProps {
  testimonials: {
    image: StaticImageData;
    stars: number;
    quote: string;
    author: string;
    company: string;
    logo: StaticImageData;
  }[],
  interval?: number
}

export default function TestimonialCarousel({ testimonials, interval = 5000 }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [testimonials.length, interval]);

  return (
    <div className="w-full">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="overflow-hidden w-full"
        >
          <div className="flex flex-col md:flex-row items-center p-6 gap-6">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              src={testimonials[currentIndex].image.src}
              alt={testimonials[currentIndex].author}
              className="border-2 border-primary rounded-lg"
            />
            <div className="ml-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center mb-2"
              >
                {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl font-bold mb-4"
              >
                {testimonials[currentIndex].quote}
              </motion.p>
              <div className="flex items-center gap-4">
                <div className="border-r border-primary pr-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-semibold text-base"
                  >
                    {testimonials[currentIndex].author}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm"
                  >
                    {testimonials[currentIndex].company}
                  </motion.p>
                </div>
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  src={testimonials[currentIndex].logo.src}
                  alt={testimonials[currentIndex].company}
                  className=""
                />
              </div>
              </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}