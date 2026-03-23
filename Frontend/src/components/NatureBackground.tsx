"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function NatureBackground() {
  const { scrollYProgress } = useScroll();
  
  // Parallax the forest layer mapped to scrolling. 
  // Using a smaller range to prevent excessive repaints and lag.
  const yForest = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  
  const [fireflies, setFireflies] = useState<{ id: number; x: number; y: number; duration: number; delay: number }[]>([]);
  const [birds, setBirds] = useState<{ id: number; y: number; duration: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    // Generate fireflies for the foreground with hardware-accelerated transforms
    setFireflies(Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 5,
    })));

    setBirds(Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      y: 5 + Math.random() * 40,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 10,
      scale: 0.4 + Math.random() * 0.6
    })));
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      
      {/* 3D Forest Background Layer - Hardware Accelerated */}
      <motion.div 
        className="absolute inset-[0%] bg-cover bg-center will-change-transform"
        style={{ 
          backgroundImage: 'url(/epic_forest_bg.png)',
          y: yForest,
          // Hardware acceleration
          transform: 'translateZ(0)'
        }}
      />

      {/* Dark Gradient Overlay - Reduced opacity so the image is CLERARER */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 pointer-events-none"
      />

      {/* Dynamic Birds Layer - Removed heavy filters, using performant SVG transforms */}
      <div className="absolute inset-0 opacity-60">
        {birds.map((bird) => (
          <motion.svg
            key={`bird-${bird.id}`}
            className="absolute fill-emerald-100 will-change-transform"
            style={{ 
              top: `${bird.y}%`, 
              left: '-10%',
              width: `${40 * bird.scale}px`, 
              height: `${20 * bird.scale}px`,
              transform: 'translateZ(0)'
            }}
            animate={{ x: ['0vw', '120vw'] }}
            transition={{
              x: { duration: bird.duration, repeat: Infinity, delay: bird.delay, ease: "linear" }
            }}
            viewBox="0 0 24 24"
          >
            <path d="M2.52 14.15c2.47-1.14 4.88-1.57 6.47-.96 1.76.67 3.33 2.5 5.25 2.5 1.5 0 3.1-.73 5.4-2 1.35-.74 2.87-1.78 3.32-2.18-.3.26-1.55.95-3.05 1.77-2.73 1.48-5.04 2.1-6.73 1.4-1.87-.76-3.7-2.6-5.5-2.6-1.7 0-3.3.63-5.5-1.55l-2.16-1.9v2.1c0 .7.33 1.34.8 1.84.45.45 1 .98 1.7 1.48z"/>
          </motion.svg>
        ))}
      </div>

      {/* Foreground Fireflies Layer */}
      <div className="absolute inset-0">
        {fireflies.map((ff) => (
          <motion.div
            key={`ff-${ff.id}`}
            className="absolute rounded-full bg-emerald-300 will-change-transform shadow-[0_0_8px_2px_rgba(110,231,183,0.5)]"
            style={{
              width: Math.random() > 0.8 ? '5px' : '3px',
              height: Math.random() > 0.8 ? '5px' : '3px',
              left: `${ff.x}%`,
              top: `${ff.y}%`,
              transform: 'translateZ(0)'
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              opacity: [0, 1, 0.4, 1, 0],
            }}
            transition={{
              duration: ff.duration,
              repeat: Infinity,
              delay: ff.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
    </div>
  );
}
