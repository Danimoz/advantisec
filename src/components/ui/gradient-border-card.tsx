import { ReactNode } from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface GradientBorderCardProps {
  children: ReactNode;
  gradientDirection: 'up' | 'down' | 'left' | 'right';
  cardClassName?: string;
  className?: string;
  from?: string;
  to?: string;
}

const gradientDirections = {
  up: "bg-gradient-to-t",
  down: "bg-gradient-to-b",
  left: "bg-gradient-to-l",
  right: "bg-gradient-to-r",
}

export default function GradientBorderCard({ children, cardClassName, gradientDirection, className, from, to }: GradientBorderCardProps) {
  const gradientClasses = cn(gradientDirections[gradientDirection], from || 'from-secondary', to || 'to-primary', 'p-[1px] rounded-xl', className);
  return (
    <div className={gradientClasses}>
      <Card className={cn(cardClassName, 'rounded-xl')}>
        {children}
      </Card>
    </div>
  )
}