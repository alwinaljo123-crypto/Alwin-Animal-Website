"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";

interface AnimalCardProps {
  name: string;
  image: string;
  description: string;
  status: string;
  index: number;
}

export default function AnimalCard({ name, image, description, status, index }: AnimalCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return;
    const rect = e.currentTarget.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 20); // max rotation 20 deg
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group perspective-1000"
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-[400px] rounded-2xl relative cursor-pointer border border-emerald-900/30 overflow-hidden bg-emerald-950/20 backdrop-blur-sm"
      >
        {/* The background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content with 3D offset */}
        <div 
          className="absolute bottom-6 left-6 right-6"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-emerald-50 tracking-wide">{name}</h3>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-300 border border-red-500/30 backdrop-blur-md">
              {status}
            </span>
          </div>
          <p className="text-emerald-100/70 text-sm line-clamp-3">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
