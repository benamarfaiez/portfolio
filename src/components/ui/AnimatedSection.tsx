// components/ui/AnimatedSection.tsx
import { ReactNode } from 'react';
import { motion, useReducedMotion, Variants, UseInViewOptions } from 'framer-motion';

export interface AnimatedSectionProps {
  id?: string;
  children: ReactNode;
  variants: Variants;
  className?: string;
  initial?: string;
  whileInView?: string;
  viewportOptions?: UseInViewOptions;
  customIndex?: number;
}

export function AnimatedSection({
  id,
  children,
  variants,
  className = '',
  initial = 'hidden',
  whileInView = 'visible',
  viewportOptions = { once: true, margin: '-30px' },
  customIndex,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      custom={customIndex}
      initial={shouldReduceMotion ? whileInView : initial}
      whileInView={whileInView}
      viewport={viewportOptions}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}