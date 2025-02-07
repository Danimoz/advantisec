import { StaticImageData } from "next/image";
import Image from "next/image";

export interface FolderCardProps {
  fillColor: string;
  stopColor: string;
  stopColor2: string;
  heading: string;
  description: string;
  image: StaticImageData;
  textColor: string;
  headingColor: string
  className?: string
}

export default function FolderCard({ fillColor, stopColor, stopColor2, heading, description, image, textColor, headingColor, className }: FolderCardProps) {
  return (
    <div className={`relative p-0 w-full max-w-[645px] font-raleway ${className}`}>
      <svg className='w-full h-auto' viewBox="0 0 610 410" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M590 1.5C600.217 1.5 608.5 9.78273 608.5 20V390C608.5 400.217 600.217 408.5 590 408.5H20C9.78274 408.5 1.5 400.217 1.5 390V59C1.5 48.7827 9.78273 40.5 20 40.5H381C396.148 40.5 409.351 32.1834 416.296 19.8745C418.957 15.1587 422.346 10.5328 426.362 7.10175C430.372 3.67709 434.935 1.5 440 1.5H590Z" 
          fill={fillColor}
          stroke="url(#paint0_linear_279_605)" 
          strokeWidth="3"
        />
        <defs>
          <linearGradient id="paint0_linear_279_605" x1="305" y1="0" x2="305" y2="410" gradientUnits="userSpaceOnUse">
            <stop stopColor={stopColor}/>
            <stop offset="1" stopColor={stopColor2}/>
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute top-[14%] left-6 p-2.5 md:p-5 flex">
        <div className="w-1/2">
          <p className="text-xs md:text-sm" style={{ color: textColor }}>{description}</p>
        </div>
      </div>

      <div className="absolute bottom-4 left-6 p-2.5 md:p-5">
        <p 
          className={`font-bold text-2xl md:text-4xl`}
          style={{ color: headingColor }}
        >
          {heading}
        </p>
      </div>

      <div className="absolute top-0 right-0">
        <Image alt='mask' src={image} className="sm:w-auto" draggable='false' />
      </div>
    </div>
  )
}