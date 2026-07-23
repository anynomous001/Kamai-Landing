'use client';
import { motion } from "framer-motion";
import React from "react";

const EASE = [0.76, 0, 0.24, 1] as const;

// Masked line-by-line reveal — split children by lines (array of strings)
export function MaskedLines({ 
  lines, 
  className = "", 
  delay = 0, 
  stagger = 0.08, 
  duration = 1.2 
}: { 
  lines: (string | React.ReactNode)[]; 
  className?: string; 
  delay?: number; 
  stagger?: number; 
  duration?: number; 
}) {
  return (
    <span className={`block w-full ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden w-full py-0.5">
          <motion.span
            className="block w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function FadeUp({ 
  children, 
  delay = 0, 
  y = 20, 
  className = "", 
  once = true 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  y?: number; 
  className?: string; 
  once?: boolean; 
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.1 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string; 
}) {
  return (
    <span className={`block ${className}`}>
      <motion.span
        className="block"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
