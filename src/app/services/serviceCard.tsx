import { cn } from "@/lib/utils";
import Image from "next/image";

export interface ServiceCardProps {
  title: string;
  description: string;
  titleColor: string;
  descriptionColor: string;
  position: 'up' | 'down';
  bg: 'primary' | 'secondary';
  className?: string;
}


export default function ServiceCard({ title, description, titleColor, descriptionColor, position, bg, className }: ServiceCardProps) {
  const cardClassName = cn(className, 'relative max-w-[400px] overflow-hidden font-raleway');

  return (
    <div className={cardClassName}>
      <Image 
        src={`${bg === 'primary' ? '/serviceCard.svg' : '/serviceCardsec.svg'}`} 
        alt="service card" 
        width={419} 
        height={434}
        className={`${position === 'up' ? 'rotate-180' : ''}`}
      />

      <div className={`absolute left-0 ${position === 'up' ? 'flex flex-col items-center justify-center -bottom-16' : 'top-2'} w-full h-full text-center p-5`}>
        <h3 className={`font-bold text-5xl text-${titleColor} mb-4`}>{title}</h3>
        <p className={`text-xs ${position === 'up' ? 'px-10' : 'px-6'} text-${descriptionColor}`}>{description}</p>
      </div>
    </div>
  )
}