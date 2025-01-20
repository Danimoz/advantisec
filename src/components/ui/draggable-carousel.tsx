'use client';

import { motion, useAnimationControls, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FolderCard, { FolderCardProps } from "./folderCard";

interface FolderCarouselProps {
  folders: FolderCardProps[]
}

export default function DraggableCarousel({ folders }: FolderCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  
  const constraintsRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const controls = useAnimationControls()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      setContainerWidth(carouselRef.current.offsetWidth)
      setCardWidth(isMobile ? carouselRef.current.offsetWidth * 0.9 : carouselRef.current.offsetWidth * 0.45)
    }
  }, [isMobile])

  const handleDragEnd = () => {
    const currentX = x.get()
    const nearestMultiple = Math.round(currentX / cardWidth) * cardWidth
    controls.start({ x: nearestMultiple, transition: { type: "spring", stiffness: 300, damping: 30 } })
    setIsDragging(false)
  }

  return (
    <div
      className={`overflow-hidden w-full relative p-6 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      ref={carouselRef}
      onMouseEnter={() => document.body.style.cursor = 'grab'}
      onMouseLeave={() => document.body.style.cursor = 'default'}
    >
      <motion.div ref={constraintsRef} className="absolute h-auto w-full bg-gradient-to-l" />
      <motion.div
        className="flex gap-4"
        drag='x'
        style={{ x }}
        animate={controls}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
      >
        {folders.map((folder, index) => (
          <motion.div
            key={"card" + index}
            className={`flex-shrink-0 ${isMobile ? 'w-[90%]' : 'w-[45%]'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index, ease: 'easeOut', once: true } }}
          >
            <FolderCard {...folder} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}