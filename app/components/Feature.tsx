'use client';
import { useEffect, useRef } from 'react';
import EcosystemIcon from '../assets/icons/ecosystem.svg';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const borderRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!borderRef.current) return;
      const rect = borderRef.current.getBoundingClientRect();
      offsetX.set(event.clientX - rect.x);
      offsetY.set(event.clientY - rect.y);
    };
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return (
    <div className="border border-white/30  px-5 py-10 text-center rounded-xl relative">
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={borderRef}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};

export default Feature;
