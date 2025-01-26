'use client';

import { useState } from "react";
import { CardContent } from "./Card";
import GradientBorderCard from "./gradient-border-card";
import { LuChevronRight } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionProps {
  values: Array<{ question: string, answer: string }>;
}

export default function Accordion({ values }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {values.map((value, index) => (
        <GradientBorderCard key={index} gradientDirection="down" cardClassName="bg-[#0a2137] border-transparent p-1.5 md:p-4 space-y-8 h-full">
          <CardContent>
            <div
              className="flex justify-between items-center md:p-5 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="font-bold text-2xl md:text-3xl">{value.question}</h3>
              <motion.span
                initial={false}
                animate={{ rotate: activeIndex === index ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <LuChevronRight size={48} color="white" />
              </motion.span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}            
                    className="p-1.5 md:p-5"
                  >
                    <li className="pl-1.5 md:pl-5 list-disc text-xl">{value.answer}</li>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </GradientBorderCard>
      ))}
    </div>
  );
}