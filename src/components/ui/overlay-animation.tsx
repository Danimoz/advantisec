'use client';

import { useEffect, useState } from "react";

export default function OverlayAnimation() {
  const [lightIntensity, setLightIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLightIntensity((prev) => {
        const newIntensity = prev + 0.05;
        if (newIntensity >= 1) {
          clearInterval(interval);
        }
        return newIntensity <= 1 ? newIntensity : 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          background: `rgba(0, 0, 0, ${1 - lightIntensity})`, // From dark to transparent
          transition: 'background 2s ease-in-out', // Smooth transition
        }}
      />
    </div>
  );
}